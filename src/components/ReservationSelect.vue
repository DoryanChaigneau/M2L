<template>
<div>
  <h1>Liste des salles disponible : </h1>
  <div v-for="item in $store.state.salles" :key="item.id" class="card" >
    <div class="card-body" v-if="item.reserved !== 1">
      <h3 class="card-title">{{item.libelle}}</h3>
      <h5 class="card-title">{{item.adresse}}</h5>
      <p class="card-text"> <b>Description :</b> {{item.description}}</p>
      <p class="card-text"> <b>Surface : </b>{{item.dimension}} m²</p>
      <p class="card-text"> <b>La salle peux acceuillir : </b>{{item.nbPlaces}} personnes</p>
      <a style="color: white" href="#" class="btn btn-primary">Selectionner la salle</a>
    </div>
  </div>
</div>
</template>





<script>

export default {

  data: () => ({
    show: false,
  }),
  name: "ReservationSelect",
  beforeMount() {
    this.$store.dispatch('getSalles')
  },

}
</script>
