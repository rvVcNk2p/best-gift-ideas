import { defineStore } from 'pinia'

interface fetchStore {
  isLoading: boolean
}

export const useFetchStore = defineStore('fetch', {
  state: (): fetchStore => {
    return {
      isLoading: false,
    }
  },
  actions: {
    setIsLoading(isLoading: boolean) {
      this.isLoading = isLoading
    },
  },
})
