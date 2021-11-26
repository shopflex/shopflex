<template>
  <section class="detail">
    <div class="header-controller flex justify-between items-center">
      <kbd class="kbd">◀︎</kbd>
      <span>TODO</span>
      <kbd class="kbd">▶︎</kbd>
    </div>
    <section class="product-detail">product detail</section>
    <section class="product-description">description</section>
  </section>
</template>

<script>
export default {
  name: 'Detail',
  layout: 'public',
  // TODO(rushui 2021-11-26): 参数校验
  validate() {
    return true
  },
}
</script>

<style lang="scss" scoped></style>
