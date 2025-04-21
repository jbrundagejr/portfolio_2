<script setup lang="ts">
import { useStore } from "~/stores/store"
import { storeToRefs } from "pinia"
import { onIntersect } from "~/composables/onIntersect"
import Projects from "~/components/projects/Projects.vue"
import About from "~/components/About.vue"
import type { PageInterface } from "~/util/types"

const store = useStore()
const { currentPage, projects } = storeToRefs(store)
const { setCurrentPage } = store

const props = defineProps<{
	page: PageInterface
}>()

const { page } = toRefs(props)

const step = ref<HTMLElement | null>(null)
const observer = ref({})

const options = {
	threshold: 0.5,
	// rootMargin: "20% 0% 20% 0%",
}

const onDownEnter = () => {
	setCurrentPage(page.value.title)
}

const onUpEnter = () => {
	setCurrentPage(page.value.title)
}

onMounted(() => {
	if (step.value) {
		observer.value = onIntersect({
			el: step.value,
			downEnter: onDownEnter,
			upEnter: onUpEnter,
			options,
		})
	}
})
</script>

<template>
	<div :id="page.title" class="page" ref="step">
		<Projects v-if="page.title === 'Projects'" />
		<About v-if="page.title === 'About'" />
	</div>
</template>

<style scoped>
.page {
	height: 100vh;
	width: 100%;
	border: 1px solid blue;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
