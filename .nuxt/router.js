import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9fc2b4a2 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _588a62c2 = () => interopDefault(import('../pages/craft.vue' /* webpackChunkName: "pages/craft" */))
const _652b3b0e = () => interopDefault(import('../pages/favorites.vue' /* webpackChunkName: "pages/favorites" */))
const _6052ff18 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _9fc2b4a2,
    name: "about"
  }, {
    path: "/craft",
    component: _588a62c2,
    name: "craft"
  }, {
    path: "/favorites",
    component: _652b3b0e,
    name: "favorites"
  }, {
    path: "/",
    component: _6052ff18,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
