<template>
	<div>
		<Nav></Nav>
		<ReservationParam></ReservationParam>
	</div>
</template>

<script>
import ReservationParam from '@/components/ReservationParam.vue';
import Nav from '@/components/Nav.vue'
export default {
  name: 'ReservationParamView',
  components:{
    ReservationParam,
    Nav
  },
}
</script>
<style scoped>

</style>