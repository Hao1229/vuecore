/* api example */
import axios from 'axios'

const state = {
  data: null
}

const mutations = {
  SET_DATA (state, data) {
    state.data = data
  }
}

const actions = {
  async fetchApi ({ commit }) {
    // call another module mutation
    // doc: https://vuex.vuejs.org/guide/modules.html#namespacing
    commit('global/TOGGLE_LOADING', true, { root: true })
    await axios.get(`${process.env.VUE_APP_BASE_URL}/api/`).then(response => {
      commit('SET_DATA', response.data)
      commit('global/TOGGLE_LOADING', false, { root: true })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
