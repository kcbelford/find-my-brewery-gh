<template lang="html">
  <div class="home">
    <Header/>
    <Nav/>
    <main class="main">
      <h1 class="text-center pb-5 font-weight-light text-uppercase">Hey there pizza lover!</h1>
      <div class="main-content">
        <img class="img-fluid bianco mx-auto d-block" src="../assets/bianco-1.jpg" alt="a man holding a baby standing in front of Pizzeria Bianco">
        <div class="">
          <p class="my-name-is lead">My name is Kevin...</p>
          <p class="lead">
            ...and I am a big fan of pizza (making and eating). The photo on this page is of myself and my daughter standing in front of arguably the best pizza restaurant in the United States, <span class="bianco-p">Pizzeria Bianco</span>.
            On this site you will find a brief history of pizza, imagery of different styles of pizza, and a list of some of the best pizzerias in the United States.
          </p>
          <p class="enjoy lead">Enjoy!</p>
        </div>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',

  components: {
    Nav,
    Header,
    Footer
  }
}
</script>

<style lang="css" scoped>
.my-name-is {
  font-size: 2rem;
  font-style: italic;
}

.enjoy {
  font-size: 2rem;
  font-style: italic;
}

.bianco-p {
  font-weight: bold;
  font-style: italic;
}

.main {
    padding: 6rem 4rem;
    /* background-color: #F9F8F9; */
}

.main-content {
  padding-top: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

p {
  padding-left: 4rem;
  padding-top: 2rem;
  line-height: 30px;
  letter-spacing: 2px;
}

.bianco {
  width: 25rem;
  border-radius: 10px;
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.1);
}

@media screen  and (max-width: 769px) {
  .my-name-is {
    padding-top: 4rem;
  }

  p {
    padding: 0;
  }

  .main-content {
    flex-direction: column;
    padding-top: 0;
  }
}

@media screen and (max-width: 577px) {
  .my-name-is {
    padding-top: 4rem;
  }

  .main {
    padding: 6rem 0.5rem;
  }

  .main-content {
    flex-direction: column;
    padding-top: 0;
  }

  p {
    padding: 0;
  }
}
</style>
