<script setup lang="ts">
import { useStore } from "~/stores/store"
import { storeToRefs } from "pinia"

const store = useStore()
const { projects } = storeToRefs(store)

const index = ref(0)

onMounted(() => {
	setInterval(() => {
		index.value = (index.value + 1) % projects.value.length
	}, 3000)
})

const currentProject = computed(() => projects.value[index.value])

const handleBannerClick = (e: Event) => {
	const target = e.target as HTMLButtonElement
	const projectTitle = target.value
	const el = document.getElementById(projectTitle)
	if (el) {
		el.scrollIntoView({
			behavior: "smooth",
			block: "start",
		})
	}
}
</script>

<template>
	<template>
		<div class="flash-banner">
			<button
				@click="handleBannerClick"
				:value="currentProject.title"
				:aria-label="`Go to ${currentProject.title}`"
			>
				<Transition name="fade" mode="out-in">
					<img
						:key="currentProject.image"
						:src="currentProject.image"
						:alt="currentProject.title"
						class="banner-image"
					/>
				</Transition>
			</button>
		</div>
	</template>
</template>

<style scoped>
.flash-banner {
	height: auto;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding: 24px 0;
	width: 100%;
	height: auto;
	aspect-ratio: 16 / 9;
}

.flash-banner img {
	width: 100%;
	height: auto;
	object-fit: cover;
	transition: opacity 0.5s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
	opacity: 1;
}

@media (min-width: 1080px) {
	.flash-banner {
		height: 100vh;
		padding: 48px0;
	}
	.flash-banner img {
		width: 60%;
	}
}
</style>
