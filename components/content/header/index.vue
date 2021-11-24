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
    <div class="left flex-shrink-0">
      <logo :src="logoSrc" class="w-52" />
    </div>

    <section class="mid flex-1 whitespace-nowrap overflow-hidden ml-24 mr-12">
      <h3 class="title text-xl font-semibold">Women Fashion Dropshipping.</h3>
      <!-- TODO(rushui 2021-11-23): disable enter new line when spacing lack -->
      <p class="description overflow-hidden text-gray-text">
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
import { mapState } from 'vuex'
import logo from '~/components/common/logo.vue'
import logoSrc from '~/assets/icon/fashion-express-logo.png'
import {
  USER_MODULE_NAME,
  USER_M_SET_TOKEN,
  USER_M_SET_USER,
} from '~/store/user'
import { isDef, isVoid } from '~/shared/utils'
import { DEFAULT_DURATION } from '~/config'

export default {
  name: 'MHeader',
  components: { logo },
  data() {
    return {
      logoSrc,
      isShopifyShow: true,
    }
  },
  computed: {
    // use the first char of the username as the avatar
    ...mapState(USER_MODULE_NAME, ['user']),
    isLoggedIn() {
      return isDef(this.user) && !isVoid(this.user.id)
    },
    avatar() {
      return this.user.username.slice(0, 1)
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
    handleLogOutBtnClick() {
      this.$store.commit(USER_M_SET_USER, null)
      this.$store.commit(USER_M_SET_TOKEN, undefined)
      this.$cookies.remove('user')
      this.$cookies.remove('token')

      this.$message({
        message: 'Log out successfully!',
        type: 'success',
        duration: DEFAULT_DURATION,
      })
    },
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
