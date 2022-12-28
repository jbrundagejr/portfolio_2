<template>
  <NuxtLayout>
    <template #body>
      <div>Work Page</div>
      <div v-for="project in data.projects" :key="project.title">
        <h2>{{ project.title }}</h2>
        <h3>{{ project.year }}</h3>
        <h3>{{ project.framework }}</h3>
        <div>
          <img
            v-for="(image, i) in project.images"
            :key="i"
            :src="image"
            alt=""
          />
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
import data from "@/data/work.json";
</script>

<style scoped></style>
