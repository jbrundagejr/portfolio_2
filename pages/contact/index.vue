<template>
  <NuxtLayout>
    <template #body>
      <div id="contact" class="container">
        <h1>Contact</h1>
        <ContactForm />
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
import ContactForm from "~~/components/ContactForm.vue";

useHead({
  title: "Contact"
})
</script>

<style></style>
