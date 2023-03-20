// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// https://app.supabase.com/project/umjdmeqzitwrcnmmjaxf/functions/gifty-land-generate-ideas/details
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

serve(async (req: Request) => {
	// This is needed if you're planning to invoke your function from a browser.
	if (req.method === 'OPTIONS') {
		return new Response('ok', { headers: corsHeaders })
	}

	const { prompt } = await req.json()

	const extendedPrompt = `
		Act as a creative gift advisor and generate cool and unique gift ideas from Amazon. 
		Give me 8 unique gift ideas for the mentioned person. 
		Rules:
		1. Do not repeat yourself; do not recommend multiple products from the same category. 
		2. Rate the product on a 1-10 scale, depending on how good a match the product can make. 
		3. Only recommand product that has min. 8 score points. 
		4. Only the product name, rating and description is required, nothing else. 
		5. Description need to be written as a sales text, between 15 and 20 words. Name maximum length is 4 words. 
		Example output format: {{name}} || {{score}}/10 || {{description}}. 
		6.Regenerate idea if contains any from these words: course, class, online, subscription, guid, software, kit, session, mug, socks, experiences, drawing ideas. 

		Person details: ${prompt}
	`

	console.log('== ', extendedPrompt)

	try {
		const result = await fetch(url, {
			method: 'POST',
			headers,
			body: JSON.stringify({
				prompt: extendedPrompt,
				max_tokens: 2024,
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

		console.log('====')
		console.log('==', trimmedResult)
		console.log('====')

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
