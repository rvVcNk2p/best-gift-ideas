<template>
	<div class="py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					From our blog
				</h2>
				<p class="mt-2 text-lg leading-8 text-gray-600">
					Get ready to find the perfect gifts for your loved ones! In the
					following blog posts, we'll be sharing a variety of unique and
					thoughtful gift ideas that are sure to impress.
				</p>
			</div>
			<div
				class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
			>
				<article
					v-for="post in posts"
					:key="post.id"
					class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
				>
					<nuxt-img
						:src="post.imageUrl"
						alt=""
						class="absolute inset-0 -z-10 h-full w-full object-cover"
						loading="lazy"
					/>
					<div
						class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"
					/>
					<div
						class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"
					/>

					<div
						class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"
					>
						<time :datetime="post.datetime" class="mr-8">{{ post.date }}</time>
						<div class="-ml-4 flex items-center gap-x-4">
							<svg
								viewBox="0 0 2 2"
								class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
							>
								<circle cx="1" cy="1" r="1" />
							</svg>
							<div class="flex gap-x-2.5">
								<nuxt-img
									:src="post.author.imageUrl"
									alt=""
									class="h-6 w-6 flex-none rounded-full bg-white/10"
									loading="lazy"
								/>
								{{ post.author.name }}
							</div>
						</div>
					</div>
					<h3 class="mt-3 text-lg font-semibold leading-6 text-white">
						<a :href="post.href">
							<span class="absolute inset-0" />
							{{ post.title }}
						</a>
					</h3>
				</article>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const posts = [
	{
		id: 1,
		title:
			'Top 10 Gift Ideas for the Stylish and Trendy 20-Year-Old Woman in Your Life',
		href: '/blog/en/top-10-gift-ideas-for-20-year-old-woman',
		imageUrl: '/img/top-10-gift-ideas-for-20-year-old-woman.png',
		date: 'Mar 16, 2020',
		datetime: '2023-03-16',
		author: {
			name: 'Leo K.',
			imageUrl: 'https://i.pravatar.cc/150?img=54',
		},
	},
	// More posts...
]
</script>
