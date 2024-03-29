<template>
	<div>
		<Listbox
			as="div"
			:model-value="modelValue"
			@update:model-value="onSelect"
			class="grid grid-rows-2"
		>
			<ListboxLabel class="text-lg font-medium leading-8 text-gray-700">
				{{ title }}
			</ListboxLabel>
			<div class="relative min-w-fit">
				<ListboxButton
					class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
				>
					<span class="block truncate">{{ modelValue?.label }}</span>
					<span
						class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
					>
						<ChevronUpDownIcon
							class="h-5 w-5 text-gray-400"
							aria-hidden="true"
						/>
					</span>
				</ListboxButton>

				<transition
					leave-active-class="transition ease-in duration-100"
					leave-from-class="opacity-100"
					leave-to-class="opacity-0"
				>
					<ListboxOptions
						class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
					>
						<ListboxOption
							as="template"
							v-for="option in options"
							:key="option.value"
							:value="option"
							v-slot="{ active, selected }"
						>
							<li
								:class="[
									active ? 'bg-indigo-600 text-white' : 'text-gray-900',
									'relative cursor-default select-none p-4 py-2',
								]"
							>
								<span
									:class="[
										selected ? 'font-semibold' : 'font-normal',
										'block truncate',
									]"
									>{{ option.label }}</span
								>

								<!-- <span
                v-if="selected"
                :class="[
                  active ? 'text-white' : 'text-indigo-600',
                  'absolute inset-y-0 left-0 flex items-center pl-1.5',
                ]"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span> -->
							</li>
						</ListboxOption>
					</ListboxOptions>
				</transition>
			</div>
		</Listbox>
	</div>
</template>

<script lang="ts" setup>
import {
	Listbox,
	ListboxButton,
	ListboxLabel,
	ListboxOption,
	ListboxOptions,
} from '@headlessui/vue'
import ChevronUpDownIcon from '@heroicons/vue/20/solid/ChevronUpDownIcon'

type Option = {
	label: string
	value: string
}

type SpecialInputType = {
	modelValue: Option | null
	title: string
	options: Option[]
}
defineProps<SpecialInputType>()

const emits = defineEmits(['update:modelValue'])
const onSelect = (selectedOption: Option) =>
	emits('update:modelValue', selectedOption)
</script>
