<template>
  <div
    class="header-card white-card-shadow"
    :style="{ width: expend ? '700px' : '400px' }"
  >
    <div class="avatar">
      <!-- <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80" alt="头像"> -->
    </div>

    <div class="user-info">
      <h3 class="user-name">{{ userName }}</h3>
      <h4 class="user-intro">{{ intro }}</h4>
    </div>

    <keep-alive>
      <transition name="fade">
        <header-card-nav v-if="expend" />
      </transition>
    </keep-alive>

    <div class="header-button">
      <input type="checkbox" id="hidden-extend-trigger" v-model="expend" />
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

const expend = ref(true)

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
</script>

<style lang="less" scoped>
.header-card {
  background-color: #fff;
  border-radius: 8px;
  // width: 400px;
  height: 80px;
  padding: 15px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
  transition: width 300ms;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #999;
    overflow: hidden;
    margin-left: 10px;
    // box-shadow: 9px 9px 18px #dbdbdb, -9px -9px 18px #ffffff;

    img {
      width: 200%;
    }
  }

  .user-info {
    margin-left: 28px;

    .user-name {
      font-weight: normal;
      font-size: 18px;
    }

    .user-intro {
      font-weight: lighter;
      font-size: 12px;
    }
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
}
</style>
