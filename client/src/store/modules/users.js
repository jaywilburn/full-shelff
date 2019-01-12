import axios from 'axios'

const url = '/api/users/'

const state = {
  users: null
}

// getters
const getters = {
  users: state => state.users
}

// actions
const actions = {
  getUsers: ({ commit }) => {
    return new Promise((resolve, reject) => {
      axios.get(url).then(
        response => {
          commit('set_users', response.data)
          resolve()
        },
        err => {
          console.log('An error occurred: ' + err)
          reject(err)
        }
      )
    })
  }
}

// mutations
const mutations = {
  set_users: (state, payload) => {
    state.users = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
