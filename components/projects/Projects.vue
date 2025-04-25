<script setup lang="ts">
import { useStore } from "~/stores/store"
import { storeToRefs } from "pinia"
import Page from "../Page.vue"
import Project from "./Project.vue"

const store = useStore()
const { projects, projectIndex } = storeToRefs(store)

const image = computed(() => {
	if (projectIndex.value && projects.value[projectIndex.value]) {
		return {
			src: projects.value[projectIndex.value].image,
			alt: projects.value[projectIndex.value].title,
		}
	}
	return undefined
})
</script>

<template>
	<Page title="Projects">
		<template #content>
			<div class="projects">
				<div v-if="image" class="projects__image-container fade-in">
					<transition name="fade">
						<img
							v-if="image"
							:src="image.src"
							:alt="image.alt"
							:key="image.src"
							class="projects__image"
						/>
					</transition>
				</div>
				<div class="projects__copy-container">
					<Project
						v-for="(project, index) in projects"
						:key="project.title"
						:index="index"
						:project="project"
					/>
				</div>
			</div>
		</template>
	</Page>
</template>

<style scoped>
.projects {
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 25vh 0;
}

.projects__image-container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 0;
	position: sticky;
	top: 50%;
	transform: translateY(-50%);
}

.projects__image-container img {
	aspect-ratio: 16 / 9;
	width: 100%;
	height: auto;
	object-fit: cover;
	object-position: center;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 0;
}

.projects__copy-container {
	z-index: 5;
	display: flex;
	flex-direction: column;
	gap: 60vh;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 50vh 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
	opacity: 1;
}

@media (min-width: 1080px) {
	.projects {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 32px;
		padding: 0 0 25vh;
		/* padding: 100px 0 300px; */
	}

	.projects__image-container {
		width: 100%;
	}

	.projects__copy-container {
		z-index: 0;
		gap: 35vh;
		justify-content: flex-start;
		align-items: flex-start;
		text-align: left;
		padding: 0;
	}
}
</style>
