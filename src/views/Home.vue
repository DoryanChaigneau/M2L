<template>
	<div>
		<Nav></Nav>
		<Home></Home>
	</div>
</template>

	<script>
		import Nav from '@/components/Nav.vue'
		import Home from '@/components/Home.vue'

		export default {
			name: "HomeView",
			components:{
				Nav,
				Home
			} 
		}

	</script>
	<style scoped>

</style>
