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
import { useFetchStore } from '@stores'
import { useGetIdeas } from '@composables'
import type { Idea } from '@types'
import type { Ref } from 'vue'

const { fetchIdeas } = useGetIdeas()
const { setIsLoading } = useFetchStore()

const generatedIdeas: Ref<Idea[]> = ref([])

const generateIdeas = async (prompt: string) => {
  setIsLoading(true)
  generatedIdeas.value = []
  try {
    generatedIdeas.value = await fetchIdeas(prompt)
  } catch (error) {
    console.log(`Something went wrong. Error message: ${error}`)
  }
  setIsLoading(false)
}
</script>

<script lang="scss"></script>
