<template>
  <div>
    <label for="comment" class="block text-sm font-medium text-gray-700 mt-10"
      >Add idea goes here:</label
    >
    <div class="mt-2">
      <textarea
        v-model="prompt"
        rows="4"
        name="comment"
        id="comment"
        class="p-4 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm bg-gray-100"
      ></textarea>
    </div>

    <SpecialButton
      class="mt-4"
      @click="generateIdeas"
      :disabled="prompt.length < 5"
    >
      Generate ideas
    </SpecialButton>
  </div>
</template>

<script lang="ts" setup>
import { SpecialButton } from '@atoms'
import { ref } from 'vue'

const prompt = ref('')
const emits = defineEmits(['generate-ideas'])
const generateIdeas = () => emits('generate-ideas', prompt.value)
</script>

<style lang="scss">
.invalid-state {
  background: grey !important;
}
</style>
