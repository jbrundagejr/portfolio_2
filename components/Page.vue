<script setup lang="ts">
import { useStore } from "~/store/store"
import { onIntersect } from "~/composables/onIntersect"
import type { Page } from "~/data/pages"
import { storeToRefs } from "pinia"

const store = useStore()
const { currentPage } = storeToRefs(store)
const { setCurrentPage } = store

const props = defineProps<{
	page: Page
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
		<ContactForm v-if="page.title === 'Contact'" />
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
