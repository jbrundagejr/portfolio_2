<script setup lang="ts">
import Project from "~/components/Project.vue"
import { projects } from "~/data/projects"

useHead({
	title: "jon's portfolio",
})
</script>

<template>
	<NuxtLayout>
		<template #body>
			<div id="intro-container">
				<h1><span>Jon</span> <span>Brundage Jr.</span></h1>
				<p>Software Engineer. Problem Solver. Life-long Learner.</p>
			</div>
			<!--
        <Project
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      -->
		</template>
	</NuxtLayout>
</template>

<style scoped>
#intro-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 48px);
}
</style>
