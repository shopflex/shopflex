<template>
  <div class="home__category">
    home category
    {{ id }}
  </div>
</template>

<script>
import { isNumber } from '~/shared/utils'
export default {
  name: 'HomeCategory',
  layout: 'public',
  validate({ params }) {
    const id = params.id
    return isNumber(id)
  },
  data() {
    const {
      params: { id },
      query,
    } = this.$route
    return {
      id,
      query,
    }
  },
}
</script>

<style lang="scss" scoped></style>
