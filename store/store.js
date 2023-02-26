import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const mobileMenuOpen = ref(false);
  const currentProject = ref(0)
  return { mobileMenuOpen, currentProject };
});
