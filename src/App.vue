<template>
  <v-app>
    <v-app-bar app color="red" dark>
      <v-spacer></v-spacer>
      <v-img
        justify=""
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main background color= "red">
      <router-view />
    </v-main>
  </v-app>
</template>