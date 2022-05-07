<template>
  <div class="footer-bar">
    <div class="dividing-line"></div>
    <div class="hitokoto">
      <div class="hitokoto-words">{{ (hitokoto as any).hitokoto }}</div>
      <div class="hitokoto-from">——{{ (hitokoto as any).from }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import request from '@/network'

const hitokoto = ref({})

const defaultHitokoto = '即使天无雨，我亦留此地'

/**
 *  一言接口：
 *   a	动画
 *   b	漫画
 *   c	游戏
 *   d	文学
 *   e	原创
 *   f	来自网络
 *   g	其他
 *   h	影视
 *   i	诗词
 *   j	网易云
 *   k	哲学
 *   l	抖机灵
 */
const hitokotoType = ['d', 'h']

const getHitokotoURL = (types: string[]): string => {
  if (types.length < 1) return 'https://v1.hitokoto.cn'
  let url = 'https://v1.hitokoto.cn/?'
  for (let type of types) {
    url += `c=${type}&`
  }

  return url.slice(0, url.length - 1)
}

request
  .request({
    url: getHitokotoURL(hitokotoType),
  })
  .then((res) => {
    console.log(res)
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
    display: inline-block;
    font-size: 14px;
    font-weight: lighter;
    .hitokoto-from {
      padding-top: 20px;
      padding-right: 14px;
      text-align: right;
    }
  }
}
</style>
