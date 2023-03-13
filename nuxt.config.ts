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
		'@nuxt/content',
		[
			'@nuxtjs/google-fonts',
			{
				families: {
					'M+PLUS+Rounded+1c': true,
				},
			},
		],
	],
	content: {
		// https://content.nuxtjs.org/api/configuration
	},
	routeRules: {
		'/blog/**': { swr: true },
		'/admin/**': { ssr: false },
	},
	nitro: {
		prerender: {
			routes: ['/sitemap.xml'],
		},
	},
	alias,
	runtimeConfig: {
		public: {},
	},
})
