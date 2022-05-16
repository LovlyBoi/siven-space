import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Toaster from '@meforma/vue-toaster'
import { Loading } from '@/plugin/Loading'

import '@/assets/css/index.less'
import 'animate.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toaster)
app.use(Loading)
app.mount('#app')
