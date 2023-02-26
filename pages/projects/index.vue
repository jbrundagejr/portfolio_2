<template>
  <NuxtLayout>
    <template #body>
      <div id="projects" class="container">
        <h1>Projects</h1>
        <div class="projects__container">
          <Project
            v-for="(project, i) in projects"
            :key="project.title"
            :project="project"
            :index="i"
          />
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
import { projects } from "~~/data/projects.js"
import Project from "~~/components/Project.vue"

useHead({
  title: "Projects",
})
</script>

<style scoped>
.projects__container {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
