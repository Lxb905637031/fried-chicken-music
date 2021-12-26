<template>
  <div
    class="singer"
    v-loading="!singers.length"
  >
    <index-list
      :data="singers"
    />
  </div>
</template>
<script>
import indexList from '@/components/index-list/index-list'
import { getSingerList } from '@/service/singer'
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
      singers: []
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
