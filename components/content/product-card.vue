<template>
  <card class="product-card" :class="isImported ? '' : 'cursor-pointer'">
    <figure
      class="product-img relative"
      :class="isImported ? 'cursor-not-allowed' : ''"
    >
      <div class="mask">
        <div class="wrapper w-full h-full flex-center">
          <button
            class="btn relative btn-sm btn-primary"
            :class="{
              'btn-disabled': isImported,
              loading: isLoading,
            }"
            @click="handleAddBtnClick"
          >
            {{ btnContent }}
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
  </card>
</template>

<script>
import { mapGetters } from 'vuex'
import Card from '~/components/common/card.vue'
import { DEFAULT_DURATION, PRODUCT_DIS_STATUS_ADD } from '~/config'
import { FETCH_UPDATE_PRODUCT_STATUS } from '~/request/product'
import { USER_MODULE_NAME } from '~/store/user'

export default {
  name: 'ProductCard',
  components: {
    Card,
  },
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
  data() {
    return {
      isImported: false,
      isLoading: false,
    }
  },
  computed: {
    ...mapGetters(USER_MODULE_NAME, ['isLogin']),
    btnContent() {
      return this.isImported ? 'Successfully Added' : 'Add to My Products'
    },
  },
  methods: {
    handleAddBtnClick() {
      if (this.isImported) {
        return
      }
      if (!this.isLogin) {
        this.$router.push({
          name: 'auth',
          query: {
            from: this.$route.path,
          },
        })
        return
      }

      this.isLoading = true
      this.$axios[FETCH_UPDATE_PRODUCT_STATUS]({
        disStatus: PRODUCT_DIS_STATUS_ADD,
        ids: this.product.id,
      })
        .then(() => {
          this.isImported = true
          this.$message({
            type: 'success',
            duration: DEFAULT_DURATION,
            message: 'Successfully!',
          })
        })
        .catch((e) => {
          this.isImported = false
          this.$message({
            type: 'error',
            duration: DEFAULT_DURATION,
            message: 'Fail!',
          })
          if (process.env.NODE_ENV !== 'production') {
            // eslint-disable-next-line no-console
            console.error(e)
          }
        })
        .finally(() => {
          this.isLoading = false
        })
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
