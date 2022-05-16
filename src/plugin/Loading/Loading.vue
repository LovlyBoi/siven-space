<template>
  <teleport to="body">
    <transition name="fade">
      <div class="load-container" v-if="show.value">
        <div class="boxLoading"></div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { watch, nextTick, defineProps } from 'vue'
import type { Ref } from 'vue'

interface Props {
  show: Ref<boolean>
}

const props = defineProps<Props>()

watch(
  props.show,
  (state) => {
    if (state) {
      nextTick(() => {
        // 弹出弹窗，禁用滚动
        document.querySelector('html')?.classList.add('modal-page')
      })
    } else {
      nextTick(() => {
        document.querySelector('html')?.classList.remove('modal-page')
      })
    }
  },
  {
    immediate: true,
  }
)
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.load-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  .boxLoading {
    width: 50px;
    height: 50px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    &:before {
      content: '';
      width: 50px;
      height: 5px;
      background: #000;
      opacity: 0.1;
      position: absolute;
      top: 59px;
      left: 0;
      border-radius: 50%;
      animation: shadow 0.5s linear infinite;
    }
    &:after {
      content: '';
      width: 50px;
      height: 50px;
      background: #00adb5;
      animation: animate 0.5s linear infinite;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 3px;
    }
  }
}

@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes shadow {
  0%,
  100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
</style>
