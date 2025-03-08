// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: [
		"~/styles/fonts.css",
		"~/styles/colors.css",
		"~/styles/mobile.css",
		"~/styles/tablet.css",
		"~/styles/desktop.css",
	],

	modules: ["@pinia/nuxt"],
	compatibilityDate: "2025-03-07",
	runtimeConfig: {
		public: {
			emailJSServiceID: process.env.EMAILJS_SERVICE_ID,
			emailJSTemplateID: process.env.EMAILJS_TEMPLATE_ID,
			emailJSUserID: process.env.EMAILJS_USER_ID,
		},
	},
})
