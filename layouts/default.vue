<script setup lang="ts">
import Header from "~/components/Header.vue"
import Footer from "~/components/Footer.vue"
</script>

<template>
	<div id="app">
		<Header />
		<slot name="body"></slot>
		<Footer />
	</div>
</template>

<style scoped>
#app {
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
}

@media (min-width: 1680px) {
	#app {
		width: 1680px;
		margin: 0 auto;
	}
}
</style>
