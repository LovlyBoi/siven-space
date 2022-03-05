<template>
  <div class="content-card white-card-shadow">
    <div class="card-header">
      <div
        class="header-tag"
        :style="{ 'background-color': mapColor(tag.color) }"
      >
        {{ tag.name }}
      </div>
      <div class="update-time">01 / 12</div>
    </div>
    <div class="card-title">{{ title }}</div>
    <div class="card-pictures-wrapper"></div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

import mapColor from './mapColor'
import type { CardTag } from './type'

defineProps<{
  tag: CardTag
  publishDate: Date
  upateDate: Date
  title: string
  pictures: string[]
  id: number
}>()
</script>

<style lang="less" scoped>
.content-card {
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 15px;

  .card-header {
    margin-bottom: 8px;
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
    cursor: pointer;
  }
}
</style>
