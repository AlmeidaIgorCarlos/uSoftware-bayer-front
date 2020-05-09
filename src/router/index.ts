import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import SignIn from '../views/sign-in.vue'
import SignUp from '../views/sign-up.vue'
import Main from '../views/main.vue'
import { getItemFromLocalStorage } from '../services/local-storage.service'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    redirect: 'signin'
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'main') {
    if (!getItemFromLocalStorage('signin')){
      next('/')
    }
  }

  next()
})

export default router