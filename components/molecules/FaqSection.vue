<template>
	<div class="bg-transparent">
		<div class="max-w-9xl mx-auto px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
			<div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
				<h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">
					Frequently asked questions
				</h2>
				<dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
					<Disclosure
						as="div"
						v-for="faq in faqs"
						:key="faq.question"
						class="pt-6"
						v-slot="{ open }"
					>
						<dt>
							<DisclosureButton
								class="flex w-full items-start justify-between text-left text-gray-900"
							>
								<span class="text-base font-semibold leading-7">{{
									faq.question
								}}</span>
								<span class="ml-6 flex h-7 items-center">
									<PlusSmallIcon
										v-if="!open"
										class="h-6 w-6"
										aria-hidden="true"
									/>
									<MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
								</span>
							</DisclosureButton>
						</dt>
						<DisclosurePanel as="dd" class="mt-2 pr-12">
							<p class="text-base leading-7 text-gray-600">
								{{ faq.answer }}
							</p>
						</DisclosurePanel>
					</Disclosure>
				</dl>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import MinusSmallIcon from '@heroicons/vue/24/outline/MinusSmallIcon'
import PlusSmallIcon from '@heroicons/vue/24/outline/PlusSmallIcon'

import { FaqType } from '@types'

type FaqProps = {
	faqs: Array<FaqType>
}

defineProps<FaqProps>()
</script>
