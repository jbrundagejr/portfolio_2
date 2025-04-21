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
	width: calc(100% - 48px);
	padding: 0 24px;
}

@media (min-width: 1440px) {
	#app {
		width: 1440px;
		padding: 0;
		margin: 0 auto;
	}
}
</style>
