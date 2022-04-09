<template>
  <div class="footer-bar">
    <div class="dividing-line"></div>
    <div class="hitokoto">{{ (hitokoto as any).hitokoto }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import request from '@/network'

const hitokoto = ref({})

const defaultHitokoto = '即使天无雨，我亦留此地'

request
  .request({
    url: 'https://v1.hitokoto.cn/?c=d&c=i&c=k',
  })
  .then((res) => {
    // console.log(res)
    hitokoto.value = res
  })
  .catch((err) => {
    console.log(err, ' err')
    hitokoto.value = defaultHitokoto
  })
</script>

<style lang="less" scoped>
@media screen and (max-width: 638px) {
  // .dividing-line {
  //   width: 30vw;
  // }
}
.footer-bar {
  height: 100px;
  padding: 20px 0;
  .dividing-line {
    width: 120px;
    height: 1px;
    background-color: #bbb;
    margin: 10px 0;
  }
  .hitokoto {
    font-size: 14px;
    font-weight: lighter;
  }
}
</style>
