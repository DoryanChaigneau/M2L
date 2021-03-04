<template>
	<div>
		<Nav></Nav>
		<ReservationSelect></ReservationSelect>
	</div>
</template>

<script>
import ReservationSelect from '@/components/ReservationSelect.vue';
import Nav from '@/components/Nav.vue'

export default {
  name: 'ReservationSelectView',
  components:{
    ReservationSelect,
    Nav
  },
}
</script>

<style scoped>
</style>