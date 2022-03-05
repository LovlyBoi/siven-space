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
  ],
})

const handleNavItemClick = (item: NavItem) => {
  curRoute.value = item.route
  router.push(item.route)
}
</script>

<style lang="less" scoped>
.header-card-nav {
  margin-left: 30px;

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
