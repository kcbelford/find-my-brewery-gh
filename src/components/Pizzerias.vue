<template lang="html">
  <div class="pizzerias">
    <Header/>
    <Nav/>
    <main class="main">
      <h1 class="text-center font-weight-light text-uppercase">Some of the best pizza in America</h1>
      <h2 class="text-center pb-5 font-weight-lighter h6">In no particular order (with a few of my favs included)</h2>
      <!-- container for accordion elements -->
      <div class="accordion" id="pizzaAccordion">
        <!-- v-for populates list of pizzerias in accordian -->
        <div v-for="pizzeria in pizzerias" :key="pizzeria.key" class="card">
          <div class="card-header" :id="pizzeria.headingId">
            <h2 class="mb-0">
              <button class="btn collapsed" type="button" data-toggle="collapse" :data-target="pizzeria.dataTarget" aria-expanded="true" :aria-controls="pizzeria.collapseId">
                <h2 class="font-weight-normal pizzeria-name">{{pizzeria.name}}</h2>
              </button>
            </h2>
          </div>
          <div :id="pizzeria.collapseId" class="collapse" :aria-labelledby="pizzeria.headingId" data-parent="#pizzaAccordion">
            <div class="card-body">
              <p class="lead">{{pizzeria.bio}}</p>
              <p class="lead">{{pizzeria.address}}</p>
              <p class="lead">Website: <a :href="pizzeria.url" target="_blank">{{pizzeria.website}}</a></p>
            </div>
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
  name: 'Pizzerias',

  components: {
    Nav,
    Header,
    Footer
  },

  data () {
    return {
      pizzerias: [
        {
          key: 0,
          name: '1. Frank Pepe Pizzeria Napoletana',
          bio: 'Casual local pizzeria chain serving a menu of coal-fired pies, beer & wine since 1925.',
          address: 'Address: 157 Wooster St, New Haven, CT 06511',
          url: 'http://www.pepespizzeria.com',
          website: 'pepespizzeria.com',
          headingId: 'headingOne',
          collapseId: 'collapseOne',
          dataTarget: '#collapseOne'
        },
        {
          key: 1,
          name: '2. Lucali',
          bio: 'Popular neighborhood eatery serves thin-crust pizza & guests bring their own wine & beer; cash only.',
          address: 'Address: 575 Henry St, Brooklyn, NY 11231',
          url: 'https://www.lucalibrooklyn.com/',
          website: 'lucalibrooklyn.com',
          headingId: 'headingTwo',
          collapseId: 'collapseTwo',
          dataTarget: '#collapseTwo'
        },
        {
          key: 2,
          name: "3. Lombardi's",
          bio: 'Landmark NoLita restaurant serving coal-fired, thin-crust Neapolitan pizza since 1905.',
          address: 'Address: 32 Spring St, New York, NY 10012',
          url: 'https://www.firstpizza.com/',
          website: 'firstpizza.com',
          headingId: 'headingThree',
          collapseId: 'collapseThree',
          dataTarget: '#collapseThree'
        },
        {
          key: 3,
          name: "4. Totonno's",
          bio: 'Beloved old-school joint furnishing thin-crust coal-oven pizza to Coney Island crowds since 1924.',
          address: 'Address: 1524 Neptune Ave, Brooklyn, NY 11224',
          url: 'https://www.totonnosconeyisland.com/',
          website: 'totonnosconeyisland.com',
          headingId: 'headingFour',
          collapseId: 'collapseFour',
          dataTarget: '#collapseFour'
        },
        {
          key: 4,
          name: "5. Sally's Apizza",
          bio: 'Iconic pizzeria known for its coal-fired, thin-crust pies, long lines & basic, no-frills digs.',
          address: 'Address: 237 Wooster St, New Haven, CT 06511',
          url: 'http://sallysapizza.com/',
          website: 'sallysapizza.com',
          headingId: 'headingFive',
          collapseId: 'collapseFive',
          dataTarget: '#collapseFive'
        },
        {
          key: 5,
          name: "6. Patsy's Pizzeria",
          bio: 'This historic parlor offers coal-fired pizzas & other Italian mains in a comfortable setting.',
          address: 'Address: 2287 1st Avenue, New York, NY 10035',
          url: 'https://www.thepatsyspizza.com/',
          website: 'thepatsyspizza.com',
          headingId: 'headingSix',
          collapseId: 'collapseSix',
          dataTarget: '#collapseSix'
        },
        {
          key: 6,
          name: "7. John's of Bleecker Street",
          bio: 'Brick-oven pies (no slices) with crisp thin crusts are the signature of this circa-1929 pizzeria.',
          address: 'Address: 278 Bleecker St, New York, NY 10014',
          url: 'http://www.johnsbrickovenpizza.com/',
          website: 'johnsbrickovenpizza.com',
          headingId: 'headingSeven',
          collapseId: 'collapseSeven',
          dataTarget: '#collapseSeven'
        },
        {
          key: 7,
          name: "8. Joe's Pizza",
          bio: 'West Village locals have depended on this counter-service pizzeria for quick slices since 1975.',
          address: 'Address: 7 Carmine St, New York, NY 10014',
          url: 'http://www.joespizzanyc.com/',
          website: 'joespizzanyc.com',
          headingId: 'headingEight',
          collapseId: 'collapseEight',
          dataTarget: '#collapseEight'
        },
        {
          key: 8,
          name: "9. Una Pizza Napoletana",
          bio: "Modern space offering self-taught pizzaiolo Anthony Mangieri's 12-inch, wood-fired Neapolitan pies.",
          address: 'Address: 175 Orchard St, New York, NY 10002',
          url: 'http://www.unapizza.com/',
          website: 'unapizza.com',
          headingId: 'headingNine',
          collapseId: 'collapseNine',
          dataTarget: '#collapseNine'
        },
        {
          key: 9,
          name: "10. Di Fara",
          bio: "Pizza fans trek to this no-frills Midwood storefront & queue up to partake of its storied slices.",
          address: 'Address: 1424 Avenue J, Brooklyn, NY 11230',
          url: 'https://www.difarapizzany.com/',
          website: 'difarapizzany.com',
          headingId: 'headingTen',
          collapseId: 'collapseTen',
          dataTarget: '#collapseTen'
        },
        {
          key: 10,
          name: "11. Pizzeria Bianco",
          bio: "Cozy, brick-walled restaurant serving wood-fired Neapolitan pizzas & Italian small plates.",
          address: 'Address: 623 E Adams St, Phoenix, AZ 85004',
          url: 'http://www.pizzeriabianco.com/',
          website: 'pizzeriabianco.com',
          headingId: 'headingEleven',
          collapseId: 'collapseEleven',
          dataTarget: '#collapseEleven'
        },
        {
          key: 11,
          name: "12. Scarr's Pizza",
          bio: "Pizzeria with retro looks serving pies, slices & subs made with modern ingredients.",
          address: 'Address: 22 Orchard St, New York, NY 10002',
          url: 'http://www.scarrspizza.com/',
          website: 'scarrspizza.com',
          headingId: 'headingTwelve',
          collapseId: 'collapseTwelve',
          dataTarget: '#collapseTwelve'
        },
        {
          key: 12,
          name: "13. Delancey",
          bio: "Intimate & trendy restaurant known for its wood-fired pizzas decorated with seasonal toppings.",
          address: 'Address: 1415 NW 70th St, Seattle, WA 98117',
          url: 'https://delanceyseattle.com/',
          website: 'delanceyseattle.com',
          headingId: 'headingThirteen',
          collapseId: 'collapseThirteen',
          dataTarget: '#collapseThirteen'
        },
        {
          key: 13,
          name: "14. Pizzeria Mozza",
          bio: "Chef Nancy Silverton turns out acclaimed wood-burning-oven pizzas & antipasti in busy digs.",
          address: 'Address: 641 N Highland Ave, Los Angeles, CA 90036',
          url: 'https://pizzeriamozza.com/',
          website: 'pizzeriamozza.com',
          headingId: 'headingFourteen',
          collapseId: 'collapseFourteen',
          dataTarget: '#collapseFourteen'
        },
        {
          key: 14,
          name: "15. Paulie Gee's",
          bio: "Gourmet pizzeria where the wood-fired pies are topped with unusual, locally sourced ingredients.",
          address: 'Address: 60 Greenpoint Ave, Brooklyn, NY 11222',
          url: 'https://pauliegee.com/greenpoint/',
          website: 'pauliegee.com/greenpoint',
          headingId: 'headingFifteen',
          collapseId: 'collapseFifteen',
          dataTarget: '#collapseFifteen'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.main {
    padding: 6rem 4rem;
}

.pizzeria-name:hover {
  color: #FA5D29;
}

@media screen and (max-width: 577px) {
  .main {
    padding: 6rem 0.5rem;
  }

  .pizzeria-name {
    font-size: 1.15rem;
  }
}
</style>
