<template>
  <Connection></Connection>
</template>

<script>
import Connection from '@/components/Connection.vue'

export default {
  name: 'ConnectionView',
  components:{
    Connection
  },
}
</script>

<style scoped>

.formConnection {
  display: table;
}

.login {
  display: table-row;
}

label, input  {
  display: table-cell;
  margin-bottom: 10px;
}

label {
  padding-right: 10px;
}

</style>