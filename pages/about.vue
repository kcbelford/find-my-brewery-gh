<template lang="html">
  <div class="">
    <find-header/>
    <find-nav/>
    <div class="about-container">
      <h1 class="font-weight-light">{{ title }}</h1>
      <p class="lead">{{ aboutContent }}</p>
    </div>
    <find-footer/>
  </div>
</template>

<script>
import header from '~/components/header.vue'
import nav from '~/components/nav.vue'
import footer from '~/components/footer.vue'

export default {
  components: {
    'find-header': header,
    'find-nav': nav,
    'find-footer': footer
  },

  data () {
    return {
      aboutContent: "Every craft beer enthusiast deserves to have a brewery they can call their own.  That special spot, in their favorite city, where the bartender knows their name and what they're drinking.  Find My Brewery was created to aid in the discovery of such a place.  Users can simply search for a brewery, city or keyword to pull up a list of breweries and relevant info.",
      title: 'About Find My Brewery'
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Find My Brewery was created to aid in the discovery of your new favorite brewery.' }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.about-container {
  text-align: center;
  padding: 0 0 2rem;
}

h1 {
  padding: 6rem 0 4rem;;
  color: #525B5E;
}

p {
  padding: 0 6rem;
  text-align: left;
  font-size: 1.5rem;
}

/* mobile media query */
@media screen and (max-width: 577px) {
  p {
    padding: 0 1rem;
  }

  .about-container {
    /* padding: 0; */
  }

}

/* tablet media query */
@media screen  and (max-width: 769px) {

}
</style>
