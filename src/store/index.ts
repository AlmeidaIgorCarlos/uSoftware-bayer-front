import Vue from 'vue'
import Vuex from 'vuex'

import { setSignInStateAction } from './actions/sign-in.action'
import { setSignInStateMutation } from './mutations/sign-in.mutation'
import { StateSignInModel } from '../models/sign-in.models'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    signin: {
      email: String,
      password: String
    }
  },
  mutations: {
    setSignInStateMutation
  },
  actions: {
    setSignInStateAction
  },
  modules: {
  }
})
