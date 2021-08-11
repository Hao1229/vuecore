const state = {
  isLoading: false
}

const mutations = {
  TOGGLE_LOADING (state, status) {
    state.isLoading = status
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
