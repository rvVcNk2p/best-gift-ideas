<template>
	<div class="grid grid-rows-2">
		<p class="block text-lg font-medium leading-8 text-gray-700">
			{{ title }}
		</p>
		<input
			type="text"
			class="relative cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
			:value="modelValue"
			@input="onChanged"
			:placeholder="placeholder"
		/>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	modelValue: string
	title: string
	placeholder?: string
}>()

const emit = defineEmits(['update:modelValue'])

const onChanged = (e: any) => emit('update:modelValue', e.target.value)
</script>
