<template>
  <div class="logo cursor-pointer" @click="onClick">
    <img :src="src" alt="logo" />
  </div>
</template>

<script>
import { navigateToOrigin } from '~/shared/utils'
export default {
  name: 'Logo',
  props: {
    src: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      default: navigateToOrigin,
    },
  },
}
</script>

<style lang="scss" scoped></style>
