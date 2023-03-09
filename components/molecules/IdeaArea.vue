<template>
  <div>
    <div class="mt-10 md:col-span-2">
      <form action="#" method="POST">
        <div
          class="sm:overflow-hidden sm:rounded-md min-h-[300px] mb-2 flex flex-col justify-between items-center"
        >
          <div class="w-full grid grid-cols-2 gap-10 bg-white px-4 py-5 sm:p-6">
            <div class="grid grid-rows-3 gap-4">
              <SpecialSelect
                v-model="fixedFormData.gender"
                title="This special person is a:"
                :options="genderOptions"
              />
              <SpecialInput
                title="What is their relation to you?"
                v-model="fixedFormData.relation"
                placeholder="e.g. Nephew"
              />
              <SpecialSelect
                v-model="fixedFormData.occasion"
                title="What is the occasion?"
                :options="occasionOptions"
              />
            </div>

            <div class="">
              <label
                for="comment"
                class="block text-md font-medium text-gray-700 leading-8"
                >Add idea goes here:</label
              >
              <div class="mt-2 flex flex-col h-full pb-10">
                <textarea
                  v-model="prompt"
                  name="comment"
                  id="comment"
                  class="p-4 block w-full h-full box-border rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm bg-gray-100"
                  placeholder="e.g. a 20-year-old who likes programming and hiking and is very energetic. Provide more information for a better suggestion."
                ></textarea>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 px-4 py-3 text-right sm:px-6 w-full">
            <SpecialButton @click="generateIdeas" :disabled="prompt.length < 5">
              {{ t('globals.find_label') }}
            </SpecialButton>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SpecialButton, SpecialSelect, SpecialInput } from '@atoms'
import { ref } from 'vue'
import { occasionOptions, genderOptions } from '@constants'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const prompt = ref('')
const emits = defineEmits(['generate-ideas'])

const extendedPrompt = computed(() => {
  let innerPrompt = `Is a ${fixedFormData.gender.label}. The ocasion why I need a gigt idea: ${fixedFormData.occasion.label}.`
  if (fixedFormData.relation)
    innerPrompt += ` Our relationship: ${fixedFormData.relation}.`
  if (prompt.value)
    innerPrompt += ` Extra information about the person: ${prompt.value}`
  return innerPrompt
})
const generateIdeas = () => emits('generate-ideas', extendedPrompt.value)

const fixedFormData = reactive({
  gender: genderOptions[0],
  relation: '',
  occasion: occasionOptions[0],
})

watch(
  () => fixedFormData,
  () => {
    console.log('== [UPDATED] == fixedFormData:')
    console.log(fixedFormData)
  },
  {
    deep: true,
  }
)
</script>

<style lang="scss">
.invalid-state {
  background: grey !important;
}
</style>
