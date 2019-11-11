import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import state from '../store/state'
import getters from '../store/getters'
import mutations from '../store/mutations'
import actions from '../store/actions'

let store = new Vuex.Store({
  //key : value 都是对象
  actions,
  mutations,
  getters,
  state
})

export default store
