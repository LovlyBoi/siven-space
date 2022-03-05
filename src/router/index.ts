import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from "../views/HomeView.vue";
import MainPage from '../views/MainPageForPc.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
