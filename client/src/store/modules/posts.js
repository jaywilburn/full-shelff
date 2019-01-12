import axios from 'axios'

const url = '/api/posts/'

const state = {
  posts: null
}

// getters
const getters = {
  users: state => state.posts
}

// actions
const actions = {
  getPosts: ({ commit }) => {
    return new Promise((resolve, reject) => {
      axios.get(url).then(
        response => {
          commit('set_posts', response.data)
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
  set_posts: (state, payload) => {
    state.posts = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
