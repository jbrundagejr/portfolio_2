<script setup lang="ts">
defineProps<{
	id: string
}>()
</script>

<template>
	<div class="video-embed block">
		<div style="padding: 56.25% 0 0 0; position: relative; width: 100%">
			<iframe
				:src="`https://player.vimeo.com/video/${id}?autoplay=1&loop=1`"
				frameborder="0"
				allow="autoplay; fullscreen; picture-in-picture"
				autoplay
			></iframe>
		</div>
	</div>
</template>

<style scoped>
.video-embed {
	width: 100%;
}

.video-embed iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border: 0;
}
</style>
