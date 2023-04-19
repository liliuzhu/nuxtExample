import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/vueRouter-home.vue'
import About from '@/pages/vueRouter-about.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/other',
    name: 'other',
    component: About,
    beforeEnter (to, from, next) { // 正常使用和客户端一直
      next()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => { // 正常使用和客户端一直
  next()
})

export function createRouter () {
  return router
}
