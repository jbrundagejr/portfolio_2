<template>
  <NuxtLayout>
    <template #body>
      <h1>About Page</h1>
      <div>
        <img :src="about.img" alt="Jon Brundage jr." />
        <p>{{ about.bio }}</p>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
import { about } from "~~/data/about.js";
</script>

<style scoped></style>
