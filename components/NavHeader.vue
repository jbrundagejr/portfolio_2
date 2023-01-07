<template>
  <header class="container">
    <NuxtLink to="/">Home</NuxtLink>
    <div>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </div>
  </header>
</template>

<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

const store = useStore();
const { mobileMenuOpen } = storeToRefs(store);
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

header div {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
</style>
