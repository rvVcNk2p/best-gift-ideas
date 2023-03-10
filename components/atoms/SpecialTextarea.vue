<template>
	<div class="special-textarea">
		<label :for="name" class="special-textarea__title">{{ title }}</label>
		<div class="special-textarea__wrapper">
			<textarea
				class="special-textarea__textarea"
				:name="name"
				:id="name"
				:value="modelValue"
				:placeholder="placeholder"
				@input="onChanged"
			/>
			<div class="special-textarea__error" v-if="error">
				<p>{{ error }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	modelValue: string
	title: string
	name: string
	placeholder?: string
	error?: string | undefined
}>()

const emit = defineEmits(['update:modelValue'])
const onChanged = (e: any) => emit('update:modelValue', e.target.value)
</script>

<!-- TODO: Remoce duplicated scss code -->
<style lang="scss" scoped>
.special-textarea {
	.special-textarea__title {
		@apply block text-lg font-medium leading-8 text-gray-700;
	}

	.special-textarea__wrapper {
		@apply mt-2 flex h-full flex-col pb-10;
	}
	.special-textarea__textarea {
		@apply relative box-border block h-full w-full cursor-default;
		@apply rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm sm:text-sm;
		@apply focus:outline-none focus:ring-1;
	}
	.special-textarea__error {
		@apply mt-1;
	}

	&.is-valid {
		.special-textarea__textarea {
			@apply border-green-500 outline-none ring-green-500;
		}
	}
	&.is-invalid {
		.special-textarea__textarea {
			@apply border-red-500 outline-none ring-red-500;
		}
		.special-textarea__error {
			@apply text-red-500;
		}
	}
}
</style>
