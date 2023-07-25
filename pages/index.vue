<template>
  <NuxtLayout>
    <template #body>
      <div id="home" class="container">
        <h2>Jon</h2>
        <h2>Brundage Jr.</h2>
        <p>Software Engineer. Problem Solver. Life-long Learner.</p>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
import Cube from "~/components/Cube.vue"

useHead({
  title: "jon's portfolio",
})
</script>

<style scoped>
#cube {
  width: 100%;
  height: 100%;
}
</style>
