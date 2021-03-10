<template>
		<div class="col-md-8 offset-md-2" style="margin-top:50px;">
			<div class="card text-center">
				<div class="card-header text-center">
          Bienvenue <input type="text" v-model="libelle" disabled>
				</div>
				<div class="card-body">
					<h5 class="card-title">Liste de vos réservations</h5>
          <ul id="resas">
            <li v-for="resa in $store.state.resas" :key="resa.id">
              {{ resa.libelle_salle }} le {{ resa.date_format }} de {{ resa.heureDebut }} jusqu'à {{ resa.heureFin }}
            </li>
          </ul>
				</div>
				<div class="card-footer text-muted">
					<router-link  class="nav-link" to="/rp">
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
        console.log(this.libelle)
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

}

</script>
