<template lang="html">
  <div class="history">
    <Header/>
    <Nav/>
    <main class="main">
        <h1 class="text-center font-weight-light text-uppercase">A brief history of pizza</h1>
        <h2 class="text-center pb-5 font-weight-lighter h6">Source: pizzafacts.net</h2>
        <!-- bootstrap grid displays three units across on lg and above sceens and one unit across on xs and above screens -->
        <div class="container-fluid px-lg-5">
          <div class="row mx-lg-n5">
            <div class="col-lg-4 col-xs-12 py-3 px-lg-5 bg-lighter">
              <h2 class="font-weight-lighter">1st Millenium BC</h2>
              <p class="lead">Archeologist in Sardinia found ancient remains of a flattened bread that was apparently very popular among the local population.</p>
            </div>
            <div class="col-lg-4 col-xs-12 py-3 px-lg-5 bg-light">
              <h2 class="font-weight-lighter">1st Century BC</h2>
              <p class="lead">Excavations were made in Pompeii under the mountain/volcano Vesuvius that proved the existence of pizzas that were common in that part of Italy. In the ruins of Pompeii archeologist even found entire untouched workshops, shops, and tools of the trade that are used for selling and production of pizzas.</p>
            </div>
            <div class="col-lg-4 col-xs-12 py-3 px-lg-5 bg-lighter">
              <h2 class="font-weight-lighter">1522</h2>
              <p class="lead">After tomatoes were first imported to Europe from the New World, people of Naples first managed to combine them with their bread products, creating the earliest form of modern pizza. As Naples was one of the centers of Italian food production and a busy port full of sailors, word about this new dish spread across the Europe.</p>
            </div>
          </div>
          <div class="row mx-lg-n5">
            <div class="col-lg-4 col-xs-12 py-3 px-lg-5 bg-light">
              <h2 class="font-weight-lighter">17th Century</h2>
              <p class="lead">Pizza created in Naples gained great popularity among its citizens and tourists who visited that region of Italy.</p>
            </div>
            <div class="col-lg-4 col-xs-12 py-3 px-lg-5 bg-lighter">
              <h2 class="font-weight-lighter">1830</h2>
              <p class="lead">Antica Pizzeria Port'Alba, the first ever modern pizzeria opened in Naples.</p>
            </div>
            <div class="col-lg-4 col-xs-12 py-3 px-lg-5 bg-light">
              <h2 class="font-weight-lighter">1889</h2>
              <p class="lead">By the orders of Umberto I King of Italy and his wife Queen Margherita di Savoia, the most famous Naples pizza chef Raffaele Esposito created for them three pizzas. After the King and Queen expressed their immense satisfaction for his work, Naples became firmly the center of the pizza world, and designs of Raffaele Esposito became standard for all future pizzas.  It is said that the Margherita pizza was named after Queen Margherita.</p>
            </div>
          </div>
          <div class="row mx-lg-n5">
            <div class="col-lg-4 col-xs-12 py-3 px-lg-5 bg-lighter">
              <h2 class="font-weight-lighter">1905</h2>
              <p class="lead">First American license for baking pizzas granted to Gennaro Lombardi Spring Street in New York City ("Lombardi's Pizza").</p>
            </div>
            <div class="col-lg-4 col-xs-12 py-3 px-lg-5 bg-light">
              <h2 class="font-weight-lighter">1924</h2>
              <p class="lead">Famous American cook, and former Lombardi's pizzaiolo, Anthony "Totonno" Pero opens his Totonno's Pizzeria in Coney Island, N.Y.</p>
            </div>
            <div class="col-lg-4 col-xs-12 py-3 px-lg-5 bg-lighter">
              <h2 class="font-weight-lighter">1943</h2>
              <p class="lead">Ike Sewell of “Pizzeria Uno” invents Chicago-style deep-dish pizza.</p>
            </div>
          </div>
          <div class="row mx-lg-n5">
            <div class="col-lg-4 col-xs-12 py-3 px-lg-5 bg-light">
              <h2 class="font-weight-lighter">1957</h2>
              <p class="lead">The first supermarket frozen pizza was released by Celentano Brothers. Soon after that, frozen pizzas became very popular across the entire US.</p>
            </div>
            <div class="col-lg-4 col-xs-12 py-3 px-lg-5 bg-lighter">
              <h2 class="font-weight-lighter">1958</h2>
              <p class="lead">Opening of the first Pizza Hut in Wichita, Kansas, which will later become a worldwide franchise of pizza restaurants.</p>
            </div>
            <div class="col-lg-4 col-xs-12 py-3 px-lg-5 bg-light">
              <h2 class="font-weight-lighter">1959</h2>
              <p class="lead">The first “Little Caesars” opens.</p>
            </div>
          </div>
          <div class="row mx-lg-n5">
            <div class="col-lg-4 col-xs-12 py-3 px-lg-5 bg-lighter">
              <h2 class="font-weight-lighter">1967</h2>
              <p class="lead">The first “Domino’s” opens.</p>
            </div>
            <div class="col-lg-4 col-xs-12 py-3 px-lg-5 bg-light">
              <h2 class="font-weight-lighter">1984</h2>
              <p class="lead">The first “Papa John’s” opens.</p>
            </div>
            <div class="col-lg-4 col-xs-12 py-3 px-lg-5 bg-lighter">
              <h2 class="font-weight-lighter">2009</h2>
              <p class="lead">European Union established a ruling that protected Naples' Neapolitan pizza as a cultural food heritage. All pizzerias that want to create real Neapolitan pizza must comply with the strict standards for ingredients and process of its preparation.</p>
            </div>
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
  name: 'History',

  components: {
    Nav,
    Header,
    Footer
  }
}
</script>

<style lang="css" scoped>
.main {
    padding: 6rem 4rem;
}

@media screen and (max-width: 577px) {
  .main {
    padding: 6rem 0.5rem;
  }
}
</style>
