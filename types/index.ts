export type Idea = {
	name: string
	rating: string
	description: string
}

export type FaqObjectKeys = 'question' | 'answer'
export type FaqType = { [K in FaqObjectKeys]: string }
