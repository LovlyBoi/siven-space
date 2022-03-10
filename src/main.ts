import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Loading from './components/common/Loading/index'
import Toaster from '@meforma/vue-toaster'

import '@/assets/css/index.less'
import 'animate.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Loading)
app.use(Toaster)
app.mount('#app')
