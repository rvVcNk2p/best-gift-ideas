<template>
	<div class="special-input grid grid-rows-2">
		<label :for="name" class="special-input__title">
			{{ title }}
		</label>
		<input
			class="special-input__input"
			type="text"
			:name="name"
			:id="name"
			:value="modelValue"
			:placeholder="placeholder"
			@input="onChanged"
		/>
		<div class="special-input__error" v-if="error">
			<p>{{ error }}</p>
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
.special-input {
	.special-input__title {
		@apply block text-lg font-medium leading-8 text-gray-700;
	}
	.special-input__input {
		@apply relative cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm sm:text-sm;
		@apply focus:outline-none focus:ring-1;
	}
	.special-input__error {
		@apply mt-1;
	}

	&.is-valid {
		.special-input__input {
			@apply border-green-500 outline-none ring-green-500;
		}
	}
	&.is-invalid {
		.special-input__input {
			@apply border-red-500 outline-none ring-red-500;
		}
		.special-input__error {
			@apply text-red-500;
		}
	}
}
</style>
