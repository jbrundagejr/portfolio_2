<script setup lang="ts">
import { useStore } from "./stores/store"
import { useBreakpointStore } from "./stores/breakpointStore"
import { storeToRefs } from "pinia"

const store = useStore()
const { getProjects, getAbout, setScrollY } = store

const breakpointStore = useBreakpointStore()
const { setWindowWidth } = breakpointStore

const resizeHandler = () => {
	setWindowWidth(window.innerWidth)
}

await getProjects()
await getAbout()

onMounted(async () => {
	window.addEventListener("scroll", () => {
		setScrollY(window.scrollY)
	})

	setWindowWidth(window.innerWidth)
	window.addEventListener("resize", resizeHandler)
})
</script>

<template>
	<NuxtPage />
</template>
