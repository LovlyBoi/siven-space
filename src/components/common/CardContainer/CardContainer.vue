<template>
  <div class="card-container">
    <div class="waterfall-content masonry-grid clearfix">
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

import type { ContentCardProps } from '../ContentCard/type'
import ContentCard from '../ContentCard/ContentCard.vue'

defineProps<{
  cards: ContentCardProps[]
}>()
</script>

<style lang="less" scoped>
@media screen and (max-width: 638px) {
  .waterfall-content {
    width: 100% !important;
    margin: 0 auto;

    .grid-item {
      width: 95% !important;
    }
  }
}

@media screen and (min-width: 638px) and (max-width: 990px) {
  .waterfall-content {
    // 两列
    width: 640px !important;
  }
}

.card-container {
  .waterfall-content {
    //  一个card 320px，三列
    width: 960px;
    margin: 0 auto;

    .grid-item {
      float: left;
      margin: 10px;
    }
  }
}
</style>
