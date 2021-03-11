import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import route from "../router";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        body: {
            token: "",
            id: "",
            id_league: "",
            libelle: "",
            test: "",
            error: "",
            resas: "",
        },
        salles: "",
        salleId: ""
    },
    mutations: {},
    actions: {
        auth({state}, form) {
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
        async league({state}, id) {
            await axios.post('league', {
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
        resaLeague({state}, ligueId) {
            axios.post('league/resa', {
                "ligueId": ligueId
            }).then(response => {
                state.resas = response.data.body;
            }).catch(
                error => {
                    if (error) throw error
                }
            )
        },
        makeResa({state}, {id, date}) {
            let ligueId = localStorage.getItem("id_league")
            axios.post('makeReservation', {
                "ligue_id": ligueId,
                "salle_id": id,
                "heureDebut": "00:00:00",
                "heureFin": "23:30:00",
                "date": date
            }).then(response => {
                state.resas = response.data.body;


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
    modules: {}
})
