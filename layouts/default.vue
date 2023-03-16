<template>
	<div class="default-layout">
		<UnauthenticatedTemplate>
			<slot />
		</UnauthenticatedTemplate>
	</div>
</template>

<script lang="ts" setup>
import { UnauthenticatedTemplate } from '@templates'
</script>

<style lang="scss" scoped>
.default-layout {
	@apply isolate mx-auto max-w-7xl bg-white px-4 sm:px-6 lg:px-8;
}
</style>
