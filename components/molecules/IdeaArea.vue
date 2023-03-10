<template>
	<div>
		<div class="mt-10 md:col-span-2">
			<form action="#" method="POST">
				<div
					class="mb-2 flex min-h-[300px] flex-col items-center justify-between sm:overflow-hidden sm:rounded-md"
				>
					<div
						class="grid w-full grid-cols-1 gap-10 bg-white px-4 py-5 sm:p-6 md:grid-cols-2"
					>
						<div class="grid grid-rows-3 gap-4">
							<SpecialSelect
								v-model="fixedFormData.occasion"
								title="What is the occasion?"
								:options="occasionOptions"
							/>
							<SpecialSelect
								v-model="fixedFormData.gender"
								title="What is the person's gender expression?"
								:options="genderOptions"
							/>
							<SpecialInput
								title="What is their relation to you?"
								v-model="fixedFormData.relation"
								placeholder="e.g. Nephew, Wife, Boyfriend, Grandmother etc."
							/>
						</div>

						<div class="">
							<label
								for="comment"
								class="block text-lg font-medium leading-8 text-gray-700"
								>Add additional information goes here:</label
							>
							<div class="mt-2 flex h-full flex-col pb-10">
								<textarea
									v-model="prompt"
									name="comment"
									id="comment"
									class="box-border block h-full w-full rounded-md border-green-300 bg-gray-100 p-4 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
									placeholder="e.g. Matt is 20-year-old who likes programming and hiking and is very energetic. Provide more information for a better suggestion."
								></textarea>
							</div>
						</div>
					</div>

					<div class="w-full px-4 py-3 text-right sm:px-6">
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
import type { Ref } from 'vue'
import { occasionOptions, genderOptions } from '@constants'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const prompt: Ref<string> = ref(
	'Matt is a 20-year-old who likes programming and hiking and is very energetic. Provide more information for a better suggestion.',
)
const emits = defineEmits(['generate-ideas'])

const extendedPrompt = computed<string>(() => {
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
		console.log('== [UPDATED] == fixedFormData: %s', fixedFormData)
	},
	{
		deep: true,
	},
)
</script>

<style lang="scss">
.invalid-state {
	background: grey !important;
}
</style>
