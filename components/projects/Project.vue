<script setup lang="ts">
import { useStore } from "~/stores/store"
import { storeToRefs } from "pinia"
import Tool from "../Tool.vue"
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
		<div class="project__header">
			<span v-if="project.link">
				<a class="project-link" :href="project.link" target="_blank">{{
					project.title
				}}</a>
			</span>
			<h3 v-else>{{ project.title }}</h3>
			<div v-if="project.tools.length" class="meta__container">
				<h4>Tools Used:</h4>
				<ul class="tool__container">
					<a
						v-for="tool in project.tools"
						:key="tool.icon"
						:href="tool.link"
						target="_blank"
						><Tool :icon="tool.icon"
					/></a>
				</ul>
			</div>
		</div>
		<div class="notes__container">
			<p v-for="(note, i) in project.notes" :key="i">{{ note }}</p>
		</div>
	</div>
</template>

<style scoped>
.project {
	display: flex;
	flex-direction: column;
	gap: 20px;
	background: rgba(0, 0, 0, 0.7);
	padding: 24px;
}

.project__header {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.meta__container {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.notes__container {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.tool__container {
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 20px;
}

@media (min-width: 1080px) {
	.project {
		background: none;
		padding: 0;
	}

	.project:first-child {
		padding: 24px 0 0;
	}

	.tool__container {
		justify-content: flex-start;
	}
}
</style>
