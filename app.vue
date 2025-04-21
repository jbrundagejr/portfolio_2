<script setup lang="ts">
import { useStore } from "./stores/store"

const store = useStore()
const { getProjects, getAbout, setScrollY } = store

await getProjects()
await getAbout()

onMounted(async () => {
	window.addEventListener("scroll", () => {
		setScrollY(window.scrollY)
	})
})
</script>

<template>
	<NuxtPage />
</template>
