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
export default {
  name: 'Loading',
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    start() {
      this.isLoading = true
    },
    finish() {
      this.isLoading = false
    },
  },
}
</script>

<style lang="scss" scoped></style>
