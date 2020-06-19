import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import History from '@/components/History'
import Styles from '@/components/Styles'
import Pizzerias from '@/components/Pizzerias'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/styles',
    name: 'Styles',
    component: Styles
  },
  {
    path: '/pizzerias',
    name: 'Pizzerias',
    component: Pizzerias
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
