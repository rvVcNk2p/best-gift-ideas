<template>
	<div class="unauthenticated">
		<div class="unauthenticated__content">
			<slot />
		</div>
	</div>
	<Footer />
</template>

<script lang="ts" setup>
import { Footer } from '@molecules'
</script>

<style lang="scss" scoped></style>
