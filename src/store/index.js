import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import route from "../router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    body: {
      token: ""
    },
    resultCode: ""
  },
  mutations: {
  },
  actions: {
    auth({ state }, form) {
      axios.post('auth', {
        "login": form.login,
        "motDePasse": form.motDePasse
      }).then(response => {
        state.resultCode = response.data.statusCode;
        state.body.token = response.data.body.token;
        route.push('/home');
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
