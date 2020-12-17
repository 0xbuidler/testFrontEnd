import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _be6699a4 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _cd6d8aea = () => interopDefault(import('../pages/myDemo.vue' /* webpackChunkName: "pages/myDemo" */))
const _db8b3a3a = () => interopDefault(import('../pages/home/home.vue' /* webpackChunkName: "pages/home/home" */))
const _3a89a7b4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/inspire",
    component: _be6699a4,
    name: "inspire"
  }, {
    path: "/myDemo",
    component: _cd6d8aea,
    name: "myDemo"
  }, {
    path: "/home/home",
    component: _db8b3a3a,
    name: "home-home"
  }, {
    path: "/",
    component: _3a89a7b4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
