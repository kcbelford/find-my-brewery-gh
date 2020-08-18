<template lang="html">
  <div class="">
    <find-header/>
    <find-nav/>
    <div class="craft-container">
      <h1 class="font-weight-light">{{ title }}</h1>
      <p class="lead">{{ craftBeer }}</p>
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
      craftBeer: 'A craft brewery or microbrewery is a brewery that produces small amounts of beer, typically much smaller than large-scale corporate breweries, and is independently owned. Such breweries are generally characterized by their emphasis on quality, flavor, and brewing technique.',
      title: 'What is Craft Beer Anyway?'
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'What is a craft brewery and why does it matter?' }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.craft-container {
  text-align: center;
  padding: 0 0 2rem;
}

h1 {
  padding: 6rem 0 4rem;
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

}

/* tablet media query */
@media screen  and (max-width: 769px) {

}
</style>
