<script setup lang="ts">
import { useStore } from "~/stores/store"
import { storeToRefs } from "pinia"
import Project from "./Project.vue"
import Page from "../Page.vue"
import VideoEmbed from "../VideoEmbed.vue"

const store = useStore()
const { projects, projectIndex, scrollY } = storeToRefs(store)
const { setProjectIndex } = store

const videoID = computed(() => {
	if (
		projectIndex.value !== null &&
		projects.value[projectIndex.value] &&
		projects.value[projectIndex.value].vimeoID
	) {
		return projects.value[projectIndex.value].vimeoID
	}
	return undefined
})

const image = computed(() => {
	// Only return image if there's no video
	if (videoID.value) return undefined
	if (projectIndex.value !== null && projects.value[projectIndex.value]) {
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
				<div class="projects__image-container fade-in">
					<transition name="fade">
						<VideoEmbed v-if="videoID" :id="videoID" />
					</transition>
					<transition name="fade">
						<img
							v-show="image"
							:src="image?.src"
							:alt="image?.alt"
							:key="image?.src"
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
	padding: 25vh 0 0;
}

.projects__image-container {
	position: sticky;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	min-width: 100%;
	width: 100%;
	height: auto;
	aspect-ratio: 16 / 9;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 2;
}

.projects__image-container img,
.projects__image-container video {
	aspect-ratio: 16 / 9;
	width: 100%;
	height: auto;
	object-fit: cover;
	object-position: center;
	transition: opacity 0.35s ease;
}

.projects__copy-container {
	z-index: 5;
	display: flex;
	flex-direction: column;
	gap: 60vh;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 35vh 0;
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
		padding: 0;
		justify-content: center;
		/* padding: 100px 0 300px; */
	}

	.projects__image-container {
		top: 50%;
		justify-content: flex-end;
		align-items: center;
		transform: translateY(-50%);
	}

	.projects__copy-container {
		z-index: 0;
		gap: 35vh;
		justify-content: flex-start;
		align-items: flex-start;
		text-align: left;
		padding: 10vh 0 0;
	}
}
</style>
