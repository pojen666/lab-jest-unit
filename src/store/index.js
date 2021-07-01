import Vue from 'vue'
import Vuex from 'vuex'
import currentUnit from './modules/current-unit'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    currentUnit
  }
})
