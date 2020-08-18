<template>
  <section class="">
    <find-header/>
    <find-nav/>
    <search/>
    <find-footer/>
  </section>
</template>

<script>
import header from '~/components/header.vue'
import nav from '~/components/nav.vue'
import footer from '~/components/footer.vue'
import search from '~/components/search.vue'

export default {
  components: {
    'find-header': header,
    'find-nav': nav,
    'find-footer': footer,
    search
  }
}
</script>

<style>

</style>
