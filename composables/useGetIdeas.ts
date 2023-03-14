import type { Idea } from '@types'

export const useGetIdeas = () => {
	const fetchIdeas = async (prompt: string) => {
		const runtimeConfig = useRuntimeConfig()
		const baseUrl =
			runtimeConfig.public.environment === 'dev'
				? runtimeConfig.public.apiBaseUrl
				: runtimeConfig.public.apiBaseUrlProd

		const { data, pending, error, refresh } = await useFetch(baseUrl, {
			method: 'POST',
			body: {
				prompt,
			},
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${runtimeConfig.public.bearerToken}`,
			},
		})

		return data.value as Idea[]
	}

	return { fetchIdeas }
}
