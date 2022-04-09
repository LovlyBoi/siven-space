import { createApp } from 'vue'
import Loading from './Loading.vue'
import { show, hide } from './loading'

export default {
  instance: {} as any,
  install() {
    if (this.instance.vm) return
    const parentNode = document.createElement('div')
    document.body.appendChild(parentNode)
    this.instance.vm = createApp(Loading).mount(parentNode)
    this.instance.el = parentNode
    this.instance.show = show
    this.instance.hide = hide
  },
}
