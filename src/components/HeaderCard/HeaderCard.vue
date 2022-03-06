<template>
  <div
    class="header-card white-card-shadow"
    :class="[
      !isSmallScreen && expend ? 'expened-card' : '',
      isSmallScreen ? 'full-width-card' : '',
    ]"
  >
    <router-link to="/aboutme">
      <div class="avatar">
        <img :src="require('@/assets/img/avatar.jpg')" alt="头像" />
      </div>
    </router-link>

    <div class="user-info">
      <router-link to="/">
        <h3 class="user-name">{{ userName }}</h3>
      </router-link>
      <h4 class="user-intro">{{ intro }}</h4>
    </div>

    <div class="nav-wrapper">
      <transition enter-active-class="animate__animated animate__fadeInLeft">
        <header-card-nav v-if="expend" />
      </transition>
    </div>

    <div class="header-button" @click="handleHeaderButtonClick">
      <input
        type="checkbox"
        id="hidden-extend-trigger"
        v-model="expend"
        :disabled="isSmallScreen"
      />
      <label for="hidden-extend-trigger" v-if="!expend">
        <div class="button-extend-wrapper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </label>
      <label for="hidden-extend-trigger" v-else>
        <div class="button-shrink-wrapper">
          <div></div>
          <div></div>
        </div>
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import HeaderCardNav from './HeaderCardNav.vue'
import { isSmallScreen } from '@/utils/clientWidth'

const expend = ref(false)

defineProps({
  userName: {
    type: String,
    required: true,
  },
  intro: {
    type: String,
    default: '',
  },
})

const handleHeaderButtonClick = () => {
  if (!isSmallScreen.value) {
    return
  } else {
    console.log('弹出弹窗')
  }
}
</script>

<style lang="less" scoped>
// 大屏幕
@media only screen and (min-width: 638px) {
  .button-extend-wrapper {
    &:hover div {
      &:first-child {
        transform: rotate(-90deg) translateX(-6px);
      }
      &:last-child {
        transform: rotate(-90deg) translateX(6px);
      }
    }
  }

  .button-shrink-wrapper {
    div:first-child {
      transform: translateY(5px) rotate(45deg);
    }
    div:last-child {
      transform: translateY(-5px) rotate(-45deg);
    }
    &:hover div {
      &:first-child {
        transform: translateY(5px);
      }
      &:last-child {
        transform: translateY(-5px);
      }
    }
  }
}

// 小屏幕
// @media only screen and (max-width: 638px) {

// }

.header-card {
  background-color: #fff;
  border-radius: 8px;
  width: 400px;
  height: 80px;
  padding: 15px 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
  transition: width 300ms;

  &.expened-card {
    width: 600px;
  }

  &.full-width-card {
    width: 95vw;
  }

  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background-color: #999;
    overflow: hidden;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    // box-shadow: 9px 9px 18px #dbdbdb, -9px -9px 18px #ffffff;

    img {
      min-width: 100%;
      min-height: 100%;
      object-fit: cover;
    }
  }

  .user-info {
    margin-left: 28px;
    flex-shrink: 0;

    .user-name {
      font-weight: normal;
      font-size: 18px;
    }

    .user-intro {
      font-weight: lighter;
      font-size: 12px;
    }
  }

  .nav-wrapper {
    overflow: hidden;
  }

  .header-button {
    position: absolute;
    right: 28px;

    #hidden-extend-trigger,
    #hidden-shrink-trigger {
      display: none;
    }

    .button-extend-wrapper,
    .button-shrink-wrapper {
      width: 20px;
      height: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      div {
        display: inline-block;
        background-color: #53555c;
        border-radius: 1px;
        height: 2px;
        width: 20px;
        transition: all 100ms;
        box-shadow: 20px 20px 60px #2f3030, -20px -20px 60px #3f4042;
      }
    }
  }
}
</style>
