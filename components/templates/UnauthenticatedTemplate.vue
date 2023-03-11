<template>
	<div class="unauthenticated">
		<Header />
		<main class="unauthenticated__content">
			<slot />
		</main>
	</div>
	<Footer />
</template>

<script lang="ts" setup>
import { Footer, Header } from '@molecules'
</script>

<style lang="scss" scoped>
.unauthenticated {
	@apply isolate bg-white;
}
</style>
