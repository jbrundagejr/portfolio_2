<script setup lang="ts">
import { useStore } from "~/stores/store"
import { storeToRefs } from "pinia"
import { BASE_URL } from "~/util/constants"
import Page from "./Page.vue"

const store = useStore()
const { about } = storeToRefs(store)
</script>

<template>
	<Page title="About">
		<template #content>
			<div v-if="about" class="about">
				<img
					v-if="about.img"
					:src="`${BASE_URL}${about.img}`"
					alt="Jon Brundage Jr."
				/>
				<div class="about__bio">
					<p>{{ about.bio1 }}</p>
					<p>{{ about.bio2 }}</p>
				</div>
			</div>
		</template>
	</Page>
</template>

<style scoped>
.about {
	display: flex;
	flex-direction: column;

	gap: 24px;
	width: 100%;
	justify-content: center;
	align-items: center;
}

.about__bio {
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 0 0 36px;
}

.about img {
	width: 100%;
	height: auto;
	aspect-ratio: 1;
	object-fit: cover;
}

@media (min-width: 1080px) {
	.about {
		flex-direction: row;
		gap: 32px;
		padding: 0 48px;
		width: calc(100% - 96px);
		height: calc(100vh - 228px);
	}

	.about__bio {
		padding: 0;
	}
}

@media (min-width: 1440px) {
	.about__bio {
		width: 700px;
	}

	.about img {
		width: 400px;
	}
}
</style>
