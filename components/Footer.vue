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
	bottom: 0;
	display: flex;
	justify-content: flex-end;
	z-index: 10;
	background: var(--white);
	padding: 12px 24px 24px;
	width: calc(100% - 48px);
}

#footer::after {
	content: "";
	position: absolute;
	bottom: 100%;
	left: 0;
	width: 100%;
	height: 24px;
	background: linear-gradient(to top, var(--white) 0%, transparent 100%);
	pointer-events: none;
}

#footer ul {
	display: flex;
	flex-direction: row;
	gap: 24px;
	justify-content: flex-end;
}

button:hover::before,
a:hover::before {
	transform: scaleX(0);
}

@media (min-width: 1080px) {
	#footer {
		padding: 12px 24px 24px;
		position: sticky;
	}
}

@media (prefers-color-scheme: dark) {
	#footer {
		background: var(--black);
	}

	#footer::after {
		background: linear-gradient(to top, var(--black) 0%, transparent 100%);
	}
}
</style>
