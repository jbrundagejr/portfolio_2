<script setup lang="ts">
import NavHeader from "~/components/NavHeader.vue"
import Footer from "~/components/Footer.vue"
</script>

<template>
	<div id="app">
		<slot name="body"></slot>
		<Footer />
	</div>
</template>

<style scoped>
#app {
	display: flex;
	flex-direction: column;
	position: relative;
	border: 1px solid red;
	width: 100%;
	padding: 24px;
}

@media (min-width: 1440px) {
	#app {
		width: 1440px;
		padding: 24px 0;
		margin: 0 auto;
	}
}
</style>
