<template>
  <div ref="step" :id="project.title">
    <img v-if="project.image" :src="project.image" :alt="project.title" />
    <div v-if="project.title" class="meta__container">
      <h2>Project Name:</h2>
      <h2>{{ project.title }}</h2>
    </div>
    <div v-if="project.tools.length" class="meta__container">
      <h2>Tools Used:</h2>
      <div>
        <h2 v-for="tool in project.tools" :key="tool">{{ tool }}</h2>
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

<script setup>
const step = ref({});
const props = defineProps(["project"]);
</script>

<style scoped>
.meta__container {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
</style>
