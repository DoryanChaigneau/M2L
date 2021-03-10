<template>
  <div>
    <v-card class="card" elevation="1">
      <v-card-title>
        Connexion
      </v-card-title>
      <v-card-text>
        <v-text-field label="Identifiant *" :rules="rules" hide-details="auto" v-model="form.login"/>
        <v-text-field label="Mot de passe *" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="rules"
                      :type="show1 ? 'text' : 'password'" hide-details="auto" v-model="form.motDePasse"
                      @click:append="show1 = ! show1"/>
      </v-card-text>
      <v-card-actions class="actions">
        <v-btn id="coButtom" color="primary" @click.prevent="auth(form)">
          SE CONNECTER
        </v-btn>
      </v-card-actions>
    </v-card>

    <AuthError :is-true="isBoolean" @change="isBoolean = $event"></AuthError>

  </div>
</template>

<script>
import AuthError from "@/components/AuthError";

export default {
  name: "Connection",
  components: {AuthError},
  data() {
    return {
      show1: false,
      isBoolean: false,
      rules: [value => !!value || "Champ requis."],
      form: {
        login: "",
        motDePasse: ""
      }
    }
  },
  methods: {
    auth(form) {
      this.$store.dispatch('auth', form);
      this.isBoolean = true;
    }
  }
}
</script>

<style scoped>

#coButtom {
  margin-bottom: 1em;
}

.card {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
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
