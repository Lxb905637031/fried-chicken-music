<template>
  <div>
    <m-header />
    <tab />
    <router-view :style="viewStyle" v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <router-view
      :style="viewStyle"
      name="user"
      v-slot="{ Component }"
    >
      <transition appear name="slide">
        <keep-alive>
          <component :is="Component"/>
        </keep-alive>
      </transition>
    </router-view>
    <player />
  </div>
</template>
<script>
import header from '@/components/header/header'
import tab from '@/components/tab/tab'
import player from '@/components/player/player'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    mHeader: header,
    tab,
    player
  },
  computed: {
    ...mapState([
      'playlist'
    ]),
    viewStyle() {
      const bottom = this.playlist.length ? '60px' : '0'
      return {
        bottom
      }
    }
  }
}
</script>
