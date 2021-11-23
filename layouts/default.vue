<template>
  <div class="app flex flex-col">
    <m-header />
    <section class="flex-1 flex">
      <m-aside class="w-64" />
      <m-main class="flex-1" />
    </section>
    <m-footer />
  </div>
</template>

<script>
import MHeader from '@/components/content/m-header.vue'
import MFooter from '@/components/content/m-footer.vue'
import MMain from '@/components/content/m-main.vue'
import MAside from '@/components/content/m-aside.vue'
export default {
  name: 'DefaultLayout',
  components: {
    MHeader,
    MFooter,
    MMain,
    MAside,
  },
}
</script>

<style lang="scss" scoped>
.container {
  flex: 1;
}
</style>
