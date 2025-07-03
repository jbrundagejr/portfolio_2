<script setup lang="ts">
import { toRefs } from "vue"
const props = defineProps<{
	id: string
}>()

const { id } = toRefs(props)

console.log(id.value)
</script>

<template>
	<div class="video-embed block">
		<div style="padding: 56.25% 0 0 0; position: relative">
			<iframe
				src="https://player.vimeo.com/video/1098355972?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
				style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
				frameborder="0"
				allow="autoplay; fullscreen; picture-in-picture"
			></iframe>
		</div>
	</div>
</template>

<iframe
	title="vimeo-player"
	width="640"
	height="360"
	frameborder="0"
	allowfullscreen
></iframe>
