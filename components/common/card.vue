<template>
  <div
    class="card shadow-sm bg-white transform transition-all"
    :class="hover ? 'hover:shadow' : ''"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    hover: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
