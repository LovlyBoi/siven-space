import { defineStore } from 'pinia'

const useHeaderStore = defineStore('headerStore', {
  state() {
    return {
      curRoute: '',
    }
  },
})

export default useHeaderStore
