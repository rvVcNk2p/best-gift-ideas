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
  alias,
})
