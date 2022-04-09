<template>
  <!-- <button @click="visiable = !visiable">show</button> -->
  <div class="loading" v-if="visiable" ref="loadingRef">loading</div>
</template>

<script setup lang="ts">
import { watch, toRefs } from 'vue'
import { data } from './loading'

const { visiable } = toRefs(data)

// let invoker = () =>{
//   console
// }

// document.addEventListener('scroll', () => {
//   invoker()
// })

watch(
  visiable,
  (show) => {
    if (show) {
      // document.body.style.position = 'fixed'
    } else {
      // document.body.style.position = 'static'
    }
  },
  {
    immediate: true,
  }
)
</script>

<style lang="less" scoped>
.loading {
  width: 100vw;
  height: 100vh;
  background-color: #66666660;
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 9999;
  // opacity: 0.1;
}
</style>
