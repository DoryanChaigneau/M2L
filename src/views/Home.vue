<template>
  <div class="col-md-8 offset-md-2" style="margin-top:50px;">
    <div class="card text-center">
      <div class="card-header">
        Bienvenue [NOM DE LA LIGUE]
      </div>
      <div class="card-body">
        <h5 class="card-title">Liste de vos réservations</h5>
        <p class="card-text">[BOUCLE AVEC LISTE DES RESERVATIONS]</p>
      </div>
      <img alt="Vue logo" src="../assets/logo.png">
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
}

</script>
<style scoped>

</style>