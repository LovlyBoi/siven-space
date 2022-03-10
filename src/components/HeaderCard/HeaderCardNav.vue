<template>
  <nav class="header-card-nav">
    <a
      href="javascript:;"
      v-for="item in navList"
      :key="item.title"
      :class="{
        active: curRoute === item.route,
      }"
      @click="handleNavItemClick(item)"
    >
      {{ item.title }}
    </a>
  </nav>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'
import { useRouter } from 'vue-router'
import { useHeaderStore, storeToRefs } from '@/store'

import type { NavItem } from './type'

interface Props {
  navList?: NavItem[]
}

const router = useRouter()

const { curRoute } = storeToRefs(useHeaderStore())

withDefaults(defineProps<Props>(), {
  navList: () => [
    { title: '全部', route: '/all' },
    { title: '随笔', route: '/essays' },
    { title: '笔记', route: '/notes' },
    { title: '发布', prompt: true },
    { title: '关于我', prompt: true },
  ],
})

const handleNavItemClick = (item: NavItem) => {
  if (item.route) {
    router.push(item.route)
  }
  if (item.prompt) {
    if (item.title === '发布') {
      loginPrompt()
    } else if (item.title === '关于我') {
      aboutMePrompt()
    }
  }
}

function loginPrompt() {
  console.log('弹出登录弹窗')
}

function aboutMePrompt() {
  console.log('弹出个人信息弹窗')
}
</script>

<style lang="less" scoped>
.header-card-nav {
  margin-left: 30px;
  line-height: 50px;

  a {
    margin: 0 10px;
    color: #999;
    font-weight: lighter;

    &:hover {
      color: #333;
    }

    &.active {
      font-weight: normal;
      color: #333;
    }
  }
}
</style>
