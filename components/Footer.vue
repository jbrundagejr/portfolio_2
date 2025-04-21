<script setup lang="ts">
import Resume from "~/public/BrundageResume.pdf"
import LinkedInIcon from "./icons/LinkedInIcon.vue"
import GithubIcon from "./icons/GithubIcon.vue"
import ResumeIcon from "./icons/ResumeIcon.vue"

const links = computed(() => {
	return [
		{
			name: "Resume",
			href: Resume,
			icon: ResumeIcon,
		},
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/in/jbrundagejr/",
			icon: LinkedInIcon,
		},
		{
			name: "Github",
			href: "https://github.com/jbrundagejr",
			icon: GithubIcon,
		},
	]
})
</script>

<template>
	<footer id="footer">
		<ul>
			<li v-for="link in links" :key="link.name">
				<a :href="link.href" target="_blank" rel="noreferrer"
					><component :is="link.icon" />
				</a>
			</li>
		</ul>
	</footer>
</template>

<style scoped>
#footer {
	position: fixed;
	bottom: 24px;
	width: calc(100% - 48px);
	padding: 0 24px;
	display: flex;
	justify-content: flex-end;
	z-index: 5;
}
#footer ul {
	display: flex;
	flex-direction: row;
	gap: 24px;
	justify-content: flex-end;
}

svg {
	height: 48px;
	width: 48px;
	padding: 0;
}

@media (min-width: 1440px) {
	#footer {
		width: 1440px;
		padding: 0;
		margin: 0 auto;
	}
}
</style>
