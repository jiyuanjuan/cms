import { createStore } from 'vuex'
import loginModule from './login/login'
import { IRootState } from './type'

export default createStore<IRootState>({
  state() {
    return {
      name: 'cat',
      age: 18
    }
  },
  mutations: {},
  actions: {},
  modules: {
    loginModule
  }
})
