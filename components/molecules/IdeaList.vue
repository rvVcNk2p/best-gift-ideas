<template>
  <div class="mt-10" v-if="generatedIdeas.length > 0">
    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <li
        v-for="generatedIdea in generatedIdeas"
        :key="generatedIdea.name"
        class="col-span-1 rounded-lg bg-white shadow"
      >
        <div class="divide-y divide-gray-200" v-if="isValidIdea(generatedIdea)">
          <div class="flex w-full items-center justify-between space-x-6 p-6">
            <div class="flex-1">
              <div class="flex items-center space-x-3">
                <h3 class="truncate text-sm font-medium text-gray-900">
                  {{ generatedIdea.name }}
                </h3>
                <span
                  class="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800"
                  >{{ generatedIdea.rating }}</span
                >
              </div>
              <p class="mt-1 text-sm text-gray-500">
                {{ generatedIdea.description }}
              </p>
            </div>
            <!-- <img
            class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
            :src="person.imageUrl"
            alt=""
          /> -->
          </div>
          <div>
            <div class="-mt-px flex divide-x divide-gray-200">
              <!-- <div class="flex w-0 flex-1">
              <p
                class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700"
              >
                {{ generatedIdea.description }}
              </p>
            </div> -->
              <div class="-ml-px flex w-0 flex-1">
                <!-- TODO AMAZON LINK == :href="`tel:${generatedIdea.name}`" -->
                <a
                  :href="generateAmazonLink(generatedIdea.name)"
                  target="_blank"
                  class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-green-800 hover:text-green-600 cursor-pointer"
                >
                  <EyeIcon class="h-5 w-5" aria-hidden="true" />
                  <span class="ml-3">Check</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { EyeIcon } from '@heroicons/vue/20/solid'
import type { Idea } from '@types'

defineProps<{ generatedIdeas: Idea[] }>()

const generateAmazonLink = (name: string) =>
  `https://www.amazon.com/s?k=${name
    .replace(/^\d+\.\s*/, '') // remone number + dot from start
    .replaceAll(' ', '+')}`

const isValidIdea = (idea: Idea) => idea.description ?? idea.name ?? idea.rating
</script>
