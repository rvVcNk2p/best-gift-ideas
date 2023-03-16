import type { Ref } from 'vue'
import { FaqType } from '@types'

export const useFaqs = () => {
	const faqs: Ref<Array<FaqType>> = ref([
		{
			question: 'Is this a 100% free?',
			answer:
				"Yes, our gift recommendation website is 100% free. We don't charge any fees for our services, and we don't require any payment information from our users. Our goal is to help you find the perfect gift for your loved ones without any financial burden.",
		},
		{
			question: 'Is it a true AI, who generates me with ideas?',
			answer:
				'Yes, our gift recommendation website uses artificial intelligence (AI) to generate gift ideas based on the information you provide.',
		},
		{
			question: 'How does personalization works?',
			answer:
				"Our AI algorithm analyzes the data you input, such as the recipient's age, interests, hobbies, and occasion, and generates a list of personalized gift ideas tailored to their preferences. However, it's important to note that our AI is only as accurate as the information you provide. Therefore, we recommend that you provide as much information as possible to help our algorithm generate the most relevant gift ideas for your loved ones. Additionally, we encourage you to browse through the gift ideas and personalize them to your liking based on your own knowledge of the recipient.",
		},
		{
			question:
				'Do you have any income source what covers the operational costs?',
			answer:
				"Yes, our gift recommendation website has applied for the Amazon affiliate program to help cover our operational costs. This means that if you click on a link to a product on our website and make a purchase through Amazon, we may earn a small commission from that sale. However, this does not affect the price you pay for the product, and we only recommend products that we believe are of high quality and value to our users. We are committed to providing our services for free, and any income we generate from the affiliate program will be used to cover our operational costs and improve our website's functionality and user experience.",
		},
	])

	return {
		faqs,
	}
}
