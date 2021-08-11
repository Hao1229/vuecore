import Vue from 'vue'
import Vuex from 'vuex'
import global from './global'
import api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    global,
    api
  }
})
