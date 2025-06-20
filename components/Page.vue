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
	padding: 0 24px 72px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.page:last-child {
	padding: 0 24px 48px;
}

@media (min-width: 1080px) {
	/* .page {
		padding: 0;
		width: 100%;
	} */
}
</style>
