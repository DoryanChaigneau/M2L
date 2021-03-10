import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "",
    salles: ""
  },
  mutations: {
  },
  actions: {
    login({ state}, form) {
      axios.post('auth', {
        "login": form.login,
        "motDePasse": form.motDePasse
      }).then(response => {
        state.token = response.data.token;
      }).catch(
          error => {
            if (error) throw error
          }
      )
    },
    getSalles({state}) {
      axios.get('halls').then(response => {
        state.salles = response.data.body
      }).catch(
          error => {
            if (error) throw error
          }
      );
    }
  },
  modules: {
  }
})
