<template>
  <section class="detail mt-8">
    <div class="header-controller flex justify-between items-center">
      <span
        class="
          el-icon-back
          cursor-pointer
          py-2
          px-4
          border border-solid border-gray-400
          rounded-sm
        "
        @click="handleChangeIndex(1)"
      />

      <span>TODO</span>
      <span
        class="el-icon-right cursor-pointer"
        @click="handleChangeIndex(1)"
      />
    </div>

    <card class="product-detail shadow my-8" :hover="false"> aaa </card>

    <card class="product-description shadow" :hover="false">description</card>
  </section>
</template>

<script>
import card from '~/components/common/card.vue'

export default {
  name: 'Detail',
  components: {
    card,
  },
  layout: 'public',
  // TODO(rushui 2021-11-26): 参数校验
  validate() {
    return true
  },

  methods: {
    /**
     * @param { 0 | 1 } direction 0 - left, 1 - right
     */
    handleChangeIndex(direction) {},
  },
}
</script>

<style lang="scss" scoped></style>
