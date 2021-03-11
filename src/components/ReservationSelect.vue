<template>
  <div>
    <div class="col-md-8 offset-md-2" style="margin-top:50px;">

        <div class="card-header text-center">
          <h1>Liste des salles disponible :</h1>
        </div>
    <div v-for="item in $store.state.salles" :key="item.id" class="card">
      <div class="card-body" style="text-align: center">
        <h3 class="card-title">{{ item.libelle }}</h3>
        <h5 class="card-title">{{ item.adresse }}</h5>
        <p class="card-text"><b>Description :</b> {{ item.description }}</p>
        <p class="card-text"><b>Surface : </b>{{ item.dimension }} m²</p>
        <p class="card-text"><b>La salle peux acceuillir : </b>{{ item.nbPlaces }} personnes</p>
        <btn-resa :id="item.id"></btn-resa>
      </div>
    </div>
  </div>
    </div>


</template>
<script>

import BtnResa from "@/components/BtnResa";

export default {
  components: {BtnResa},
  data: () => ({
    show: false,
  }),
  name: "ReservationSelect",
  beforeMount() {
    this.$store.dispatch('getSalles')

  },


}
</script>
