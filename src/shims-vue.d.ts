/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'masonry-layout'

declare module '@meforma/vue-toaster' {
  type Toast = {
    show: (msg: string, options?: Options) => void
    success: (msg: string, options?: Options) => void
    warning: (msg: string, options?: Options) => void
    error: (msg: string, options?: Options) => void
    info: (msg: string, options?: Options) => void
  }
  type Options = {
    position:
      | 'top'
      | 'bottom'
      | 'top-right'
      | 'bottom-right'
      | 'top-left'
      | 'bottom-left'
    duration: number
    dismissible?: boolean
    maxToasts?: number | false
    pauseOnHover?: boolean
  }

  const createToaster: (options: Options) => Toast

  export { install, createToaster }
}
