<template lang="html">
  <div class="">
    <find-header/>
    <find-nav/>
    <div class="favorite-container">
      <h1 class="font-weight-light">{{ title }}</h1>
      <div v-for="favorite in myFavorites" :key="favorite.id" class="my-favs">
        <h2>{{ favorite.brewery }}</h2>
        <h3>{{ favorite.location }}</h3>
        <a :href="favorite.url" target="_blank">{{ favorite.website }}</a>
        <img :src="favorite.image" :alt="favorite.alt">
        <p class="lead brewery-info">{{ favorite.info }}</p>
      </div>
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
      myFavorites: [
        {
          id: 0,
          brewery: '7 Seas Brewing Co.',
          location: 'Tacoma, WA',
          url: 'http://www.7seasbrewing.com',
          website: '7seasbrewing.com',
          image: require('~/static/seven-seas.jpg'),
          alt: 'Interior of 7 Seas Brewery',
          info: "This brewery is larger than I typically like, but the large open space is warm and inviting (and it's kid friendly - I have two). The space is shared with a coffee shop and a sandwich shop, so you could really spend the whole day there if you wanted. They have a large selection of beer on tap and to-go. One of my favorites is their Life Jacket Citrus IPA. It has a lower alcohol content so you shouldn’t have a problem drinking a couple."
        },
        {
          id: 1,
          brewery: 'Fremont Brewing Co.',
          location: 'Seattle, WA',
          url: 'http://www.fremontbrewing.com',
          website: 'fremontbrewing.com',
          image: require('~/static/fremont-brewing.jpg'),
          alt: 'Exterior of Fremont Brewery',
          info: 'Located right off the Burke-Gilman Trail in Seattle, this brewery is the perfect finish line after a long bike ride. There is more outdoor seating than indoor, but who doesn’t like drinking beer in the rain?  Speaking of which, my favorite is the Interurban IPA.'
        },
        {
          id: 2,
          brewery: 'Boundary Bay Brewery',
          location: 'Bellingham, WA',
          url: 'http://www.bbaybrewery.com',
          website: 'bbaybrewery.com',
          image: require('~/static/boundary-bay.jpg'),
          alt: 'Exterior of Boundary Bay Brewery',
          info: 'My love for this brewery is mostly based on nostalgia. I spent a lot of time here in college (reggae night anyone?). However, they do have great beer and equally as great food.  Try their lamb burger and Scotch Ale.'
        },
        {
          id: 3,
          brewery: 'Ninkasi Brewing Co.',
          location: 'Eugene, OR',
          url: 'http://www.ninkasibrewing.com',
          website: 'ninkasibrewing.com',
          image: require('~/static/ninkasi.jpg'),
          alt: 'Exterior of Ninkasi Brewery',
          info: 'I haven’t actually been to this brewery, but I was born in Eugene so I feel a special connection to it.  I haven’t had a beer of theirs I don’t like. So my favorite is ALL OF THEM!'
        },
        {
          id: 4,
          brewery: 'Pfriem Family Brewers',
          location: 'Hood River, OR',
          url: 'http://www.pfriembeer.com',
          website: 'pfriembeer.com',
          image: require('~/static/pfriem.jpg'),
          alt: 'Interior of Pfriem Brewery',
          info: 'Well I haven’t been here either, but my favorite beer of all time comes from pFriem.  You must try their IPA.'
        },
        {
          id: 5,
          brewery: 'Stoup Brewing',
          location: 'Seattle, WA',
          url: 'http://www.stoupbrewing.com',
          website: 'stoupbrewing.com',
          image: require('~/static/stoup.jpg'),
          alt: 'Outside looking in at Stoup Brewery',
          info: 'The size and vibe of this place is what I’m typically drawn to. It is modest in size and tucked away in the residential neighborhood of Ballard in Seattle. Every day brings a different food truck parked outside so you can grab a little bite to accompany your beverage. Did I mention their head brewer is a chemist? Also, one of their owners was the first woman in Washington to become a certified cicerone (the equivalent of a beer sommelier)! Those facts, along with some fantastic beer, are more than enough reasons to check this brewery out.  One of my favorites is their Northwest Red Ale.'
        }
      ],
      title: 'My Favorite Breweries & Beers'
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'A list of my favorite brewries and relevant information.' }
      ]
    }
  }
}
</script>

<style lang="css" scoped>

.favorite-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.my-favs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  margin-bottom: 2rem;
  width: 75%;
}

h1 {
  padding: 6rem 0;
  color: #525B5E;
  text-align: center;
}

h2 {
  font-weight: lighter;
  font-size: 2.5rem;
}

h3 {
  font-weight: lighter;
}

a {
  font-size: 1.5rem;
  color: #697649;
}

img {
  width: 40rem;
  padding-top: 2rem;
}

.brewery-info {
  padding: 2rem 0;
}

/* mobile media query */
@media screen and (max-width: 577px) {
  img {
    width: 20rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  .my-favs {
    width: 90%;
  }
}

/* tablet media query */
@media screen  and (max-width: 769px) {

}
</style>
