<template>
  <div>
    <NavHeader />
    <slot name="body"></slot>
  </div>
</template>

<script setup>
import NavHeader from "~/components/NavHeader.vue";
</script>

<style scoped></style>
