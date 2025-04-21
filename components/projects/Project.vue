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
	threshold: 0.5,
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
	<div
		ref="step"
		v-if="project"
		:id="project.title"
		:class="projectIndex === index ? 'current' : 'notCurrent'"
	>
		<img v-if="project.image" :src="project.image" :alt="project.title" />
		<div v-if="project.title" class="meta__container">
			<h3>Project Name:</h3>
			<h3>{{ project.title }}</h3>
		</div>
		<div v-if="project.tools.length" class="meta__container">
			<h3>Tools Used:</h3>
			<div class="tool__container">
				<h3 v-for="tool in project.tools" :key="tool">{{ tool }}</h3>
			</div>
		</div>
		<div v-if="project.notes || project.link">
			<p>{{ project.notes }}</p>
			<a v-if="project.link" :href="project.link" target="_blank"
				>View Project</a
			>
		</div>
	</div>
</template>

<style scoped>
.current {
	opacity: 1;
	transition: all 350ms;
}

.current img {
	position: sticky;
	top: 50%;
	transform: translateX(-50%);
}

.notCurrent {
	opacity: 0;
}
.meta__container {
	display: flex;
	flex-direction: row;
	gap: 20px;
}

.tool__container {
	display: flex;
	flex-direction: row;
	gap: 15px;
}

img {
	width: 50%;
	aspect-ratio: 16 /9;
	object-fit: cover;
}
</style>
