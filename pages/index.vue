<template>
  <section class="home">
    home
    {{ user }}
  </section>
</template>

<script>
export default {
  name: 'Home',
  layout: 'public',
  async asyncData({ $axios }) {
    const data = await 'user'
    return {
      user: data,
    }
  },
}
</script>

<style lang="scss" scoped></style>
