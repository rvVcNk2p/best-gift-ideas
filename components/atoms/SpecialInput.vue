<template>
  <div class="flex justify-center items-center">
    <p class="block text-sm font-medium text-gray-700 mr-2">{{ label }}</p>
    <input
      type="text"
      class="relative cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
      :value="modelValue"
      @input="onChanged"
      :placeholder="placeholder"
    />

    <p v-if="prefix" class="ml-1">{{ prefix }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  modelValue: string
  label: string
  prefix?: string
  placeholder?: string
}>()

const emit = defineEmits(['update:modelValue'])

const onChanged = (e: any) => emit('update:modelValue', e.target.value)
</script>
