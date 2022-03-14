<template>
  <div class="content-card white-card-shadow">
    <div class="card-header">
      <div
        class="header-tag"
        :style="{ 'background-color': mapColor(tag.color) }"
      >
        {{ tag.name }}
      </div>
      <div class="update-time">{{ formatedPublishDate }}</div>
    </div>
    <div class="card-title" @click="showBlog">{{ title }}</div>
    <div class="card-pictures-wrapper" :class="[`pictures-${picNum}`]">
      <div
        class="picture"
        @click="showBlog"
        v-for="(picUrl, index) in pictures.slice(0, 4)"
        :key="picUrl + index"
      >
        <img :src="picUrl" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, computed } from 'vue'
import { useCardStore } from '@/store'
import moment from '@/utils/moment'

import mapColor from './mapColor'
import type { CardTag } from './type'

const props = defineProps<{
  tag: CardTag
  author: string
  publishDate: Date
  updateDate: Date
  title: string
  pictures: string[]
  id: number
  meta?: {
    [key: string]: any
  }
}>()

const picNum = ref(props.pictures.length > 4 ? 4 : props.pictures.length)

const cardStore = useCardStore()

const showBlog = () => {
  cardStore.showCardPopUp(props.id)
}

const formatedPublishDate = computed(() =>
  moment(props.publishDate).format('YYYY/M/DD')
)
// console.log(formatedPublishDate.value)
</script>

<style lang="less" scoped>
@media screen and (max-width: 638px) {
  .content-card {
    width: 95vw !important;
  }
}
.content-card {
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 15px;
  transition: 0.5s;

  .card-header {
    .header-tag {
      font-weight: lighter;
      font-size: 12px;
      display: inline-block;
      padding: 1px 6px;
      border-radius: 4px;
      margin-right: 10px;
      color: #fff;
    }
    .update-time {
      font-size: 12px;
      font-weight: 400;
      display: inline-block;
      color: #999;
      cursor: default;
    }
  }

  .card-title {
    font-size: 18px;
    font-weight: 400;
    color: rgb(51, 51, 51);
    letter-spacing: 1px;
    overflow-wrap: break-word;
    margin: 8px 0;
    cursor: pointer;
  }

  .card-pictures-wrapper {
    width: 100%;

    .picture {
      background-color: #ccc;
      border-radius: 4px;
      overflow: hidden;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }

  .pictures-1 {
    .picture {
      width: 100%;
      // height: 180px;
    }
  }

  .pictures-2 {
    .picture {
      width: 100%;
      height: 180px;

      &:nth-child(1) {
        margin-bottom: 8px;
      }
    }
  }

  .pictures-3 {
    .picture {
      height: 200px;

      &:nth-child(1) {
        width: 100%;
        margin-bottom: 8px;
      }

      &:nth-child(2) {
        float: left;
        width: 48.5%;
        height: 150px;
      }

      &:nth-child(3) {
        float: right;
        width: 48.5%;
        height: 150px;
      }
    }
  }

  .pictures-4 {
    .picture {
      height: 180px;

      &:nth-child(1) {
        margin-bottom: 8px;
        height: 150px;
      }
      &:nth-child(2) {
        float: left;
        width: 48.5%;
        height: 200px;
      }
      &:nth-child(3) {
        float: right;
        width: 48.5%;
        height: 96px;
        margin-bottom: 8px;
      }
      &:nth-child(4) {
        float: right;
        width: 48.5%;
        height: 96px;
      }
    }
  }
}
</style>
