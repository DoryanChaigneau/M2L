<template>
  <div class="Connection">
    <header>
        <title>Connexion</title>
    </header>

    <form method="POST" class="formConnection">
      <div class="login">
        <label for="login">Login : </label>
        <input v-model="form.login" type="text" name="login" id="login" required>
      </div>
      <div class="password">
        <label for="password">Mot de passe : </label>
        <input v-model="form.motDePasse" type="password" name="password" id="password" required>
      </div>
      <div class="submit">
        <input @click.prevent="login(form)" type="submit" value="Connexion">
      </div>
    </form>
  </div>
</template>


<script>

export default {
    name: "Connection",
  data() {
    return {
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