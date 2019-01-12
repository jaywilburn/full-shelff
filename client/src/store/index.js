import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/posts'
import users from './modules/users'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    posts,
    users,
    products
  }
})
