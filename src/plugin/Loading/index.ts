import { createVNode, render, ref } from 'vue'
import LoadingVue from './Loading.vue'

const Loading = {
  install() {
    render(createVNode(LoadingVue, { show: loadingState }), document.body)
  },
}

const loadingState = ref(false)

function useLoading() {
  return {
    open: () => {
      loadingState.value = true
    },
    close: () => {
      loadingState.value = false
    },
  }
}

export { Loading, useLoading }
