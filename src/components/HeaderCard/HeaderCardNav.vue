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
    { title: '全部', route: '/all', auth: false },
    { title: '随笔', route: '/essays', auth: false },
    { title: '笔记', route: '/notes', auth: false },
    { title: '发布', route: '/publish', auth: true },
    { title: '关于我', prompt: true, auth: true },
  ],
})

const handleNavItemClick = (item: NavItem) => {
  if (item.route) {
    router.push(item.route)
  }
  // 需要弹窗，逻辑不走router
  if (item.prompt) {
    if (item.title === '关于我') {
      aboutMePrompt()
    }
  }
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
