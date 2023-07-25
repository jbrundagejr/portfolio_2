<template>
  <NavHeader />
  <slot name="body"></slot>
  <Footer />
</template>

<script setup>
import NavHeader from "~/components/NavHeader.vue"
import Footer from "~/components/Footer.vue"
</script>

<style scoped></style>
