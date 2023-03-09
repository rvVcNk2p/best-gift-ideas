import type { Idea } from '@types'

export const useGetIdeas = () => {
	const fetchIdeas = async (prompt: string) => {
		const runtimeConfig = useRuntimeConfig()

		const { data, pending, error, refresh } = await useFetch(
			runtimeConfig.public.baseUrl,
			{
				method: 'POST',
				body: {
					prompt,
				},
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${runtimeConfig.public.bearerToken}`,
				},
			},
		)

		return data.value as Idea[]
	}

	return { fetchIdeas }
}
