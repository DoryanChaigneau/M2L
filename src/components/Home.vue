<template>
		<div class="col-md-8 offset-md-2" style="margin-top:50px;">
			<div class="card text-center">
				<div class="card-header">
          Bienvenue <input type="text" v-model="nameLigue" disabled>
				</div>
				<div class="card-body">
					<h5 class="card-title">Liste de vos réservations</h5>
          <ul id="resas">
            <li v-for="resa in resas" :key="resa.id">
              {{ resa.libelle_salle }} le {{ resa.date }} de {{ resa.heureDebut }} jusqu'à {{ resa.heureFin }}
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
        nameLigue: ""
      }
    },
  }
</script>
