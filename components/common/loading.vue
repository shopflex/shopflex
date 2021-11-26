<template>
  <div
    class="
      loading
      absolute
      flex
      justify-center
      items-center
      z-offcanvas
      bg-white
      opacity-50
      top-0
      bottom-0
      left-0
      right-0
    "
    :style="{ display: isLoading ? 'flex' : 'none' }"
  >
    <div
      style="border-top-color: transparent"
      class="
        w-8
        h-8
        border-4 border-theme-primary border-dashed
        rounded-full
        animate-spin
      "
    ></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { COMMON_MODULE_NAME } from '~/store/common'
export default {
  name: 'Loading',
  computed: {
    ...mapGetters(COMMON_MODULE_NAME, ['isLoading']),
  },
}
</script>

<style lang="scss" scoped></style>
