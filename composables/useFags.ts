import type { Ref } from 'vue'
import { FaqType } from '@types'

export const useFaqs = () => {
  const faqs: Ref<Array<FaqType>> = ref([
    {
      question: 'Is this a 100% free?',
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: 'Is it a true AI, who generates me with ideas?',
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: 'How does the personalization works?',
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question:
        'Do you have any income source what covers the operational costs?',
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
  ])

  return {
    faqs,
  }
}
