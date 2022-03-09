<template>
  <div class="card-container">
    <div class="waterfall-content masonry-grid">
      <ContentCard
        class="grid-item"
        v-for="card in cards"
        :key="card.id"
        :author="card.author"
        :tag="card.tag"
        :publish-date="card.publishDate"
        :update-date="card.updateDate"
        :pictures="card.pictures"
        :title="card.title"
        :id="card.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
// import Masonry from 'masonry-layout'

import type { ContentCardProps } from '../ContentCard/type'
import ContentCard from '../ContentCard/ContentCard.vue'

defineProps<{
  cards: ContentCardProps[]
}>()

// onMounted(() => {
//   // console.log('asjdakjsd')
  
// })

</script>

<style lang="less" scoped>
@media screen and (max-width: 638px) {
  .grid-item {
    width: 95% !important;
  }
}
.waterfall-content {
  width: 100%;

  .grid-item {
    float: left;
    margin: 10px;
  }
}
</style>
