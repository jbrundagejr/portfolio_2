<template>
  <NuxtLayout>
    <template #body>
      <h1>About Page</h1>
      <div>{{ aboutData.about }}</div>
    </template>
  </NuxtLayout>
</template>

<script setup>
import aboutData from "@/data/about.json";
</script>

<style scoped></style>
