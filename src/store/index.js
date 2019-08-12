import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict: process.env.NODE_ENV !== 'production',
  state: {
    persistentTest: sessionStorage.getItem("persistentTest")
  },
  mutations: {
    persistentTest(state, param) {
      sessionStorage.setItem("persistentTest", param)
      state.persistentTest = param
    }
  }
})