<template>
  <div class="top-detail">
    <music-list
      :songs="songs"
      :title="title"
      :pic="pic"
      :loading="loading"
      rank
    />
  </div>
</template>
<script>
import { TOP_KEY } from '@/assets/js/constant'
import { getTopDetail } from '@/service/top-list'
import createDetailComponent from '@/assets/js/create-detail-component'
export default createDetailComponent('top-detail', TOP_KEY, getTopDetail)
</script>
<style lang="scss" scoped>
  .top-detail {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: $color-background;
  }
</style>
