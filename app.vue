<script setup lang="ts">
import { useStore } from "./stores/store"
import { storeToRefs } from "pinia"

const store = useStore()
const { projects, about } = storeToRefs(store)
const { getProjects, getAbout, setScrollY, setProjectIndex, getData } = store

onMounted(async () => {
	window.addEventListener("scroll", () => {
		setScrollY(window.scrollY)
	})
})

await getData()
</script>

<template>
	<NuxtPage />
</template>
