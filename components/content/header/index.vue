<template>
  <header
    class="
      m-header
      flex
      justify-between
      items-center
      px-pd
      border-b-2 border-solid border-1 border-lightgray
      z-fixed
    "
  >
    <div class="left flex-shrink-0 w-2/12">
      <logo :src="logoSrc" class="w-full" />
    </div>

    <section class="mid flex-1 ml-24 mr-12">
      <h3 class="title text-xl font-mediumplus">Women Fashion Dropshipping.</h3>
      <!-- TODO(rushui 2021-11-23): disable enter new line when spacing lack -->
      <p class="description overflow-hidden text-gray-150">
        Fast & Free Shipping for order above $200. Flat Shipping rate of $9.99
        for all order under $200.
      </p>
    </section>

    <div class="right h-full flex items-center flex-shrink-0">
      <div
        v-if="isLoggedIn"
        class="user h-full flex-1 flex justify-center items-center"
      >
        <div class="user-info h-full flex-1 flex justify-center items-center">
          <!-- user the first char of the username as the avatar -->
          <span
            class="
              avatar
              w-8
              h-8
              text-center
              leading-8
              bg-current
              text-white
              rounded-full
              select-none
            "
            >{{ avatar }}</span
          >
          <span class="profile cursor-pointer mx-2 text-sm font-semibold">{{
            user.name
          }}</span>
        </div>
        <el-button
          class="log-in-btn"
          size="medium"
          @click="handleLogOutBtnClick"
        >
          Log Out
        </el-button>
      </div>

      <div v-else class="login flex-1 text-right">
        <el-button
          class="log-in-btn"
          size="medium"
          @click="handleLogInBtnClick"
        >
          Log In
        </el-button>
      </div>

      <el-button
        v-if="isShopifyShow"
        class="shopify-btn"
        size="medium"
        style="background: var(--color-primary); color: white"
        @click="handleShopifyBtnClick"
        >Start free on shopify</el-button
      >
    </div>
  </header>
</template>

<script>
import logo from '~/components/common/logo.vue'
import logoSrc from '~/assets/icon/fashion-express-logo.png'
export default {
  name: 'MHeader',
  components: { logo },
  data() {
    return {
      logoSrc,
      isLoggedIn: false,
      isShopifyShow: true,
      // TODO(rushui 2021-11-23): user should come from vuex
      user: {
        name: 'admin',
      },
    }
  },
  computed: {
    // use the first char of the username as the avatar
    avatar() {
      return this.user.name.slice(0, 1)
    },
  },
  methods: {
    handleShopifyBtnClick() {},
    handleLogInBtnClick() {
      if (this.isLoggedIn) {
        return
      }
      // TODO(rushui 2021-11-23): other logic
      this.$router.push({
        path: '/auth',
        query: {
          from: this.$route.path,
        },
      })
    },
    handleLogOutBtnClick() {},
  },
}
</script>

<style lang="scss" scoped>
.el-button.log-in-btn,
.el-button.shopify-btn {
  border-radius: $size-1-5;
}

.el-button.shopify-btn {
  margin-left: $size-2;
}
</style>
