<template>
  <v-card class="card" elevation="1">
    <v-card-title>
      Connexion
    </v-card-title>
    <v-card-text>
      <v-text-field label="Adresse mail*" :rules="rules" hide-details="auto" />
      <v-text-field label="Mot de passe*" :rules="rules" hide-details="auto" />
    </v-card-text>
    <v-card-actions class="actions">
      <v-btn id="coButtom" color="primary">
        se connecter
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
    name: "Connection",
  data() {
    return {
      rules: [value => !!value || "Champ requis."],
      form: {
        login: "",
        motDePasse: ""
      }
    }
  },
  methods: {
    login(form) {
      console.log(form)
      this.$store.dispatch('login', form)
    }
  }
}
</script>

<style scoped>

#coButtom{
  margin-bottom: 1em;
}
.card {
  margin-left: auto;
  margin-right: auto;
  width:50%;
  margin-top: 50px;
  /* height: 50vh; */
  align-self: stretch;
}
.actions {
  margin-top: 40px;
  justify-content: center;
  flex-direction: column;
}
</style>