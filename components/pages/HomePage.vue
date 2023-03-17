<template>
	<div class="relative pt-24 sm:pt-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
					Unwrap the Magic: Thoughtful and Unique Gift Ideas
				</h1>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					Introducing Gifty.land, your go-to partner for exceptional gift ideas.
					Our personalized and innovative recommendations cater to everyone on
					your list, without costing you a penny.
				</p>
				<!-- <div class="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="#"
								class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>Get started</a
							>
							<a href="#" class="text-sm font-semibold leading-6 text-gray-900"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</div> -->
			</div>
			<div class="mt-16 flow-root sm:mt-24">
				<div class="mx-auto max-w-6xl">
					<IdeaArea @generate-ideas="generateIdeas" />
					<IdeaList :generated-ideas="generatedIdeas" />
					<FaqSection :faqs="faqs" />
					<TestimonialSection />
					<BlogSection />
				</div>
			</div>
		</div>
		<div
			class="absolute inset-x-0 top-[calc(100%-45rem)] -z-10 transform-gpu overflow-hidden blur-3xl"
		>
			<svg
				class="relative left-[calc(50%+3rem)] h-full max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)]"
				viewBox="0 0 1155 678"
			>
				<path
					fill="url(#b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1)"
					fill-opacity=".3"
					d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
				/>
				<defs>
					<linearGradient
						id="b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1"
						x1="1155.49"
						x2="-78.208"
						y1=".177"
						y2="474.645"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#9089FC" />
						<stop offset="1" stop-color="#FF80B5" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import {
	IdeaArea,
	IdeaList,
	FaqSection,
	TestimonialSection,
	BlogSection,
} from '@molecules'
import { useFetchStore } from '@stores'
import { useGetIdeas } from '@composables'
import type { Idea } from '@types'
import { useFaqs } from '@composables'
import type { Ref } from 'vue'
import { useGtag } from 'vue-gtag-next'

const { fetchIdeas } = useGetIdeas()
const { setIsLoading } = useFetchStore()
const { faqs } = useFaqs()
const { event } = useGtag()

const generatedIdeas: Ref<Idea[]> = ref([])

const trackCustomEvent = () => {
	event('find_button_clicked', {
		event_category: 'custom',
		event_label: 'find_button_clicked',
	})
}

const generateIdeas = async (prompt: string) => {
	setIsLoading(true)
	generatedIdeas.value = []
	trackCustomEvent()
	try {
		generatedIdeas.value = await fetchIdeas(prompt)
	} catch (error) {
		console.log(`Something went wrong. Error message: ${error}`)
	}
	setIsLoading(false)
}
</script>
