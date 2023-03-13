import { serverQueryContent } from '#content/server'
// @ts-ignore
import { SitemapStream, streamToPromise, XMLToSitemapItemStream } from 'sitemap'
import { resolve } from 'node:path'
import { createReadStream } from 'fs'

export default defineEventHandler(async (event) => {
	// Fetch all documents
	// https://content.nuxtjs.org/guide/recipes/sitemap#server-route
	const docs = await serverQueryContent(event).find()

	// const filePath = resolve('node_modules/.cache/.sitemap/sitemap.xml')

	const sitemap = new SitemapStream({
		hostname: 'https://example.com', // TODO: Rename it
	})

	for (const doc of docs) {
		sitemap.write({
			url: doc._path,
			changefreq: 'monthly',
		})
	}

	sitemap.end()

	// createReadStream(filePath).pipe(new XMLToSitemapItemStream()).pipe(sitemap)

	return streamToPromise(sitemap)
})
