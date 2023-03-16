<template>
	<ContentDoc v-if="path" :path="path" class="min-h-screen" v-slot="{ doc }">
		<div class="mb-10 space-y-2">
			<h1 class="text-center text-5xl font-medium">{{ doc.title }}</h1>
			<p class="text-center text-gray-500">
				<ClientOnly v-if="isValid(doc.date)">
					Published {{ formatDateFromNow(doc.date) }} ({{
						formatDateAbsolute(doc.date)
					}})
					<template #fallback>
						Published on the {{ formatDateAbsolute(doc.date) }}
					</template>
				</ClientOnly>
			</p>
		</div>
		<div
			class="flex max-h-60 items-center justify-center overflow-hidden md:max-h-72 lg:max-h-96"
			v-if="doc.image"
		>
			<nuxt-img
				preload
				:src="'/img/' + doc.image"
				loading="lazy"
				:alt="doc.image"
				format="webp"
			/>
		</div>
		<main
			class="relative z-10 min-h-[70vh] bg-white px-6 py-12 sm:mx-auto sm:-mt-6 sm:mb-12 sm:shadow-2xl md:max-w-3xl lg:max-w-4xl"
		>
			<ContentRenderer
				class="prose prose-slate min-w-full prose-headings:scroll-mt-20 lg:prose-lg [&_h1>a]:no-underline [&_h2>a]:no-underline [&_h3>a]:no-underline [&_h4>a]:no-underline [&_h5>a]:no-underline [&_h6>a]:no-underline"
				:value="doc"
			/>
		</main>
	</ContentDoc>
</template>

<script lang="ts" setup>
import {
	formatDateFromNow,
	formatDateAbsolute,
	isValid,
} from '@libs/date/formatDate'

const { path } = useRoute()

definePageMeta({
	layout: 'blog',
})

useHead({
	titleTemplate: (string) => `${string} | Gifty.land`,
	htmlAttrs: {
		lang: 'en',
	},
	// TODO: Add more meta data
	meta: [
		{
			name: 'description',
			content: `A single blog section of Gifty.land`,
		},
	],
})
</script>
