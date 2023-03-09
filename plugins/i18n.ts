import { createI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'

import en from '@locales/en'
import hu from '@locales/hu'
import { usei18nStore } from '@stores'

export default defineNuxtPlugin(({ vueApp }) => {
	const pinia = useNuxtApp().$pinia
	const i18nStore = usei18nStore(pinia)
	const { locale } = storeToRefs(i18nStore)

	const i18n = createI18n({
		legacy: false,
		globalInjection: false,
		locale: locale.value,
		messages: {
			en: en,
			hu: hu,
		},
	})

	vueApp.use(i18n)
})
