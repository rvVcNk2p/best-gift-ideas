// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.
import { corsHeaders } from '../_shared/cors.ts'

const createObj = (ideasArr: string[]) => {
	return ideasArr.map((idea) => {
		const [name, rating, description] = idea.split('||').map((i) => i.trim())
		return {
			name,
			rating,
			description,
		}
	})
}

const url = 'https://api.openai.com/v1/engines/text-davinci-003/completions'
const headers = {
	'Content-Type': 'application/json',
	'openai-organization': `${Deno.env.get('OPENAI_ORGANIZATION')}`,
	Authorization: `Bearer ${Deno.env.get('OPENAI_API')}`,
}

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

serve(async (req) => {
	// This is needed if you're planning to invoke your function from a browser.
	if (req.method === 'OPTIONS') {
		return new Response('ok', { headers: corsHeaders })
	}

	const { prompt } = await req.json()

	const extendedPrompt =
		`Act as a creative gift advisor and generate cool and unique gift ideas from Amazon. Give me 10 unique gift ideas for the mentioned person. Do not repeat yourself; do not recommend multiple products from the same category. Rate the product on a 1-10 scale, depending on how good a match the product can make. Only recommand product that has min. 8 score points. Only the product name, rating and description is required, nothing else. Description need to be written as a sales text and maximum 35 words. Name maximum length is 5 words. Example output format: {{name}} || {{score}}/10 || {{description}}. Filter out course, class, online, subscription, guid, software, kit, session, mug, socks, drawing ideas. Person details: ` +
		prompt

	console.log('== ', extendedPrompt)

	try {
		const result = await fetch(url, {
			method: 'POST',
			headers,
			body: JSON.stringify({
				prompt: extendedPrompt,
				max_tokens: 256,
				temperature: 0.7,
				top_p: 1,
				frequency_penalty: 0,
				presence_penalty: 0,
				best_of: 1,
				echo: true,
				logprobs: 0,
				stream: false,
			}),
		})
			.then((res) => res.json())
			.then((json) => json)

		const trimmedResult = result.choices[0].text
			.replace(`${extendedPrompt}`, '')
			.split('\n')
			.filter((row: string) => row.trim().length > 0)

		return new Response(JSON.stringify(createObj(trimmedResult)), {
			headers: { ...corsHeaders, 'Content-Type': 'application/json' },
			status: 200,
		})
	} catch (error: any) {
		const errorMessage = `Something went wrong: ${error}`

		return new Response(JSON.stringify({ error: errorMessage }), {
			headers: { ...corsHeaders, 'Content-Type': 'application/json' },
			status: 400,
		})
	}
})
