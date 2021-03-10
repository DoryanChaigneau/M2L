import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import route from "../router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    body: {
      token: "",
      id_league:"",
      libelle_league:"",
    }
  },
  mutations: {
  },
  actions: {
    auth({ state }, form) {
      axios.post('auth', {
        "login": form.login,
        "motDePasse": form.motDePasse
      }).then(response => {
        state.body.token = response.data.body.token;
        localStorage["token"] = response.data.body.token;
        localStorage["id_league"] = response.data.body.id_league;
        route.push('/home');
      }).catch(
          error => {
            if (error) throw error
          }
      )
    },
    league(id_league){
      axios.post('league',{
        "id_league": id_league
      }).then(response => {
        localStorage["libelle_league"] = response.data.body.libelle_league
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
