<template>
  <div class="all-view">
    <card-container :cards="cards" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import CardContainer from '@/components/common/CardContainer/CardContainer.vue'
import type { ContentCardProps } from '@/components/common/ContentCard/type'

import mockCards from './mockCards'

const cards = reactive<ContentCardProps[]>(mockCards as ContentCardProps[])
</script>

<style lang="less" scoped></style>
