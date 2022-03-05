<template>
  <nav class="header-card-nav">
    <a
      href="javascript:;"
      v-for="(item, index) in navList"
      :key="item.title"
      :class="{
        active: activeIndex === index,
      }"
      @click="handleNavItemClick(item, index)"
      >{{ item.title }}</a
    >
  </nav>
</template>

<script lang="ts" setup>
import { ref, defineProps, withDefaults } from 'vue'
import { useRouter } from 'vue-router'

import type { NavItem } from './type'

const router = useRouter()

interface Props {
  navList?: NavItem[]
}

withDefaults(defineProps<Props>(), {
  navList: () => [{ title: '全部' }, { title: '随笔' }, { title: '笔记' }],
})

const activeIndex = ref(-1)

const handleNavItemClick = (item: NavItem, index: number) => {
  activeIndex.value = index
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
