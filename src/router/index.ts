import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import {useHeaderStore} from '../store'

import AllView from '@/views/AllView.vue'
import LifeEssaysView from '@/views/LifeEssaysView.vue'
import NotesView from '@/views/NotesView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/all'
  },
  {
    path: '/all',
    name: 'all',
    component: AllView,
  },
  {
    path: '/essays',
    name: 'life-essays',
    component: LifeEssaysView,
  },
  {
    path: '/notes',
    name: 'notes',
    component: NotesView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to) => {
  const headerStore = useHeaderStore()
  headerStore.$patch({
    curRoute: to.path
  })
})

export default router
