<template>
  <div class="app">
    <main-page />
  </div>
</template>

<script lang="ts" setup>
import MainPage from './views/MainPage.vue'
import useLoading from './hooks/useLoading'

const loading = useLoading()
// loading.show()

</script>

<style lang="less">
// 大屏幕
@media only screen and (min-width: 990px) {
  .app {
    width: 990px;
    margin: 0 auto;
    padding-top: 60px;
  }
}

// 小屏幕
@media only screen and (max-width: 990px) {
  .app {
    width: 95vw;
    margin: 0 auto;
    padding-top: 60px;
  }
}

@media screen and (max-width: 638px) {
  .app {
    padding-top: 10px;
  }
}
</style>
