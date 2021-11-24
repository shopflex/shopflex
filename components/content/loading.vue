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
        border-4 border-current border-dashed
        rounded-full
        animate-spin
      "
    ></div>
  </div>
</template>

<script>
import { isDef, isUnDef } from '~/shared/utils'
export default {
  name: 'Loading',
  data() {
    return {
      isLoading: false,
      timer: undefined,
    }
  },
  beforeDestroy() {
    if (isDef(this.timer)) {
      clearTimeout(this.timer)
    }
  },
  methods: {
    start() {
      this.isLoading = true
      if (isUnDef(this.timer)) {
        // to avoid loading too long
        this.timer = setTimeout(() => {
          this.isLoading = false
          this.timer = undefined
        }, 10 * 1000)
      }
    },
    finish() {
      this.isLoading = false
    },
  },
}
</script>

<style lang="scss" scoped></style>
