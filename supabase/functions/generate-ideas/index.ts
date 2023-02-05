// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

const url = 'https://api.openai.com/v1/engines/text-davinci-003/completions'
const headers = {
  'Content-Type': 'application/json',
  'openai-organization': `${Deno.env.get('OPENAI_ORGANIZATION')}`,
  Authorization: `Bearer ${Deno.env.get('OPENAI_API')}`,
}

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

serve(async (req) => {
  const { prompt } = await req.json()

  try {
    const result = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        prompt,
        max_tokens: 256,
        temperature: 1,
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
      .replace(`${prompt}`, '')
      .split('\n')
      .filter((row: string) => row.trim().length > 0)

    return new Response(JSON.stringify(trimmedResult), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error: any) {
    const errorMessage = `Something went wrong: ${error}`

    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { 'Content-Type': 'application/json' },
    })
  }
})
