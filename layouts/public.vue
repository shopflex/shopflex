<template>
  <div class="app flex flex-col">
    <m-header class="h-16 flex-shrink-0" />
    <section class="flex-1 flex overflow-hidden">
      <m-aside class="w-64" />
      <m-main class="flex-1" />
    </section>
    <m-footer class="h-8 flex-shrink-0" />
  </div>
</template>

<script>
import MHeader from '@/components/content/header/index.vue'
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

<style lang="scss" scoped></style>
