<template>
	<div class="relative isolate bg-transparent pt-8 sm:pt-10">
		<div
			class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
		>
			<svg
				viewBox="0 0 1313 771"
				aria-hidden="true"
				class="ml-[max(50%,38rem)] w-full"
			>
				<path
					id="bc169a03-3518-42d4-ab1e-d3eadac65edc"
					fill="url(#85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3)"
					d="M360.508 589.796 231.671 770.522 0 498.159l360.508 91.637 232.034-325.485c1.485 150.396 51.235 393.965 238.354 165.069C1064.79 143.261 1002.42-107.094 1171.72 46.97c135.44 123.252 148.51 335.641 138.11 426.428L971.677 339.803l24.062 411.461-635.231-161.468Z"
				/>
				<defs>
					<linearGradient
						id="85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3"
						x1="1313.17"
						x2="-88.881"
						y1=".201"
						y2="539.417"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#9089FC" />
						<stop offset="1" stop-color="#FF80B5" />
					</linearGradient>
				</defs>
			</svg>
		</div>
		<div
			class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
		>
			<svg
				viewBox="0 0 1313 771"
				aria-hidden="true"
				class="ml-[-22rem] w-full flex-none origin-top-right rotate-[30deg] xl:ml-0 xl:mr-[calc(50%-12rem)]"
			>
				<use href="#bc169a03-3518-42d4-ab1e-d3eadac65edc" />
			</svg>
		</div>
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-xl text-center">
				<h2
					class="text-lg font-semibold leading-8 tracking-tight text-indigo-600"
				>
					Testimonials
				</h2>
				<p
					class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
				>
					We have worked with thousands of amazing people
				</p>
			</div>
			<div
				class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4"
			>
				<figure
					class="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1"
				>
					<blockquote
						class="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900"
					>
						<p>{{ `“${featuredTestimonial.body}”` }}</p>
					</blockquote>
					<figcaption
						class="flex items-center gap-x-4 border-t border-gray-900/10 py-4 px-6"
					>
						<img
							class="h-10 w-10 flex-none rounded-full bg-gray-50"
							:src="featuredTestimonial.author.imageUrl"
							alt=""
						/>
						<div class="flex-auto">
							<div class="font-semibold">
								{{ featuredTestimonial.author.name }}
							</div>
							<div class="text-gray-600">
								{{ `@${featuredTestimonial.author.handle}` }}
							</div>
						</div>
						<img
							class="h-10 w-auto flex-none"
							:src="featuredTestimonial.author.logoUrl"
							alt=""
						/>
					</figcaption>
				</figure>
				<div
					v-for="(columnGroup, columnGroupIdx) in testimonials"
					:key="columnGroupIdx"
					class="space-y-8 xl:contents xl:space-y-0"
				>
					<div
						v-for="(column, columnIdx) in columnGroup"
						:key="columnIdx"
						:class="[
							(columnGroupIdx === 0 && columnIdx === 0) ||
							(columnGroupIdx === testimonials.length - 1 &&
								columnIdx === columnGroup.length - 1)
								? 'xl:row-span-2'
								: 'xl:row-start-1',
							'space-y-8',
						]"
					>
						<figure
							v-for="testimonial in column"
							:key="testimonial.author.handle"
							class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
						>
							<blockquote class="text-gray-900">
								<p>{{ `“${testimonial.body}”` }}</p>
							</blockquote>
							<figcaption class="mt-6 flex items-center gap-x-4">
								<img
									class="h-10 w-10 rounded-full bg-gray-50"
									:src="testimonial.author.imageUrl"
									alt=""
								/>
								<div>
									<div class="font-semibold">{{ testimonial.author.name }}</div>
									<div class="text-gray-600">
										{{ `@${testimonial.author.handle}` }}
									</div>
								</div>
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-10 flex w-full items-center justify-center">
			<p class="text-center text-xs leading-5 text-gray-900">
				IMPORTANT: Authentic testimonials created by a genuine AI.
			</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
const featuredTestimonial = {
	body: "I can't say enough good things about Elf Help! I've used this app for several occasions, but most recently, I used it to find the perfect birthday gift for my best friend. She's one of those people who has everything, so finding a gift that's both meaningful and useful can be a challenge.",
	author: {
		name: 'Brenna Goyette',
		handle: 'brennagoyette',
		imageUrl:
			'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
		logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
	},
}
const testimonials = [
	[
		[
			{
				body: 'This year, Gifty.land made my Christmas shopping a breeze! I found unique and thoughtful gifts for everyone on my list in just a few clicks.',
				author: {
					name: 'Christmass Chris',
					handle: 'lesliealexander',
					imageUrl:
						'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
			{
				body: "I'm not the best at gift-giving, but Gifty.land made me feel like a pro this Valentine's Day. My partner was thrilled with the present I chose, and I owe it all to this app!",
				author: {
					name: 'Valentines Viktor',
					handle: 'lesliealexander',
					imageUrl:
						'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
			{
				body: 'Thanks to Gifty.land, I was able to find the perfect presents for my family and friends without stressing out. This app is a game-changer!',
				author: {
					name: 'Christmass Chris',
					handle: 'lesliealexander',
					imageUrl:
						'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
			// More testimonials...
		],
		[
			{
				body: "Gifty.land made my friend's birthday extra special this year. I found a unique gift that perfectly matched her interests, and she was thrilled!",
				author: {
					name: 'Birthday Bob',
					handle: 'lindsaywalton',
					imageUrl:
						'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
			{
				body: 'Gifty.land helped me find the perfect wedding gift for my best friend. The app suggested unique and memorable ideas that I never would have thought of on my own.',
				author: {
					name: 'Wedding Victoria',
					handle: 'lindsaywalton',
					imageUrl:
						'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
			// More testimonials...
		],
	],
	[
		[
			{
				body: "I'm not great at gift-giving, but Gifty.land helped me choose the perfect birthday present for my sister. It was easy to use and had so many great ideas to choose from.",
				author: {
					name: 'Tom Cook',
					handle: 'tomcook',
					imageUrl:
						'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
			{
				body: 'I used Gifty.land to find a wedding present for my cousin who has everything, and I was blown away by the variety of options available.',
				author: {
					name: 'Wedding Victoria',
					handle: 'tomcook',
					imageUrl:
						'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
			// More testimonials...
		],
		[
			{
				body: "I used Gifty.land to find a special Mother's Day gift for my mom this year, and I couldn't be happier with my choice. She loved it!",
				author: {
					name: 'Mothers Monica',
					handle: 'leonardkrasner',
					imageUrl:
						'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
			{
				body: "This year, I wanted to surprise my friends with unique Valentine's Day gifts, and Gifty.land made it happen. The suggestions were spot-on, and everyone loved what I got them.",
				author: {
					name: 'Valentine Viktor',
					handle: 'leonardkrasner',
					imageUrl:
						'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
			{
				body: "As a busy mom myself, Gifty.land was a lifesaver for finding the perfect Mother's Day presents for my own mom and mother-in-law. It made the whole process stress-free.",
				author: {
					name: 'Mothers Monica',
					handle: 'leonardkrasner',
					imageUrl:
						'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
			// More testimonials...
		],
	],
]
</script>
