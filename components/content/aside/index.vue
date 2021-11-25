<template>
  <aside class="m-aside flex flex-col overflow-hidden">
    <aside-private
      v-if="isLogin"
      class="flex-shrink-0 border-r-1 border-solid border-lightgray"
    />
    <aside-public
      :is-login="isLogin"
      class="flex-1 border-r-1 border-solid border-lightgray overflow-y-scroll"
    />
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
import AsidePrivate from './private.vue'
import AsidePublic from './public.vue'
import { USER_MODULE_NAME } from '~/store/user'

export default {
  name: 'MAside',
  components: {
    AsidePrivate,
    AsidePublic,
  },
  computed: {
    ...mapGetters(USER_MODULE_NAME, ['isLogin']),
  },
}
</script>

<style lang="scss" scoped></style>
