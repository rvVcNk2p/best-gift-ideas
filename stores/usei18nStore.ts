import { defineStore } from 'pinia'

interface i18nState {
  locale: AVAILABLE_LOCALES
}

export enum AVAILABLE_LOCALES {
  'HU' = 'hu',
  'EN' = 'en',
}

export const usei18nStore = defineStore('i18n', {
  state: (): i18nState => {
    return {
      locale: AVAILABLE_LOCALES.HU,
    }
  },
  actions: {
    setLocale(_locale: AVAILABLE_LOCALES) {
      this.locale = _locale
    },
  },
})
