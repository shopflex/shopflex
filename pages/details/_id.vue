<template>
  <section class="detail mt-8">
    <div class="header-controller flex justify-between items-center">
      <icon-button class="el-icon-back" @click.native="handleChangeIndex(0)" />
      <span>TODO</span>
      <icon-button class="el-icon-right" @click.native="handleChangeIndex(1)" />
    </div>

    <card class="product-detail my-8 p-4 shadow" :hover="false">
      <div class="wrapper flex">
        <!-- <template> -->
        <div class="gallery w-2/5">
          <card>
            <img class="w-full h-96 bg-primary" src="" />
          </card>
        </div>

        <section class="product-dest flex-1">
          <h3 class="title"></h3>
          <p class="product-id">Product ID</p>
          <hr />

          <ul class="detail-list">
            <li class="detail-item">
              <span>Product Cost</span><em class="number">$111</em>
            </li>
            <li class="detail-item">
              <span>Suggested Resale Price</span><em class="number">$111</em>
            </li>
            <li class="detail-item">
              <span>Stock</span><em class="number">111</em><span>in stock</span>
            </li>
            <li class="detail-item">
              <span>color</span><em class="number">111</em><span>in stock</span>
            </li>
            <li class="detail-item">
              <span>size</span><em class="number">111</em><span>in stock</span>
            </li>
          </ul>
        </section>
      </div>
    </card>

    <card class="product-description shadow" :hover="false">description</card>
  </section>
</template>

<script>
import Card from '~/components/common/card.vue'
import IconButton from '~/components/common/icon-button.vue'
import { Common } from '~/assets/tailwind-class'
import { freeze } from '~/shared'

export default {
  name: 'Detail',
  components: {
    Card,
    IconButton,
  },
  layout: 'public',
  // TODO(rushui 2021-11-26): 参数校验
  validate() {
    return true
  },
  data() {
    return {
      commonClasses: freeze(Common),
    }
  },

  methods: {
    /**
     * @param { 0 | 1 } direction 0 - left, 1 - right
     */
    handleChangeIndex(direction) {
      console.log(direction)
    },
  },
}
</script>

<style lang="scss" scoped></style>
