<template>
  <v-app-bar>
    <v-spacer></v-spacer>

    <v-btn icon @click="clearStore()">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
    <v-img
        justify=""
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="../assets/logoM.png"
        transition="scale-transition"
        width="100"
    />
  </v-app-bar>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    clearStore() {
      window.localStorage.clear();
      this.$router.push('/');

    }
  }
}
</script>
