<template>
  <div class="text-center" data-app>
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          ERREUR
        </v-card-title>

        <v-card-text>
          Identifiants incorrects
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="$emit('change',false)"
          >
            REESSAYER
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>

export default {

  name: "AuthError",
  props: {
    isTrue: Boolean
  },
  computed: {
    dialog: function () {
       return this.isTrue
    }
  }
}
</script>
