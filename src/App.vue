<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style lang="less">
.app {
  width: 990px;
  margin: 0 auto;
  padding-top: 60px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
