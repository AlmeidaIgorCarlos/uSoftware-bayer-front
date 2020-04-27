import Vue from 'vue'
import Vuex from 'vuex'

import { setSignInStateAction } from './actions/sign-in.action'
import { setSignUpStateAction } from './actions/sign-up.action'
import { setSignInStateMutation } from './mutations/sign-in.mutation'
import { setSignUpStateMutation } from './mutations/sign-up.mutation'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    signin: {
      email: String,
      password: String
    },
    signup:{
      firstName: String,
      lastName: String,
      email: String,
      password: String,
      passwordConfirmation: String
    }
  },
  mutations: {
    setSignInStateMutation,
    setSignUpStateMutation
  },
  actions: {
    setSignInStateAction,
    setSignUpStateAction
  },
  modules: {
  }
})
