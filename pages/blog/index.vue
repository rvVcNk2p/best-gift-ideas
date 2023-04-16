<template>
	<div class="flex min-h-[calc(100vh-5rem)] flex-col items-center px-2">
		<h1 class="my-6 text-6xl font-bold">Blog</h1>
		<div class="my-8 mb-10 text-justify">
			<p class="text-center">
				Get ready to find the perfect gifts for your loved ones! In the
				following blog posts, we'll be sharing a variety of unique and
				thoughtful gift ideas that are sure to impress.
			</p>
		</div>

		<div class="mb-10 flex flex-wrap gap-4">
			<p
				v-for="tag in tags(data)"
				class="tag"
				:class="{ 'is-selected': tag === selectedTags }"
				@click="setSelectedTag(tag)"
			>
				{{ tag }}
			</p>
		</div>
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 2xl:grid-cols-3">
			<div
				v-for="article in data"
				:key="article._path"
				class="flex max-w-sm transform flex-col overflow-hidden rounded-md shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl"
			>
				<nuxt-link :to="`${article._path}`">
					<div
						class="width-full flex aspect-video items-center justify-center overflow-hidden"
					>
						<nuxt-img
							class="h-auto w-auto"
							v-if="article.image"
							:src="'/img/' + article.image"
							:alt="article.image"
							loading="lazy"
						/>
					</div>
					<div class="width-full relative aspect-video overflow-hidden p-6">
						<h2 class="mb-4 text-xl font-medium 2xl:truncate">
							{{ article.title }}
						</h2>
						<!-- <p class="line-clamp-3 mb-4 px-1 text-justify italic">
									{{ article.description }}
								</p> -->
						<div
							class="absolute bottom-6 right-6 text-sm text-gray-600"
							v-if="isValid(article.date)"
						>
							<ClientOnly>
								<div class="first-letter:uppercase">
									{{ formatDateFromNow(article.date) }} ({{
										formatDateAbsolute(article.date)
									}})
								</div>
								<template #fallback>
									({{ formatDateAbsolute(article.date) }})
								</template>
							</ClientOnly>
						</div>
					</div>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	formatDateFromNow,
	formatDateAbsolute,
	isValid,
} from '@libs/date/formatDate'

definePageMeta({
	layout: 'blog',
})

const selectedTags = ref('')

const setSelectedTag = (tag: string) => {
	selectedTags.value === tag
		? (selectedTags.value = '')
		: (selectedTags.value = tag)
}

const { data } = await useAsyncData(
	'/',
	() =>
		queryContent('/')
			.limit(10)
			.sort({ date: -1 })
			.where(
				process.env.NODE_ENV === 'development'
					? { tags: { $contains: selectedTags.value } }
					: { tags: { $contains: selectedTags.value }, draft: { $ne: true } },
			)
			.find(),
	{
		watch: [selectedTags],
	},
)

const tags = (list: any) => {
	return list
		?.reduce((acc: string[], nextVal: any) => {
			acc = [...acc, ...nextVal.tags]
			return [...new Set(acc)]
		}, [])
		.sort()
}

useHead({
	title: 'Gifty.land | Blog',
	htmlAttrs: {
		lang: 'en',
	},
	meta: [
		{
			name: 'description',
			content: 'The blog section of Gifty.land',
		},
	],
})
</script>

<style scoped lang="scss">
.tag {
	@apply cursor-pointer rounded-md border border-[#4e46e5] bg-white p-2 text-[#4e46e5];
	@apply hover:bg-[#4e46e5] hover:text-white;

	&.is-selected {
		@apply bg-[#4e46e5] text-white;
	}
}
</style>
