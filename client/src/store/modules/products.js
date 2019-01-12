import axios from 'axios'

const url = '/api/products/'

const state = {
  products: null
}

// getters
const getters = {
  users: state => state.products
}

// actions
const actions = {
  getProducts: ({ commit }) => {
    return new Promise((resolve, reject) => {
      axios.get(url).then(
        response => {
          commit('set_products', response.data)
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
  set_products: (state, payload) => {
    state.products = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
