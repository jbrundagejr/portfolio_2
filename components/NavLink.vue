<template>
  <NuxtLink 
    :to="`/${routeName}`" 
    :class="route.name === routeName ? 'active' : ''"
    @mouseenter="handleHover"
    @mouseleave="handleUnhover"
  >
    {{routeName}}
  </NuxtLink>
</template>

<script setup>
const props = defineProps(['routeName'])
const route = useRoute()
const hovered = ref(false)

const handleHover = () => {
  hovered.value = true
}

const handleUnhover = () => {
  hovered.value = false
}

</script>

<style scoped>

.active {
    border-bottom: 1px solid #333333;
}
</style>