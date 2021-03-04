import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ""
  },
  mutations: {
  },
  actions: {
    login({ state}, form) {
      axios.post('auth', {
        "login": form.login,
        "motDePasse": form.motDePasse
      }).then(response => {
        console.log((response))
        state.token = response.data.token;
      }).catch(
          error => {
            if (error) throw error
          }
      )
    }
  },
  modules: {
  }
})
