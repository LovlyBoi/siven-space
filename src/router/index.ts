import { createRouter, createWebHashHistory } from 'vue-router'
import type {
  RouteRecordRaw,
  // RouteRecordRedirectOption,
} from 'vue-router'
import { useHeaderStore } from '../store'

import AllView from '@/views/AllView.vue'
import LifeEssaysView from '@/views/LifeEssaysView.vue'
import NotesView from '@/views/NotesView.vue'
import { authTokenExist } from '@/utils/auth'

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
    path: '/edit',
    name: 'edit',
    // 在路由守卫中阻止页面跳转，重定向回原来的页面
    component: {},
    meta: {
      never: true,
      auth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: {},
    meta: {
      never: true,
    },
  },
  {
    path: '/aboutme',
    name: 'aboutme',
    component: {},
    meta: {
      never: true,
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from) => {
  if (to.meta.auth && !authTokenExist()) {
    return '/login'
  }
  if (to.meta.never) {
    return from
  }
  const headerStore = useHeaderStore()
  headerStore.$patch({
    curRoute: to.path,
  })
})

export default router
