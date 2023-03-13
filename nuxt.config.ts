// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtPage } from '@nuxt/schema'
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
		'./modules/sitemap',
	],
	content: {
		// https://content.nuxtjs.org/api/configuration
	},
	sitemap: {
		hostname: 'https://gifty.land/',
		mapPages: (page: NuxtPage) => {
			if (page.path === '/blog/:slug(.*)*') {
				// This is done through the ~/server/routes/sitemap.xml.ts file which actually exposes the file as a public asset
				return null
			} else return { url: page.path }
		},
	},
	routeRules: {
		'/blog/**': { swr: true },
		'/admin/**': { ssr: false },
	},
	hooks: {
		'prerender:routes'(ctx) {
			ctx.routes.add('/sitemap.xml')
		},
	},
	alias,
	runtimeConfig: {
		public: {},
	},
})
