import { defineStore } from 'pinia'
import { getBlog } from '@/api'
import { createToaster } from '@meforma/vue-toaster'

const toast = createToaster({
  position: 'top-right',
  duration: 2000,
})

interface CardData {
  id: number
  title: string
  author: string
  publishDate: Date
  updateDate: Date
  body: string
}

interface CardState {
  showPopUp: boolean
  cardData: CardData
}

const useCardStore = defineStore('cardStore', {
  state: (): CardState => ({
    showPopUp: false,
    cardData: {
      id: 0,
      title: '',
      author: '',
      publishDate: new Date(),
      updateDate: new Date(),
      body: '',
    },
  }),
  actions: {
    async showCardPopUp(cardId: number) {
      if (cardId !== this.cardData.id) {
        this.cardData.id = cardId
        // 通过 card id 找到对应 card 具体信息
        const response = await getBlog(cardId)
        // console.log(response)
        if ((response as any).code !== 200) {
          console.warn(response, 'response')
          toast.warning('这篇文章好像跑路了呢 щ(ﾟДﾟщ)')
        }
        this.cardData.title = response.data[0].title
        this.cardData.author = response.data[0].author
        this.cardData.publishDate = response.data[0].publishDate
        this.cardData.updateDate = response.data[0].updateDate
        this.cardData.body = response.data[0].body
      }
      // 弹出弹窗
      this.showPopUp = true
    },
    closeCardPopUp() {
      this.showPopUp = false
    },
  },
})

export default useCardStore
