<template>
	<HomePage />
</template>

<script lang="ts" setup>
import { HomePage } from '@pages'

useHead({
	title: 'Gifty.land',
	htmlAttrs: {
		lang: 'en',
	},
	meta: [
		{
			name: 'description',
			content: 'The index file of Gifty.land',
		},
	],
})
</script>
