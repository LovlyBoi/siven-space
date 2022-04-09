<template>
  <div class="all-view">
    <card-container :cards="cards" />
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import CardContainer from '@/components/common/CardContainer/CardContainer.vue'
import type { ContentCardProps } from '@/components/common/ContentCard/type'

import { getAllCards } from '@/api'
import useMasonry from '@/hooks/useMasonry'
import { resolveResponceData } from './utils'

const cards = ref<ContentCardProps[]>([])

getAllCards().then(async (res) => {
  cards.value = resolveResponceData(res.data)
  await nextTick()
  useMasonry('.masonry-grid')
})
</script>

<style lang="less" scoped></style>
