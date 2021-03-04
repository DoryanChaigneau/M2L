<template>
  <div>
    <Nav></Nav>
    <Connection></Connection>
  </div>
</template>

<script>
import Connection from '@/components/Connection.vue';
import Nav from '@/components/Nav.vue'
export default {
  name: 'ConnectionView',
  components:{
    Nav,
    Connection
  }
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