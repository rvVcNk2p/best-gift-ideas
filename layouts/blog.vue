<template>
	<div class="blog_layout">
		<Header />
		<main class="blog_layout__content">
			<slot />
		</main>
	</div>
	<Footer />
</template>

<script lang="ts" setup>
import { Footer, Header } from '@molecules'
</script>

<style lang="scss" scoped>
.blog_layout {
	@apply isolate mx-auto max-w-7xl bg-white px-4 sm:px-6 lg:px-8;
	.blog_layout__content {
		@apply mx-auto mt-10 max-w-3xl lg:mt-16;
	}
}
</style>
