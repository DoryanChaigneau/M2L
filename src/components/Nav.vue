<template>
      <v-app-bar
      >
  
        <v-toolbar-title>Page title</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon @click="$router.push('/')">
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
    name: "Nav"
  }
</script>
