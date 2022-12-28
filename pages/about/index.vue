<template>
  <NuxtLayout>
    <template #body>
      <div>About Page</div>
      <div>{{ aboutData.about }}</div>
    </template>
  </NuxtLayout>
</template>

<script setup>
import aboutData from "@/data/about.json";
</script>

<style scoped></style>
