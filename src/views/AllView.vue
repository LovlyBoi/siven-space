<template>
  <div class="all-view">
    <ContentCard
      :tag="card.tag"
      :publish-date="card.publishDate"
      :upate-date="card.upateDate"
      :pictures="card.pictures"
      :title="card.title"
      :id="card.id"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import ContentCard from '@/components/common/ContentCard/ContentCard.vue'
import type { ContentCardProps } from '@/components/common/ContentCard/type'

const card = reactive<ContentCardProps>({
  tag: {
    name: '旅行随笔',
    color: 'orange',
  },
  publishDate: new Date(),
  upateDate: new Date(),
  pictures: [''],
  title: '人生当苦无妨，良人当归即好',
  id: 2
})
</script>

<style lang="less" scoped></style>
