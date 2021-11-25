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
    <div class="wrapper bg-white pt-2">
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
          v-for="item of categoryList"
          :key="item.name + item.id"
          class="category-item w-full px-2"
        >
          <nuxt-link
            active-class="active bg-gray-200"
            class="
              link
              block
              w-full
              h-11
              pl-12
              text-sm
              leading-11
              text-gray-500
              font-medium
            "
            :to="getDestination(item)"
            >{{ item.name }}</nuxt-link
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
    }
  },
  computed: {
    isCategoryActive() {
      return this.$route.path.includes('/home')
    },
  },
  methods: {
    getDestination(item) {
      const res = {
        name: 'home-id',
        params: {
          id: item.id,
        },
      }
      if (item.id !== SPECIAL_CATEGORY_ID) {
        return res
      }

      if (item.name === 'Hot') {
        res.query = {
          status: 2,
        }
      } else {
        res.query = {
          newStatus: 1,
        }
      }

      return res
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
