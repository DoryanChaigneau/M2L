import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import route from "../router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "",
    status: ""
  },
  mutations: {
  },
  actions: {
    auth({ state }, form) {
      state.status = ""
      axios.post('auth', {
        "login": form.login,
        "motDePasse": form.motDePasse
      }).then(response => {
        state.token = response.data.token;
        state.status = "200";
        route.push('/home');
      }).catch(
          error => {
            state.status = "401";
            if (error) throw error
          }
      )
    }
  },
  modules: {
  }
})
