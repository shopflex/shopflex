<template>
  <main
    ref="main-ref"
    class="m-main relative px-pd h-full overflow-x-hidden overflow-y-scroll"
  >
    <Nuxt />
  </main>
</template>

<script>
import { EventBus, MAIN_EL_SCROLL } from '~/shared'

export default {
  name: 'MMain',
  mounted() {
    EventBus.$on(MAIN_EL_SCROLL, this.handleScroll)
  },
  beforeDestroy() {
    EventBus.$off(MAIN_EL_SCROLL)
  },
  methods: {
    handleScroll({ x, y }) {
      const mainEl = this.$refs['main-ref']
      mainEl.scrollTo(x, y)
    },
  },
}
</script>

<style lang="scss" scoped></style>
