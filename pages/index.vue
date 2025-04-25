<script setup lang="ts">
import Projects from "~/components/projects/Projects.vue"
import About from "~/components/About.vue"

useHead({
	title: "jon's portfolio",
})
</script>

<template>
	<NuxtLayout>
		<template #body>
			<Projects />
			<About />
		</template>
	</NuxtLayout>
</template>

<style scoped>
.page__header {
	transition: all 350ms;
}

.page__header--active {
	position: sticky;
	top: 156px;
	display: flex;
}

.page__header--passive {
	display: none;
}
</style>
