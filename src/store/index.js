import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false
  },
  mutations: {
    LOADING (state, status) {
      state.isLoading = status
    }
  },
  actions: {
    updateLoading (context, status) {
      context.commit('LOADING', status)
    }
  },
  modules: {
  }
})
