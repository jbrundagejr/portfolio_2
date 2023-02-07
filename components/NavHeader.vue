<template>
  <header class="container">
    <NuxtLink to="/">Home </NuxtLink>
    <div class="pages">
      <NuxtLink to="about">About</NuxtLink>
      <NuxtLink to="projects">Projects</NuxtLink>
      <NuxtLink to="contact">Contact</NuxtLink>
    </div>
  </header>
</template>

<script setup>
import { useStore } from "~/store/store"
import { storeToRefs } from "pinia"

const store = useStore()
const { mobileMenuOpen } = storeToRefs(store)
</script>

<style scoped>
header,
.pages {
  display: flex;
  flex-direction: row;
}

header {
  justify-content: space-between;
}

.pages {
  gap: 20px;
}

@media (min-width: 768px) {
  header {
    gap: 30px;
  }
}
</style>
