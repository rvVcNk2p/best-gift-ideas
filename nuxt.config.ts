// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtPage } from '@nuxt/schema'
import alias from './pathAliases'

export default defineNuxtConfig({
	css: ['~/assets/scss/main.scss'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	// https://answers.netlify.com/t/nuxt-image-doesnt-show-up-after-deploy/46480/12
	// Deploying with netlify CLI
	// Step 1. - npm run generate && netlify deploy --prod -d .output/public/
	// BEWARE: Turn off auto publishing after successful deployment.
	// https://app.netlify.com/sites/spectacular-speculoos-0531d7/deploys
	modules: [
		'@pinia/nuxt',
		'@nuxt/content',
		'@nuxt/image-edge',
		'./modules/sitemap',
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
	sitemap: {
		hostname: 'https://gifty.land/',
		mapPages: (page: NuxtPage) => {
			if (page.path === '/blog/:slug(.*)*') {
				// This is done through the ~/server/routes/sitemap.xml.ts file which actually exposes the file as a public asset
				return null
			} else return { url: page.path }
		},
	},
	hooks: {
		'prerender:routes'(ctx) {
			ctx.routes.add('/sitemap.xml')
		},
	},
	alias,
	runtimeConfig: {
		public: {
			apiBaseUrl: 'http://localhost:54321/functions/v1/',
			apiBaseUrlProd:
				'https://umjdmeqzitwrcnmmjaxf.functions.supabase.co/gifty-land-generate-ideas',
			environment: 'dev',
			bearerToken:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0',
		},
	},
})
