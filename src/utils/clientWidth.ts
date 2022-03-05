import { ref, computed } from 'vue'

const clientWidth = ref(document.body.clientWidth)

window.onresize = () => {
  clientWidth.value = document.body.clientWidth
}

export default clientWidth
export const isSmallScreen = computed(() => clientWidth.value < 638)
