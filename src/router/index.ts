import { createRouter, createWebHashHistory } from 'vue-router'
import type {
  RouteRecordRaw,
} from 'vue-router'
import { useHeaderStore } from '../store'

import AllView from '@/views/AllView.vue'
import LifeEssaysView from '@/views/LifeEssaysView.vue'
import NotesView from '@/views/NotesView.vue'
import Login from '@/views/LoginView.vue'
import Publish from '@/views/PublishView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/all',
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
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/publish',
    name: 'publish',
    component: Publish,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to) => {
  const headerStore = useHeaderStore()
  headerStore.$patch({
    curRoute: to.path,
  })
})

export default router
