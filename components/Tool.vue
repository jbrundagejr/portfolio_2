<script setup lang="ts">
import NuxtIcon from "./icons/NuxtIcon.vue"
import SanityIcon from "./icons/SanityIcon.vue"
import NetlifyIcon from "./icons/NetlifyIcon.vue"
import ReactIcon from "./icons/ReactIcon.vue"
import Auth0Icon from "./icons/Auth0Icon.vue"
import i18nextIcon from "./icons/i18nextIcon.vue"
import MapboxIcon from "./icons/MapboxIcon.vue"
import MaterialUIIcon from "./icons/MaterialUIIcon.vue"
import SvelteIcon from "./icons/SvelteIcon.vue"
import D3Icon from "./icons/D3Icon.vue"
import DrupalIcon from "./icons/DrupalIcon.vue"
import AWSIcon from "./icons/AWSIcon.vue"
import GoogleIcon from "./icons/GoogleIcon.vue"
import ThreeIcon from "./icons/ThreeIcon.vue"
import GSAPIcon from "./icons/GSAPIcon.vue"
import GatsbyIcon from "./icons/GatsbyIcon.vue"

const props = defineProps<{
	icon: string
}>()

const { icon } = toRefs(props)

const component = computed(() => {
	switch (icon.value) {
		case "nuxt":
			return NuxtIcon
		case "sanity":
			return SanityIcon
		case "netlify":
			return NetlifyIcon
		case "react":
			return ReactIcon
		case "auth0":
			return Auth0Icon
		case "i18next":
			return i18nextIcon
		case "mapbox":
			return MapboxIcon
		case "material-ui":
			return MaterialUIIcon
		case "svelte":
			return SvelteIcon
		case "d3":
			return D3Icon
		case "drupal":
			return DrupalIcon
		case "aws":
			return AWSIcon
		case "google-sheets":
			return GoogleIcon
		case "threejs":
			return ThreeIcon
		case "gsap":
			return GSAPIcon
		case "gatsby":
			return GatsbyIcon
		default:
			return null
	}
})
</script>

<template>
	<component :is="component" />
</template>
