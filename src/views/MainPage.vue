<template>
  <div class="main-page">
    <header class="main-page-header">
      <header-card userName="浅秋细雨" intro="智文的个人主页"></header-card>
    </header>
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
import HeaderCard from '@/components/HeaderCard/HeaderCard.vue'
import FooterBar from '@/components/FooterBar/FooterBar.vue'
</script>

<style lang="less" scoped></style>
