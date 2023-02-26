<template>
  <NuxtLayout>
    <template #body>
      <div id="home" class="container">
        <!-- <Cube /> -->
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
import Cube from "~/components/Cube.vue"

useHead({
  title: "Jon's Portfolio",
})
</script>

<style scoped>
#cube {
  width: 100%;
  height: 100%;
}
</style>
