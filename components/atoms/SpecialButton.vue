<template>
	<LoadingPencil v-if="isLoading" />
	<button
		v-else
		aria-label="Primary Button"
		type="button"
		class="button-base gradient-bg"
		:class="[disabled ? 'invalid-state cursor-not-allowed' : '']"
		style="flex-shrink: 0"
		:disabled="disabled || isLoading"
	>
		<span data-v-93aaa624="" data-v-fac1f164="">
			<slot />
		</span>
	</button>
</template>

<script lang="ts" setup>
import { LoadingPencil } from '@atoms'
import { useFetchStore } from '@stores'
import { storeToRefs } from 'pinia'

const { isLoading } = storeToRefs(useFetchStore())
defineProps<{ disabled: boolean }>()
</script>

<style lang="scss">
.button-base {
	@apply rounded-md border border-transparent px-6 py-3 text-base font-bold text-white shadow-sm;
	@apply w-full md:w-auto;
}
.gradient-bg {
	background: linear-gradient(
		60deg,
		#4263c3,
		#ac3999,
		#f04e4c,
		#f59245,
		#f5c952
	);
	animation: animatedgradient 3s ease infinite alternate;
	background-size: 300% 300%;
}

@keyframes animatedgradient {
	0% {
		background-position: 0 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	to {
		background-position: 0 50%;
	}
}
</style>
