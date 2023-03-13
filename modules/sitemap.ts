import { mkdirSync, writeFileSync } from 'fs'
import { Readable } from 'stream'
import { dirname } from 'path'
import type { NuxtPage } from '@nuxt/schema'
import { SitemapStream, streamToPromise, SitemapItemLoose } from 'sitemap'
import { defineNuxtModule, createResolver } from '@nuxt/kit'

async function createSitemapFile(sitemap: string, filepath: string) {
	const dirPath = dirname(filepath)
	await mkdirSync(dirPath, { recursive: true })
	await writeFileSync(filepath, sitemap)
}

export default defineNuxtModule({
	meta: {
		name: '@rvVcNk2p/nuxt3-sitemap',
		configKey: 'sitemap',
		compatibility: { nuxt: '^3.1.0' },
	},
	defaults: {
		hostname: 'http://localhost:3000',
		mapPages: (x: NuxtPage): SitemapItemLoose | null => ({ url: x.path }),
	},
	async setup(options, nuxt) {
		async function generateSitemap(routes: NuxtPage[]) {
			const sitemapRoutes = routes
				.map(options.mapPages)
				.filter((x) => x !== null)

			// https://github.com/ekalinin/sitemap.js#generate-a-one-time-sitemap-from-a-list-of-urls
			const stream = new SitemapStream({ hostname: options.hostname })
			for (const route of sitemapRoutes) {
				stream.write(route)
			}
			stream.end()

			return streamToPromise(stream).then((data) => data.toString())
		}

		const resolver = createResolver(import.meta.url)
		const filePath = resolver.resolve(
			nuxt.options.srcDir,
			'node_modules/.cache/.sitemap/sitemap.xml',
		)

		nuxt.hook('pages:extend', async (pages) => {
			const sitemap = await generateSitemap(pages)
			await createSitemapFile(sitemap, filePath)
		})
	},
})
