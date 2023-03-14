<template>
	<div>
		<div class="mt-10 md:col-span-2">
			<form action="#">
				<div
					class="mb-2 flex min-h-[300px] flex-col items-center justify-between sm:overflow-hidden sm:rounded-md"
				>
					<div
						class="grid w-full grid-cols-1 gap-10 bg-white py-5 pt-5 pb-10 sm:p-6 sm:px-4 md:grid-cols-2"
					>
						<div class="flex flex-col gap-4">
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
								v-model="relation"
								title="What is their relation to you?"
								name="relation"
								placeholder="e.g. Nephew, Wife, Boyfriend, Grandmother etc."
								:class="{
									'is-invalid': !!errors.relation,
									'is-valid': relationMeta.dirty && !errors.relation,
								}"
								:error="errors.relation"
							/>
						</div>

						<SpecialTextarea
							v-model="additionalInformation"
							title="Add additional information goes here:"
							name="additionalInformation"
							placeholder="e.g. Matt is 20-year-old who likes programming and hiking and is very energetic. Provide more information for a better suggestion."
							:class="{
								'is-invalid': !!errors.additionalInformation,
								'is-valid':
									additionalInformationsMeta.dirty &&
									!errors.additionalInformation,
							}"
							:error="errors.additionalInformation"
						/>
					</div>

					<SpecialButton :disabled="isSubmitting" @submit="onSubmit">
						<template #prefix>
							<button
								@click.prevent="resetForm()"
								class="mr-4 block w-10 md:mr-0"
							>
								<ArrowPathRoundedSquareIcon
									class="h-6 w-6"
									aria-hidden="true"
								/>
							</button>
						</template>
						<template #label>
							{{ t('globals.find_label') }}
						</template>
					</SpecialButton>
				</div>
			</form>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {
	SpecialButton,
	SpecialSelect,
	SpecialInput,
	SpecialTextarea,
} from '@atoms'
import { occasionOptions, genderOptions } from '@constants'
import { useI18n } from 'vue-i18n'
import { useField, useForm } from 'vee-validate'
import { toFormValidator } from '@vee-validate/zod'
import * as zod from 'zod'
import { ArrowPathRoundedSquareIcon } from '@heroicons/vue/24/outline'

const { t } = useI18n()

const emits = defineEmits(['generate-ideas'])

const prompt = computed<string>(() => {
	let innerPrompt = `Is a ${fixedFormData.gender.label}. The ocasion why I need a gigt idea: ${fixedFormData.occasion.label}.`
	if (relation) innerPrompt += ` Our relationship: ${relation.value}.`
	if (additionalInformation.value)
		innerPrompt += ` Extra information about the person: ${additionalInformation.value}`
	return innerPrompt
})

const fixedFormData = reactive({
	gender: genderOptions[0],
	occasion: occasionOptions[0],
})

const onSubmit = async () => {
	await validate()
	if (!Object.keys(errors.value).length) {
		emits('generate-ideas', prompt.value)
	}
}

// TODO: Refactor raw validation error strings and add i18n
const validationSchema = toFormValidator(
	zod.object({
		relation: zod
			.string()
			.min(3, { message: '⛔ Must contain minimum 3 or more character!' })
			.nonempty({ message: '⛔ Relation is required!' }),
		additionalInformation: zod
			.string()
			.nonempty({ message: '⛔ Additional Information is required!' }),
	}),
)

const { handleSubmit, errors, isSubmitting, resetForm } = useForm({
	initialValues: {
		relation: '',
		additionalInformation: '',
	},
	validationSchema,
})

const { value: relation, meta: relationMeta } = useField<string>('relation')
const { value: additionalInformation, meta: additionalInformationsMeta } =
	useField<string>('additionalInformation')

const validate = handleSubmit((values) => {
	// console.log(values)
})
</script>

<style lang="scss">
.invalid-state {
	background: grey !important;
}
</style>
