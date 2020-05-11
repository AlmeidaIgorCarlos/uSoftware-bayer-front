import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { getItemFromLocalStorage } from '../services/local-storage.service'
import SignIn from '../views/sign-in.vue'
import SignUp from '../views/sign-up.vue'
import Administrator from '../views/administrator.vue'
import User from '../views/user.vue'

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
    path: '/administrator',
    name: 'administrator',
    component: Administrator
  },
  {
    path: '/user',
    name: 'user',
    component: User
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/main') {
    if (!getItemFromLocalStorage('signin'))
      next({ path: '/' })
  }
  next()
})

export default router