import Vue from 'vue'
import Vuex from 'vuex'

import { setSignInStateAction } from './actions/sign-in.action'
import { setSignUpStateAction } from './actions/sign-up.action'
import { setCurrentUserStateAction } from './actions/current-user.action'
import { setSignInStateMutation } from './mutations/sign-in.mutation'
import { setSignUpStateMutation } from './mutations/sign-up.mutation'
import { setCurrentUserStateMutation } from './mutations/current-user.mutation'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    styleProperties: {
      contentBarHeight: '50px',
      menuItemImageWidth: '25px'
    },
    signin: {
      email: String,
      password: String
    },
    signup: {
      firstName: String,
      lastName: String,
      email: String,
      password: String,
      passwordConfirmation: String
    },
    currentUser: {
      id: String,
      firstName: String,
      lastName: String,
      role: String,
      accessToken: String
    }
  },
  mutations: {
    setSignInStateMutation,
    setSignUpStateMutation,
    setCurrentUserStateMutation
  },
  actions: {
    setSignInStateAction,
    setSignUpStateAction,
    setCurrentUserStateAction,
  },
  modules: {
  }
})
