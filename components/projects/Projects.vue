<script setup lang="ts">
import { useStore } from "~/store/store"
import { storeToRefs } from "pinia"
import Project from "./Project.vue"

const store = useStore()
const { projects } = storeToRefs(store)
</script>

<template>
	<div class="projects">
		<Project
			v-for="(project, index) in projects"
			:key="project.title"
			:project="project"
			:index="index"
		/>
	</div>
</template>
