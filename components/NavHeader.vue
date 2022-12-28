<template>
  <header>
    <NuxtLink to="/">Home</NuxtLink>
    <div>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/work">Work</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </div>
  </header>
</template>

<script setup>
// import { useStore } from "~/store/store";
// import { storeToRefs } from "@pinia/nuxt";

// const store = useStore();
// const { openMobileMenu } = storeToRefs(store);

// console.log(openMobileMenu.value);
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
}

header div {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
</style>
