<script setup lang="ts">
const props = defineProps<{
	routeName: string
}>()

const route = useRoute()
</script>

<template>
	<NuxtLink
		:to="`/${routeName}`"
		:class="route.name === routeName ? 'active' : ''"
	>
		{{ routeName }}
	</NuxtLink>
</template>

<style scoped>
.active {
	border-bottom: 1px solid var(--black);
}
</style>
