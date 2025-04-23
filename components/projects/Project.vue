<script setup lang="ts">
import { useStore } from "~/stores/store"
import { storeToRefs } from "pinia"
import { onIntersect } from "~/composables/onIntersect"
import type { ProjectInterface } from "~/util/types"

const store = useStore()
const { projectIndex } = storeToRefs(store)

const props = defineProps<{
	project: ProjectInterface
	index: number
}>()

const { project, index } = toRefs(props)

const step = ref<HTMLElement | null>(null)
const observer = ref({})

const options = {
	threshold: 0.3,
	rootMargin: "-20% 0% -20%",
}

const onDownEnter = () => {
	projectIndex.value = index.value
}

const onUpEnter = () => {
	projectIndex.value = index.value
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
	<div class="project" ref="step">
		<div v-if="project.title" class="meta__container">
			<h3>{{ project.title }}</h3>
		</div>
		<div v-if="project.tools.length" class="meta__container">
			<h4>Tools Used:</h4>
			<ul class="tool__container">
				<a v-for="tool in project.tools" :key="tool.icon" :href="tool.link">{{ tool.icon }}</a>
			</ul>
		</div class="">
		<div class="notes__container">
			<p v-for="(note, i) in project.notes" :key="i">{{ note }}</p>
		</div>
		<span><a v-if="project.link" :href="project.link" target="_blank">View Project</a></span>
	</div>
</template>

<style scoped>
.project {
	display: flex;
	flex-direction: column;
	gap: 20px;
}


.notes__container {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.tool__container {
	display: flex;
	flex-direction: row;
	gap: 12px;
}
</style>
