<template>
  <section class="home h-full relative">
    <template v-if="hasProduct">
      <div class="search -mt-4">
        <div class="card shadow">
          <div class="card-body">
            <label
              class="
                flex
                pl-4
                pr-8
                items-center
                w-full
                border-gray-200 border-1 border-solid
                rounded-full
              "
            >
              <span class="icon mr-2 bg-white iconfont icon-search" />
              <input
                v-model.lazy.trim="keyword"
                type="text"
                placeholder="Search products"
                class="flex-1 border-none outline-none bg-white"
              />
            </label>
          </div>
        </div>
      </div>

      <div
        v-if="tags.length"
        class="tags flex justify-start gap-2 mt-8"
        @click="handleTagBtnsClick"
      >
        <button
          v-for="(tag, index) in tags"
          :key="index"
          :data-index="index"
          class="bg-lightgray btn-sm rounded-full py-3 px-5"
          :class="
            currentActiveTagIndex === index ? 'bg-primary text-white' : ''
          "
        >
          {{ tag }}
        </button>
      </div>

      <div class="product-list mt-8 grid gap-6 grid-cols-4 flex-wrap">
        <product-card
          v-for="(product, index) in list"
          :key="product.id"
          :product="product"
          :index="index"
          :cate-id="id"
        >
        </product-card>
      </div>
    </template>

    <template v-else>
      <div class="empty-product flex-center h-full flex-col">
        <span class="icon iconfont icon-empty text-lightgray" />
        <p class="mt-8">We are adding products now. Please wait.</p>
      </div>
    </template>

    <el-pagination
      v-if="hasProduct"
      class="m-8 text-center"
      :page-size="pageSize"
      :page-count="10"
      layout="prev, pager, next"
      :total="total"
      @current-change="handlePageChange"
    >
    </el-pagination>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { clear, isDef, isNotVoid, isUnDef, isVoid } from '~/shared/utils'
import { FETCH_PRODUCT_LIST } from '~/request/product'
import { SPECIAL_CATEGORY_ID } from '~/config'
import ProductCard from '~/components/content/product-card.vue'
import { categoryList, CATEGORY_PAGE_SIZE } from '~/config/app-config'
import { A_SET_STAT, COMMON_MODULE_NAME } from '~/store/common'
import { EventBus, MAIN_EL_SCROLL } from '~/shared'

export default {
  name: 'Home',
  components: {
    ProductCard,
  },
  layout: 'public',
  validate() {
    // TODO(rushui 2021-11-26): 检验参数
    return true
  },
  async asyncData({ $axios, store, query, params }) {
    const { status, newStatus } = query
    const { id } = params
    const pageNum = 1
    const pageSize = CATEGORY_PAGE_SIZE
    let total = 0
    let list = []
    try {
      const res = await $axios[FETCH_PRODUCT_LIST](
        clear({
          pageNum,
          pageSize,
          productCategoryId: id,
          status,
          newStatus,
        })
      )
      total = res.total
      list = res.list
    } catch (e) {
      if (process.env.NODE_ENV !== 'production')
        // eslint-disable-next-line no-console
        console.warn('fetch category data error: ', e.message)
    }
    return {
      total,
      list,
      pageNum,
      pageSize,
    }
  },

  data() {
    return {
      pageNum: 1,
      currentActiveTagIndex: -1,
      keyword: '',
      total: 0,
      list: [],
      pageSize: CATEGORY_PAGE_SIZE,
    }
  },
  computed: {
    ...mapGetters(COMMON_MODULE_NAME, ['isLoading']),
    id() {
      const id = this.$route.query.id
      return isVoid(id) ? SPECIAL_CATEGORY_ID : Number(id)
    },
    status() {
      return isNotVoid(this.$route.query.status)
        ? Number(this.$route.query.status)
        : this.id === SPECIAL_CATEGORY_ID
        ? 2
        : undefined
    },
    tags() {
      let category
      if (this.id !== SPECIAL_CATEGORY_ID) {
        category = categoryList.find((c) => c.id === this.id)
      } else {
        const name = Number(this.status) === 2 ? 'Hot' : 'New'
        category = categoryList.find((c) => c.id === this.id && c.name === name)
      }
      return isDef(category) ? category.tags : []
    },
    hasProduct() {
      return isDef(this.list) && this.list.length !== 0
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
    keyword() {
      this.getProduct()
    },
  },
  mounted() {
    if (!this.hasProduct) {
      this.getProduct()
    }
  },
  methods: {
    ...mapActions(COMMON_MODULE_NAME, [A_SET_STAT]),
    getProduct() {
      const res = this.$axios[FETCH_PRODUCT_LIST](
        clear({
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          productCategoryId: this.id,
          status: this.status,
          newStatus: this.newStatus,
          keyword: this.keyword,
        })
      )

      this[A_SET_STAT](res)
        .then((data) => {
          const { total, list } = data
          this.total = total
          this.list = list
          EventBus.$emit(MAIN_EL_SCROLL, { x: 0, y: 0 })
        })
        .catch((e) => {
          this.$message('Request was aborted! It may be a network traffic jam!')
          if (process.env.NODE_ENV !== 'production')
            // eslint-disable-next-line no-console
            console.error('Get product: ', e)
        })
    },
    handleTagBtnsClick(e) {
      /**
       * @type { HTMLButtonElement }
       */
      const target = e.target
      if (target.tagName.toUpperCase() !== 'BUTTON') {
        return
      }

      let index = target.getAttribute('data-index')
      index = isNotVoid(index) ? Number(index) : -1
      if (this.currentActiveTagIndex === index) {
        this.currentActiveTagIndex = -1
        this.keyword = ''
        return
      }

      this.currentActiveTagIndex = index
      this.keyword = this.tags[index]
    },
    handlePageChange(newPageNum) {
      this.pageNum = newPageNum
      this.getProduct()
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  font-size: 20px;
  &.icon-empty {
    font-size: 100px;
  }
}
</style>
