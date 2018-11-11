import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import product from "./modules/product"
import cart from "./modules/cart"
export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    product,
    cart
  }
})
