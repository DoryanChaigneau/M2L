import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import route from "../router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    body: {
      token: "",
      id:"",
      id_league:"",
      libelle:"",
      test:"",
      error:"",
        salles: ""
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
        localStorage["id_league"] = response.data.body.id;
        route.push('/home');
      }).catch(
          error => {
            if (error) throw error
          }
      )
    },
    async league({state},id){
      await axios.post('league',{
        "id": id
      }).then(response => {
        state.body.libelle = response.data.body.libelle;
        localStorage["libelle"] = response.data.body.libelle;
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
