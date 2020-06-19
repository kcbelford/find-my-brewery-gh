<template lang="html">
  <div class="styles">
    <Header/>
    <Nav/>
    <main class="main">
      <h1 class="text-center font-weight-light text-uppercase">Styles of Pizza</h1>
      <h2 class="text-center pb-5 font-weight-lighter h6">Click on each picture for more info</h2>
      <!-- bootstrap grid displays three images across on lg and up screens, two across on md and above screens and one across on xs and above screens -->
      <div class="container-fluid">
        <div class="row">
          <!-- v-for populates data from first object -->
          <div v-for="pizza in pizzaRowOne" :key="pizza.id" class="col-lg-3 col-md-6 col-xs-12">
            <h2 class="font-weight-lighter">{{ pizza.style }}</h2>
            <a v-b-popover.click.top="pizza.dataContent" :title="pizza.style">
            <img class="img-fluid pizza-img" :src="pizza.image" :alt="pizza.alt">
            </a>
          </div>
        </div>
        <div class="row">
          <!-- v-for populates data from second object -->
          <div v-for="pizza in pizzaRowTwo" :key="pizza.id" class="col-lg-3 col-md-6 col-xs-12">
            <h2 class="font-weight-lighter">{{ pizza.style }}</h2>
            <a v-b-popover.click.top="pizza.dataContent" :title="pizza.style">
            <img class="img-fluid pizza-img" :src="pizza.image" :alt="pizza.alt">
            </a>
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
  name: 'Styles',

  data () {
    return {
      pizzaRowOne: [
        {
          id: 0,
          style: 'Neapolitan',
          dataContent: 'The true original, topped with sauce from fresh tomatoes, olive oil, and minimal mozzarella. A single-serving, 12-inch pie cooked in a wood-fired oven between 800 and 900 degrees F.',
          image: require('../assets/Neapolitan-Pizza.jpg'),
          alt: 'Neapolitan style pizza'
        },
        {
          id: 1,
          style: 'New York',
          dataContent: 'Large, foldable slices with a crispy outer crust. Traditional toppings of tomato sauce and mozzarella cheese, Originally a variation of Neapolitan-style pizza. Unique flavor due to minerals in New York’s tap water supply.',
          image: require('../assets/NewYork-Pizza.jpg'),
          alt: 'New York style pizza'
        },
        {
          id: 2,
          style: 'Chicago',
          dataContent: 'Prepared as the thick, classic deep-dish pizza. Baked in a greased round pan with tall sides. Toppings assembled upside-down from their usual order.',
          image: require('../assets/chicago-pizza.jpg'),
          alt: 'Chicago style pizza'
        },
        {
          id: 3,
          style: 'Detroit',
          dataContent: 'Originally baked in a square automotive parts pan in the 1940’s, this pizza is first topped with pepperoni, followed by brick or mozzarella cheese which is spread to the very edges of the pan, yielding a caramelized cheese perimeter. Sauce is spooned over the cheese. The crust is extra crispy but tender and airy on the inside.',
          image: require('../assets/detroit-pizza.jpg'),
          alt: 'Detroit style pizza'
        }
      ],

      pizzaRowTwo: [
        {
          id: 0,
          style: 'California',
          dataContent: 'Originally baked in a square automotive parts pan in the 1940’s, this pizza is first topped with pepperoni, followed by brick or mozzarella cheese which is spread to the very edges of the pan, yielding a caramelized cheese perimeter. Sauce is spooned over the cheese. The crust is extra crispy but tender and airy on the inside.',
          image: require('../assets/california-pizza.jpg'),
          alt: 'California style pizza'
        },
        {
          id: 1,
          style: 'New Haven',
          dataContent: 'Originally baked in a square automotive parts pan in the 1940’s, this pizza is first topped with pepperoni, followed by brick or mozzarella cheese which is spread to the very edges of the pan, yielding a caramelized cheese perimeter. Sauce is spooned over the cheese. The crust is extra crispy but tender and airy on the inside.',
          image: require('../assets/new-haven-pizza.jpg'),
          alt: 'New Haven style pizza'
        },
        {
          id: 2,
          style: 'Sicilian',
          dataContent: 'Originally baked in a square automotive parts pan in the 1940’s, this pizza is first topped with pepperoni, followed by brick or mozzarella cheese which is spread to the very edges of the pan, yielding a caramelized cheese perimeter. Sauce is spooned over the cheese. The crust is extra crispy but tender and airy on the inside.',
          image: require('../assets/sicilian-pizza.jpg'),
          alt: 'Sicilian style pizza'
        },
        {
          id: 3,
          style: 'Tomato Pie',
          dataContent: 'Originally baked in a square automotive parts pan in the 1940’s, this pizza is first topped with pepperoni, followed by brick or mozzarella cheese which is spread to the very edges of the pan, yielding a caramelized cheese perimeter. Sauce is spooned over the cheese. The crust is extra crispy but tender and airy on the inside.',
          image: require('../assets/tomato-pie-pizza.jpg'),
          alt: 'Tomato pie style pizza'
        },
      ]
    }
  },

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

.pizza-img {
  width: 25rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
}

@media screen and (max-width: 577px) {
  .main {
    padding: 6rem 0.5rem;
  }
}
</style>
