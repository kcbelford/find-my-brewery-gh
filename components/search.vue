<template lang="html">
  <div class="search-container" id="top">
    <h1 v-if="!submitted" class="font-weight-light">{{ title }}</h1>
    <h1 v-if="submitted" class="font-weight-light">Here are your breweries!</h1>
    <p v-if="!submitted" class="intro lead text-uppercase" >Enter a brewery name, city or keyword to find your brewery:</p>
    <p v-if="submitted" class="intro lead text-uppercase" >Check 'em out below</p>
    <form class="find-form form-inline" action="" method="post">
      <label for="brewery-search"></label>
      <input v-model="userInput" type="text" name="brewery-search" placeholder="Brewery / City / Keyword" value="" class="form-control">
      <button @click.prevent="findBrewery" type="submit" name="find-brewery" class="btn">Find My Brewery</button>
    </form>
      <div v-if="submitted">
          <div class="brewery-tile">
           <div
             v-for="brewery of breweries"
             :key="brewery.id"
             :brewery="brewery"
             class="tile-size">
             <h4 class="brewery-name mb-4 font-weight-light">{{ brewery.name }}</h4>
             <a :href="brewery.website_url" target="_blank" class="brewery-link lead">{{ brewery.website_url }}</a>
             <p class="lead pt-4 brewery-p">{{ brewery.street }}</p>
             <div class="d-flex justify-content-center">
               <p class="lead brewery-p">{{ brewery.city }},</p>
               <div class="space">
               </div>
               <p class="lead brewery-p">{{ brewery.state }}</p>
             </div>
             <p class="lead brewery-p">{{ brewery.postal_code}}</p>
           </div>
        </div>
        <!-- back to top button -->
        <button @click="toTop" class="btn top-btn" id="myBtn">TOP</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
		brewery: Object
	},

  data() {
    return {
      userInput: "",
      submitted: false,
      loading: true,
      breweries: null,
      errored: false,
      title: 'Welcome To Find My Brewery!'
    }
  },

  head() {
    return {
      scrolled: false,
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Enter a brewery name, city or keyword to find your new favorite brewery.' }
      ]
    }
  },

  methods: {
    findBrewery: function() {
      this.submitted = true;
      axios
        .get('https://api.openbrewerydb.org/breweries/search?query=' + this.userInput)
        .then(response => (this.breweries = response.data))
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    },
    toTop: function() {
      // document.body.scrollTop = 0;
      // document.documentElement.scrollTop = 0;
      const element = document.getElementById('top');
      element.scrollIntoView({ behavior: 'smooth' });
    },

    // scrollFunc: function() {
    //   const mybutton = document.getElementById('myBtn');
    //   if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //     mybutton.style.display = "block";
    //   } else {
    //     mybutton.style.display = "none";
    //   }
    // },
    // mounted: function() {
    //     window.addEventListener('scroll', this.scrollFunc);
    // },
    // destroyed: function() {
    //     window.removeEventListener('scroll', this.scrollFunc);
    // }
  }
}
</script>

<style lang="css" scoped>

h1 {
  text-align: center;
  padding: 8rem 0 1rem;
  color: #525B5E;
}

.breweries-header {
  padding: 0 0 2rem;
}

.intro {
  text-align: center;
  color: #525B5E;
}

.find-form {
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 6rem 0 7rem;
}

.btn {
  background-color: #697649;
  color: white;
  margin-left: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
}

.btn:hover {
  background-color: #24352B;
}

.brewery-name {
  color: #607E85;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 3rem;
}

.brewery-tile {
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
}

.tile-size {
  width: 35rem;
  padding: 5rem 1rem;
  margin: 1rem;
  border: 1px solid #E5E5E5;
  border-radius: 6px;
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.1);
  /* background-color: #C5C9B2; */
}

.tile-size:hover {
  background-color: #E5E5E5;
}

.brewery-link {
  color: #697649;
  font-size: 1.5rem;
}

.brewery-p {
  font-size: 1.5rem;
}

.space {
  padding-right: 0.5rem;
}

/* back to top button */
.top-btn {
  /* display: none; */
  margin: 0;
  padding: 0.5rem;
  /* position: fixed; */
  position: absolute;
  right: 20px;
  /* bottom: 30px; */
  z-index: 99;
  letter-spacing: 2px;
}

/* mobile media query */
@media screen and (max-width: 577px) {
  .btn {
    margin: 2rem 0 0;
  }

  .form-control {
    width: 70%;
  }

  .brewery-name {
    font-size: 2rem;
  }

  .brewery-link {
    font-size: 1rem;
  }

  .brewery-p {
    font-size: 1rem;
  }
}

/* tablet media query */
@media screen  and (max-width: 769px) {

}
</style>
