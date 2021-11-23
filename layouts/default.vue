<template>
  <div class="app flex flex-col">
    <m-header class="h-18 flex-shrink-0" />
    <section class="flex-1 flex overflow-hidden">
      <Nuxt />
    </section>
    <m-footer class="h-8 flex-shrink-0" />
  </div>
</template>

<script>
import MHeader from '@/components/content/header/index.vue'
import MFooter from '@/components/content/m-footer.vue'
export default {
  name: 'DefaultLayout',
  components: {
    MHeader,
    MFooter,
  },
}
</script>

<style lang="scss" scoped></style>
