<template>
  <section
    class="login w-full h-full flex flex-col justify-center items-center"
  >
    <h2 class="text-xl font-bold">{{ title }}</h2>

    <auth-form :is-login="isLogin" />

    <p v-if="isLogin">
      Don't have a Fashion Express account?
      <span
        class="link cursor-pointer"
        style="color: var(--color-link)"
        @click="handleClick"
        >Sign up now</span
      >
    </p>
    <p v-else>
      Already have an account?
      <span
        class="link cursor-pointer"
        style="color: var(--color-link)"
        @click="handleClick"
        >Log In</span
      >
    </p>
  </section>
</template>

<script>
import AuthForm from '~/components/content/auth-form.vue'
export default {
  name: 'Login',
  components: {
    AuthForm,
  },
  layout: 'blank',
  data() {
    return {
      isLogin: true,
    }
  },
  computed: {
    title() {
      return this.isLogin
        ? 'Log in to your Fashion Express'
        : 'Join Fashion Express free'
    },
  },
  methods: {
    handleClick() {
      this.isLogin = !this.isLogin
    },
  },
}
</script>

<style lang="scss" scoped></style>
