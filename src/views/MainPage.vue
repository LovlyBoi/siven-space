<template>
  <div class="main-page">
    <header class="main-page-header">
      <header-card userName="浅秋细雨" intro="智文的个人主页"></header-card>
    </header>
    <!-- 点击卡片弹窗 -->
    <card-pop-up class="card-detail" :show="showPopUp"></card-pop-up>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
    <footer class="main-page-footer">
      <footer-bar></footer-bar>
    </footer>
  </div>
</template>

<script lang="ts" setup>
// import { watch } from 'vue'
import HeaderCard from '@/components/HeaderCard/HeaderCard.vue'
import FooterBar from '@/components/FooterBar/FooterBar.vue'
import CardPopUp from '@/components/common/PopUp/CardPopUp.vue'
import { storeToRefs } from 'pinia'

import { useCardStore } from '@/store'

const cardStore = useCardStore()

const { showPopUp } = storeToRefs(cardStore)


// console.log(cardStore.showPopUp)
</script>

<style lang="less" scoped></style>
