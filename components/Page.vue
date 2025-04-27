<script setup lang="ts">
import { useStore } from "~/stores/store"
import { useBreakpointStore } from "~/stores/breakpointStore"
import { storeToRefs } from "pinia"
import { onIntersect } from "~/composables/onIntersect"

const store = useStore()
const { setCurrentPage } = store

const breakpointStore = useBreakpointStore()
const { isMobile } = storeToRefs(breakpointStore)

const props = defineProps<{
	title: string
}>()

const { title } = toRefs(props)

const step = ref<HTMLElement | null>(null)
const observer = ref({})

const options = computed(() => {
	return {
		threshold: 0.1,
		// threshold: isMobile.value ? 0.5 : 0.1,
		// rootMargin: isMobile.value ? "" : "-20% 0% -20%",
	}
})

const onDownEnter = () => {
	console.log("down enter", title.value)
	setCurrentPage(title.value)
}

const onUpEnter = () => {
	console.log("up enter", title.value)
	setCurrentPage(title.value)
}

onMounted(() => {
	if (step.value) {
		observer.value = onIntersect({
			el: step.value,
			downEnter: onDownEnter,
			upEnter: onUpEnter,
			options: options.value,
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
	width: calc(100% - 48px);
	padding: 0 24px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
