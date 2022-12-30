<template>
  <NuxtLayout>
    <template #body>
      <h1>Work Page</h1>
      <Project
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </template>
  </NuxtLayout>
</template>

<script setup>
import { projects } from "~~/data/projects.js";
import Project from "~~/components/Project.vue";
</script>

<style scoped></style>
