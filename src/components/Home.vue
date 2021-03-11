<template>
		<div class="col-md-8 offset-md-2" style="margin-top:50px;">
			<div class="card text-center">
				<div class="card-header text-center">
          Bienvenue <input type="text" v-model="libelle" disabled>
				</div>
				<div class="card-body">
          <v-app id="inspire">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                <tr>
                  <th class="text-center">
                    Salle
                  </th>
                  <th class="text-center">
                    Date
                  </th>
                  <th class="text-center">
                    Heure de Début
                  </th>
                  <th class="text-center">
                    Heure de Fin
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="resa in $store.state.resas" :key="resa.id"
                >
                  <td>{{ resa.libelle_salle }}</td>
                  <td>{{ resa.date_format }}</td>
                  <td>{{ resa.heureDebut }}</td>
                  <td>{{ resa.heureFin }}</td>
                </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-app>

				</div>
				<div class="card-footer text-muted">
					<router-link  class="nav-link" to="/rs">
						<button type="button" class="btn btn-outline-info">Créer une réservation</button>
					</router-link>
				</div>
			</div>

		</div>
</template>

<script>
export default {
    name: "Home",
    data() {
      return {
        resas: [],
        libelle:"",
      }
    },
    methods: {

      async league() {
        var id = localStorage.getItem("id_league");
        await this.$store.dispatch('league', id);
        this.leagueName();
      },
      leagueName(){
        this.libelle = localStorage.getItem("libelle");
      },
      async tabResa() {
        var id = localStorage.getItem("id_league");
        await this.$store.dispatch('resaLeague', id);
      },
    },
    beforeMount() {
      this.league();
      this.tabResa();
     },
  // mounted() {
  //   this.tabResa();
  // }

}

</script>
