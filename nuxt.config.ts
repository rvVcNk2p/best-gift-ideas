// https://nuxt.com/docs/api/configuration/nuxt-config
import alias from './pathAliases'

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'M+PLUS+Rounded+1c': true,
        },
      },
    ],
  ],
  alias,
})
