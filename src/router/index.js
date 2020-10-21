import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OOP from '../views/OOP.vue'
import classesandobjects from '../views/classesandobjects.vue'
import constructors from '../views/constructors.vue'
import ooppillars from '../views/ooppillars.vue'
import inheritance from '../views/inheritance.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/oop',
    name: 'OOP',
    component: OOP
  },
  {
    path: '/oop/classes-and-objects',
    name: 'classesandobjects',
    component: classesandobjects
  },
  {
    path: '/oop/constructors',
    name: 'constructors',
    component: constructors
  },
  {
    path: '/oop/oop-pillars',
    name: 'ooppillars',
    component: ooppillars
  },
  {
    path: '/oop/oop-pillars/inheritance',
    name: 'inheritance',
    component: inheritance
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
