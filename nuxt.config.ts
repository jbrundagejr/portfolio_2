// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    "~/assets/styles/fonts.css",
    "~/assets/styles/main.css",
    "~/assets/styles/tablet.css",
    "~/assets/styles/desktop.css",
  ],
  modules: ["@pinia/nuxt"],
});
