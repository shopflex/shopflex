<template>
  <section class="home px-pd bg-gray-50">
    <div class="search">
      <!-- {{ $route.params.id }} -->
      search
    </div>
    <div class="tags">tags</div>

    <div class="product-list grid gap-6 grid-cols-4 flex-wrap">
      <product-card
        v-for="(product, index) in list"
        :key="product.id"
        :product="product"
        :index="index"
        :cate-id="id"
      >
      </product-card>
    </div>

    <div class="pagination">pagination</div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { clear, isNotVoid, isUnDef, isVoid } from '~/shared/utils'
import { FETCH_PRODUCT_LIST } from '~/request/product'
import { CATEGORY_A_SET_CATEGORY, CATEGORY_MODULE_NAME } from '~/store/category'
import { SPECIAL_CATEGORY_ID } from '~/config'
import ProductCard from '~/components/content/product-card.vue'

export default {
  name: 'Home',
  components: {
    ProductCard,
  },
  layout: 'public',

  data() {
    return {}
  },

  async fetch({ $axios, store, query, params }) {
    const { status, newStatus } = query
    const { id } = params
    const { pageNum, pageSize } = store.state[CATEGORY_MODULE_NAME]
    try {
      store.dispatch(
        CATEGORY_A_SET_CATEGORY,
        await $axios[FETCH_PRODUCT_LIST](
          clear({
            pageNum,
            pageSize,
            productCategoryId: id,
            status,
            newStatus,
          })
        )
      )
    } catch (e) {
      if (process.env.NODE_ENV !== 'production')
        // eslint-disable-next-line no-console
        console.warn('fetch category data error: ', e.message)
    }
  },
  computed: {
    ...mapState(CATEGORY_MODULE_NAME, ['list', 'pageNum', 'pageSize', 'total']),
    id() {
      const id = this.$route.query.id
      return isVoid(id) ? SPECIAL_CATEGORY_ID : id
    },
    status() {
      return isNotVoid(this.$route.query.status)
        ? this.$route.query.status
        : this.id === SPECIAL_CATEGORY_ID
        ? 2
        : undefined
    },
  },
  watch: {
    // TODO(rushui 2021-11-25): promise cache
    id() {
      this.getProduct()
    },
    status() {
      if (isVoid(this.status)) {
        return
      }
      this.getProduct()
    },
  },
  mounted() {
    if (isUnDef(this.list) || this.list.length === 0) {
      this.getProduct()
    }
  },
  methods: {
    getProduct() {
      // eslint-disable-next-line no-unreachable
      this.$store.dispatch(
        CATEGORY_A_SET_CATEGORY,
        this.$axios[FETCH_PRODUCT_LIST](
          clear({
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            productCategoryId: this.id,
            status: this.status,
            newStatus: this.newStatus,
          })
        )
      )
    },
  },
}
</script>

<style lang="scss" scoped></style>
