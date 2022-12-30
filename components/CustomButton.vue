<template>
  <button>
    {{ label }}
  </button>
</template>

<script setup>
const props = defineProps(['label'])
</script>

<style scoped>

button {
  border-radius: 0;
  border: none;
  color: #333333;
  background-color: #fff;
  padding: 20px;
  cursor: pointer;
  transition: all 350ms;
}

button:hover {
  background-color: lightgreen;
}
</style>