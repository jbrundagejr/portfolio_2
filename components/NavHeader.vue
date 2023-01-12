<template>
  <header class="container">
      <NavLink routeName="about" />
      <NavLink routeName="projects" />
      <NavLink routeName="contact" />
  </header>
</template>

<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";
import NavLink from "./NavLink.vue";

const store = useStore();
const { mobileMenuOpen } = storeToRefs(store);

</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
}

@media(min-width: 768px){
  header {
    gap: 30px;
  }
}
</style>
