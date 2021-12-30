<template>
  <div>
    <m-header />
    <tab />
    <router-view />
    <player />
  </div>
</template>
<script>
import header from '@/components/header/header'
import tab from '@/components/tab/tab'
import player from '@/components/player/player'
export default {
  name: 'App',
  components: {
    mHeader: header,
    tab,
    player
  }
}
</script>
