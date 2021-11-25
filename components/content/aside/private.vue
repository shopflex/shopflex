<template>
  <div class="aside-private mb-6 border-b-1 border-solid border-lightgray">
    <ul class="private-list bg-white">
      <!-- Use name + id as a key because there is a category with the same id. -->
      <li class="category-item w-full px-2">
        <nuxt-link
          active-class="active"
          class="
            link
            flex
            items-center
            w-full
            h-11
            pl-6
            text-sm
            leading-11
            text-gray-700
            font-medium
          "
          to="/my-products"
          ><span class="icon iconfont icon-products mr-1" />My Products
        </nuxt-link>
      </li>

      <li class="category-item w-full px-2">
        <h3
          class="
            title
            flex
            items-center
            h-11
            pl-6
            text-gray-700
            font-medium
            cursor-pointer
          "
          :class="isOrderActive ? 'active' : ''"
          @click="handleOrderClick"
        >
          <span class="icon iconfont icon-order mr-1" />Order
        </h3>
        <ul class="order-list">
          <!-- Use name + id as a key because there is a category with the same id. -->
          <li class="order-item w-full px-2">
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
              to="/pay-pending"
              >Pay Pending</nuxt-link
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
              to="/awaiting-shipment"
              >Awaiting Shipment</nuxt-link
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
              to="/shipped"
              >shipped</nuxt-link
            >
          </li>
        </ul>
      </li>

      <li class="category-item w-full px-2">
        <nuxt-link
          active-class="active"
          class="
            link
            flex
            items-center
            w-full
            h-11
            pl-6
            text-sm
            leading-11
            text-gray-700
            font-medium
          "
          to="/settings"
          ><span class="icon iconfont icon-settings mr-1" />Settings
        </nuxt-link>
      </li>
      <li class="category-item w-full px-2">
        <nuxt-link
          active-class="active"
          class="
            link
            flex
            items-center
            w-full
            h-11
            pl-6
            text-sm
            leading-11
            text-gray-700
            font-medium
          "
          to="/policy"
          ><span class="icon icon-fix iconfont icon-policy mr-1" />Policy
        </nuxt-link>
      </li>
      <li class="category-item w-full px-2">
        <nuxt-link
          active-class="active"
          class="
            link
            flex
            items-center
            w-full
            h-11
            pl-6
            text-sm
            leading-11
            text-gray-700
            font-medium
          "
          to="/how"
          ><span class="icon icon-fix iconfont icon-how mr-1" />How to use
          FashionExpress
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AsidePrivate',
  computed: {
    isOrderActive() {
      return ['/pay-pending', '/awaiting-shipment', '/shipped'].includes(
        this.$route.path
      )
    },
  },
  methods: {
    handleOrderClick() {
      const path = this.$route.path
      if (path !== '/pay-pending') this.$router.push('/pay-pending')
    },
  },
}
</script>

<style lang="scss" scoped>
.active {
  color: var(--color-primary) !important;
}

.icon {
  font-size: 26px;
}

.icon-fix {
  font-size: 22px !important;
}
</style>
