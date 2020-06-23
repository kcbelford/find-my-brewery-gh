import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _491c23fe = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _f844a9d8 = () => interopDefault(import('../pages/craft.vue' /* webpackChunkName: "pages/craft" */))
const _125d31cb = () => interopDefault(import('../pages/favorites.vue' /* webpackChunkName: "pages/favorites" */))
const _09ac6e74 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _491c23fe,
    name: "about"
  }, {
    path: "/craft",
    component: _f844a9d8,
    name: "craft"
  }, {
    path: "/favorites",
    component: _125d31cb,
    name: "favorites"
  }, {
    path: "/",
    component: _09ac6e74,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
