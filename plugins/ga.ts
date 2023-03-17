import VueGtag from 'vue-gtag'

// TODO: Checl later: https://github.com/johannschopplich/nuxt-gtag

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(
		VueGtag,
		{
			config: {
				id: 'G-L6VBMWVS2G',
			},
		},
		nuxtApp.$router,
	)
})
