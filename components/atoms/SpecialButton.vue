<template>
  <button
    aria-label="Primary Button"
    type="button"
    class="button-base gradient-bg"
    :class="[disabled ? 'cursor-not-allowed invalid-state' : '']"
    style="flex-shrink: 0"
    :disabled="disabled"
  >
    <span data-v-93aaa624="" data-v-fac1f164=""><slot /></span>
  </button>
</template>

<script lang="ts" setup>
defineProps<{ disabled: boolean }>()
</script>

<style lang="scss">
.button-base {
  @apply px-6 py-3 border border-transparent text-base font-bold rounded-md shadow-sm text-white;
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
