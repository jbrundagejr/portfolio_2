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
	title: string
}>()

const { title } = toRefs(props)

const step = ref<HTMLElement | null>(null)
const observer = ref({})

const options = {
	threshold: 0.1,
	rootMargin: "-20% 0% -20%",
}

const onDownEnter = () => {
	setCurrentPage(title.value)
}

const onUpEnter = () => {
	setCurrentPage(title.value)
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
	<div :id="title" class="page" ref="step">
		<slot name="content" />
	</div>
</template>

<style scoped>
.page {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
