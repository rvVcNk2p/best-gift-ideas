<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen">
    <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
    <div class="mx-auto max-w-5xl">
      <IdeaArea @generate-ideas="generateIdeas" />
      <IdeaList :generated-ideas="generatedIdeas" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IdeaArea, IdeaList } from '@molecules'
import { useGetIdeas } from '@composables'
import type { Idea } from '@types'
import type { Ref } from 'vue'

const { fetchIdeas } = useGetIdeas()

const generatedIdeas: Ref<Idea[]> = ref([])

const generateIdeas = async (prompt: string) => {
  generatedIdeas.value = []
  generatedIdeas.value = await fetchIdeas(prompt)
}
</script>

<script lang="scss"></script>