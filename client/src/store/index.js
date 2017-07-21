import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'

import home from './modules/home.js'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    home
  }
})
