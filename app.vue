<script setup lang="ts">
import { useStore } from "./stores/store"

const loaded = ref(false)

const store = useStore()
const { getProjects, getAbout, setScrollY, setProjectIndex } = store

await getProjects()
await getAbout()
loaded.value = true

onMounted(async () => {
	window.addEventListener("scroll", () => {
		setScrollY(window.scrollY)
	})
})

if (loaded.value) {
	setProjectIndex(0)
}
</script>

<template>
	<NuxtPage />
</template>
