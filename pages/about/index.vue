<template>
  <NuxtLayout>
    <template #body>
      <div id="about" class="container">
        <h1>About.</h1>
        <div class="half__grid">
          <img :src="about.img" alt="Jon Brundage jr." />
          <p>{{ about.bio }}</p>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
import { about } from "~~/data/about.js";

useHead({
  title: "About"
})
</script>

<style scoped></style>
