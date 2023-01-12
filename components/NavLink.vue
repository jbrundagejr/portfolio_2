<template>
  <NuxtLink 
    :to="`/${routeName}`" 
    :class="route.name === routeName ? 'active' : ''"
  >
    {{routeName}}
  </NuxtLink>
</template>

<script setup>
const props = defineProps(['routeName'])
const route = useRoute()
</script>

<style scoped>
.active {
    border-bottom: 1px solid #333333;
}
</style>