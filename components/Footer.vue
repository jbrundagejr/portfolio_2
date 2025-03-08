<script setup lang="ts">
import GithubIcon from "./GithubIcon.vue"
</script>

<template>
	<footer id="footer">
		<ul>
			<li>
				<a
					href="https://www.linkedin.com/in/jbrundagejr/"
					target="_blank"
					rel="noreferrer"
				>
					<svg role="img" aria-label="LinkedIn Profile">
						<use href="/sprites/socialSprites.svg#linkedIn" />
					</svg>
				</a>
			</li>
			<li>
				<a
					href="https://github.com/jbrundagejr"
					target="_blank"
					rel="noreferrer"
				>
					<GithubIcon />
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
