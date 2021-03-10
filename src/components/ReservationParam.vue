<template>
<div id="app">
  <v-app id="inspire">
    <v-container fluid>
      <v-row align="center">
        <v-col
          class="d-flex"
          cols="12"
          sm="6"
        >
        <v-select
            :items="items"
            filled
            label="Sélectionner une salle"
          ></v-select>
        </v-col>
  
      <v-card class="card">
      <v-btn id="coButtom" color="primary">
        Sélectionner
      </v-btn>
    </v-card>
      </v-row>
    </v-container>
  </v-app>
</div>
</template>

<script>
export default {
    name: "ReservationParam",
    data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
  }
</script>
<style>
.card {
  margin-left: auto;
  margin-right: auto;
  /* height: 50vh; */
  align-self: stretch;
}

</style>