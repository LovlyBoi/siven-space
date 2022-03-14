<template>
  <div class="pop-up mask" v-if="showPopUp">
    <div class="content">
      <label class="close-toggle" for="close-btn">
        <input type="checkbox" id="close-btn" v-model="inputValue" />
        <div></div>
        <div></div>
      </label>
      <div class="title">{{ cardData.title }}</div>
      <div class="intro">{{ cardData.author }}</div>
      <div class="body">
        <p v-for="(paragraph, index) in cardData.body.split('\n')" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, withDefaults } from 'vue'
import { storeToRefs } from 'pinia'
import { useCardStore } from '@/store'

interface Props {
  show?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  show: true,
})

const cardStore = useCardStore()

const { cardData } = storeToRefs(cardStore)

watch(
  () => props.show,
  (state) => {
    if (state) {
      open()
    } else {
      close()
    }
  }
)

const showPopUp = ref(false)

const close = () => {
  showPopUp.value = false
  cardStore.closeCardPopUp()
}

const open = () => {
  showPopUp.value = true
  inputValue.value = true
}

const inputValue = ref(false)

watch(inputValue, (state) => {
  if (state) {
    open()
  } else {
    close()
  }
})

watch(
  showPopUp,
  (state) => {
    if (state) {
      // 弹出弹窗，禁用滚动
      document.querySelector('html')?.classList.add('modal-page')
    } else {
      document.querySelector('html')?.classList.remove('modal-page')
    }
  },
  {
    immediate: true,
  }
)
</script>

<style lang="less" scoped>
.mask {
  overflow-y: auto;
  background-color: rgba(241, 242, 249, 0.97);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}

.pop-up {
  padding: 50px 40px;
  .content {
    width: 990px;
    margin: 0 auto;
    padding: 60px 70px;
    background-color: #fff;
    position: relative;

    .close-toggle {
      width: 20px;
      height: 20px;
      display: block;
      // background-color: red;
      position: absolute;
      right: 20px;
      top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:hover div {
        background-color: #333;
      }

      #close-btn {
        display: none;
      }

      div {
        width: 1px;
        height: 24px;
        display: inline-block;
        position: absolute;
        background-color: #777;
      }
      div:first-of-type {
        transform: rotate(45deg);
      }
      div:last-of-type {
        transform: rotate(-45deg);
      }
    }

    .title {
      color: #262626;
      font-size: 36px;
      margin-bottom: 30px;
    }

    .intro {
      color: #777;
      margin-bottom: 30px;
    }

    .body {
      width: 100%;
      // height: 2000px;
      background-color: #ffffff;

      p {
        margin: 18px 0;
        text-indent: 32px;
      }
    }
  }
}
</style>
