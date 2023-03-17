import VueGtag, { trackRouter } from 'vue-gtag-next'
import { transformBlogPath } from '@libs/string'

const pageName = (path: string) => {
	if (path === '/') return 'Gifty.land | Home'
	else if (path === '/blog') return 'Gifty.land | Blog'
	else if (path.includes('/blog/')) return transformBlogPath(path)
	else return `${path}`
}

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(VueGtag, {
		property: {
			id: 'G-L6VBMWVS2G',
		},
	})
	trackRouter(useRouter(), {
		template(to, from) {
			return {
				page_title: pageName(to.path),
				page_location: to.path,
				page_path: to.path,
			}
		},
	})
})
