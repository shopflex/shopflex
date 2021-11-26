<template>
  <div
    class="
      aside-public
      pr-1
      mt-1
      border-t-1 border-solid border-lightgray
      bg-gray-100
    "
  >
    <div class="wrapper h-full bg-white pt-2">
      <h3
        class="title flex items-center pl-6 pb-2 font-medium cursor-default"
        :class="isCategoryActive ? 'text-current' : ''"
      >
        <span class="iconfont icon-label mr-1" />
        Categories
      </h3>
      <ul class="category-list">
        <!-- Use name + id as a key because there is a category with the same id. -->
        <li
          v-for="(item, index) in categoryList"
          :key="item.name + item.id"
          class="category-item w-full px-2 bg-white"
        >
          <!-- TODO(rushui 2021-11-25): 事件代理 -->
          <span
            :class="
              currentActiveIndex === index &&
              ($route.path === '/' || $route.path.includes('home'))
                ? 'active bg-gray-200'
                : ''
            "
            class="
              block
              w-full
              h-11
              pl-12
              cursor-pointer
              text-sm
              leading-11
              text-gray-500
              font-medium
            "
            @click="handlePathChange(index)"
            >{{ item.name }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { categoryList, SPECIAL_CATEGORY_ID } from '~/config/app-config'
import { freeze } from '~/shared/utils'

export default {
  name: 'AsidePublic',
  props: {
    isLogin: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      categoryList: freeze(categoryList),
      currentActiveIndex: 0,
    }
  },
  computed: {
    isCategoryActive() {
      return this.$route.path.includes('/home') || this.$route.path === '/'
    },
  },
  methods: {
    getDestination(item) {
      const res = {
        name: 'home',
        query: {
          id: item.id,
        },
      }

      if (item.id !== SPECIAL_CATEGORY_ID) {
        return res
      }

      // status and newStatus is a flag
      if (item.name === 'Hot') {
        res.query.status = 2
      } else {
        res.query.newStatus = 1
      }

      return res
    },
    handlePathChange(index) {
      const id = this.categoryList[index].id
      const query = {
        id,
      }
      if (id === SPECIAL_CATEGORY_ID) {
        const name = this.categoryList[index].name
        if (name === 'Hot') {
          query.status = 2
        } else if (name === 'New') {
          query.status = 1
        }
      }
      this.$router.push({
        name: 'home',
        query,
      })
      this.currentActiveIndex = index
    },
  },
}
</script>

<style lang="scss" scoped>
.icon-label {
  font-size: 28px;
}

.active {
  color: var(--color-primary) !important;
}
</style>
