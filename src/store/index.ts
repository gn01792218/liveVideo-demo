import { createStore } from 'vuex'
import lobby from './lobby'
import auth from './auth'
import table from './table'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    lobby,auth,table,
  }
})
