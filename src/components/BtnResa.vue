<template>


  <div class="text-center" data-app>
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Réserver
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Reservation :
        </v-card-title>

        <v-card-text class="cssDatePicker">
          <v-app id="inspire">
            <v-row justify="center">
              <v-date-picker v-model="picker"></v-date-picker>
            </v-row>
          </v-app>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="red"
              text
              @click="dialog = false"
          >
            Annuler
          </v-btn>
          <v-btn color="red" text @click="postResa(picker, id)">Valider</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {
  name: "BtnResa",
  props: [
    'id'
  ],

  data() {
    return {
      dialog: false,
      picker: new Date().toISOString().substr(0, 10),

    }
  },
  beforeMount() {
    this.$store.dispatch('getSalles')
  },
  methods: {
    postResa(date, id) {
      this.$store.dispatch('makeResa', {id: id, date: date})

    }
  },
}
</script>

<style scoped>

.cssDatePicker {
  min-height: 1vh !important;
}

.theme--dark.v-btn.v-btn--has-bg {
  background-color: #108DEA  !important;
}
</style>
