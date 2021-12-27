<template>
  <div
    class="singer"
    v-loading="!singers.length"
  >
    <index-list
      :data="singers"
      @select="selectSinger"
    />
    <router-view v-slot="{ Component }">
      <transition appear name="slide">
        <component :is="Component" :data="selectedSinger" />
      </transition>
    </router-view>
  </div>
</template>
<script>
import indexList from '@/components/index-list/index-list'
import { getSingerList } from '@/service/singer'
import { SINGER_KEY } from '@/assets/js/constant.js'
import storage from 'good-storage'
export default {
  name: 'singer',
  components: {
    indexList
  },
  async created() {
    const result = await getSingerList()
    this.singers = result.singers
  },
  data() {
    return {
      singers: [],
      selectedSinger: null
    }
  },
  methods: {
    selectSinger(singer) {
      this.selectedSinger = singer
      this.cacheSinger(singer)
      this.$router.push({
        path: `/singer/${singer.mid}`
      })
    },
    cacheSinger(singer) {
      storage.session.set(SINGER_KEY, singer)
    }
  }
}
</script>
<style lang="scss" scoped>
  .singer {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
  }
</style>
