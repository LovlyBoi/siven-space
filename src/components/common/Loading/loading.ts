import { reactive } from 'vue'

const data = reactive({
  visiable: false,
})

function show() {
  data.visiable = true
}

function hide() {
  data.visiable = false
}

export { data, show, hide }
