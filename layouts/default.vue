<template>
  <NavHeader />
  <slot name="body"></slot>
</template>

<script setup>
import NavHeader from "~/components/NavHeader.vue";
</script>

<style scoped></style>
