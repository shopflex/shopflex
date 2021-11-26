<template>
  <div class="product-card card shadow-sm bg-white cursor-pointer">
    <figure class="product-img relative">
      <div class="mask">
        <div class="wrapper w-full h-full flex-center">
          <button class="btn btn-sm btn-primary" @click="handleAddBtnClick">
            Add to My Products
          </button>
        </div>
      </div>

      <template v-if="isLazy">
        <img v-lazy="product.pic" class="w-full h-96" />
      </template>
      <template v-else>
        <img class="w-full h-96" :src="product.pic" />
      </template>
    </figure>
    <section class="card-body p-4" @click="handleToDetail">
      <div :data-tip="product.name" class="tooltip tooltip-primary z-offcanvas">
        <h3 class="card-title ellipsis">{{ product.name }}</h3>
      </div>
      <div class="price">
        <p class="cost flex-between-center leading-6">
          <span>Product Cost</span>
          <em class="number text-theme-primary">${{ product.cost }}</em>
        </p>
        <p class="price flex-between-center leading-6">
          <span>Suggested Resale Price</span>
          <em class="number">${{ product.price }}</em>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { USER_MODULE_NAME } from '~/store/user'

export default {
  name: 'Card',
  props: {
    product: {
      type: Object,
      required: true,
    },
    isLazy: {
      type: Boolean,
      default: true,
    },
    index: {
      type: Number,
      required: true,
    },
    cateId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters(USER_MODULE_NAME, ['isLogin']),
  },
  methods: {
    handleAddBtnClick() {
      if (!this.isLogin) {
        this.$router.push({
          name: 'auth',
          query: {
            from: this.$route.path,
          },
        })
        return
      }
      // TODO(rushui 2021-11-26): logic
      console.log('handleAddBtnClick', this.product)
    },
    handleToDetail() {
      this.$router.push({
        name: 'details-id',
        params: {
          id: this.product.id,
        },
        query: {
          index: this.index,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.product-img:hover .mask {
  display: block;
}
</style>
