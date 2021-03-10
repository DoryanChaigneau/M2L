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
          Sélectionner l'heure
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Reservation :
        </v-card-title>
        <v-card-text>
          <v-btn
              color="red"
              text
              @click="getDate"
          >
           Valider
          </v-btn>
          <v-app id="inspire">
            <v-text-field :rules="rulesH"></v-text-field>
            <v-text-field :rules="rulesM"></v-text-field>
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
          <v-btn
              color="green"
              text
              @click="dialog = false"
          >
            Réserever
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
name: "ChooseHours",
  data () {
    return {
      dialog: false,
      rulesH: [
        value => !!value || 'Required.',
        value => (value >= 0 && value<= 23 || 'Ne peux pas dépasser 23'),
        value => {
          const pattern = /^(([0-9]{2}))$/
          return pattern.test(value) || 'Heure Invalide (Deux Chiffres minimum / ex : 08)'
        },
      ],

      rulesM: [
        value => !!value || 'Required.',
        value => (value >= 0 && value<= 59 || 'Ne peux pas dépasser 59'),
        value => {
          const pattern = /^(([0-9]{2}))$/
          return pattern.test(value) || 'Heure Invalide (Deux Chiffres minimum / ex : 08)'
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>
