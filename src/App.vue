<template>
  <div>
    <m-header />
    <tab />
    <router-view />
  </div>
</template>
<script>
import header from '@/components/header/header'
import tab from '@/components/tab/tab'
export default {
  name: 'App',
  components: {
    mHeader: header,
    tab
  }
}
</script>
