<template>
  <section
    class="login w-full h-full flex flex-col justify-center items-center"
  >
    <loading :is-loading="isLoading" />
    <h2 class="text-3xl font-bold mb-20">{{ title }}</h2>

    <!-- <auth-form :is-login="isLogin" /> -->
    <el-form ref="authForm" :model="authForm" :rules="rules">
      <el-form-item prop="username" class="w-96">
        <el-input
          v-model="authForm.username"
          class="custom-input"
          placeholder="Username"
        />
      </el-form-item>
      <el-form-item v-if="!isLogin" prop="email" class="w-96">
        <el-input
          v-model="authForm.email"
          class="custom-input"
          placeholder="Email"
        />
      </el-form-item>
      <el-form-item prop="password" class="w-96 h-10">
        <!-- Press Enter to submit the form, in line with the user's normal behavior -->
        <el-input
          v-model="authForm.password"
          class="custom-input"
          placeholder="Password"
          type="password"
        />
      </el-form-item>
      <el-form-item class="w-96 mt-8">
        <el-button
          class="w-full primary-button"
          style="padding: 0.75rem 0; font-size: 1.25rem; font-weight: 550"
          @click="submitForm('authForm')"
          >{{ isLogin ? 'Login' : 'Join Fashion Express' }}</el-button
        >
      </el-form-item>
    </el-form>

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
import Loading from '~/components/common/loading.vue'
import {
  DEFAULT_DURATION,
  DEFAULT_CHANNEL,
  DEFAULT_PLATFORM,
  NEW_STATUS_SING_IN,
} from '~/config'
import { FETCH_AUTH, FETCH_USER_BY_TOKEN } from '~/request/user'
import {
  STAT_LOADING,
  STAT_IDLE,
  STAT_ERROR,
  STAT_SUCCESS,
} from '~/shared/status'
import { isDef, isEmail, isVoid, pick } from '~/shared/utils'
import {
  USER_MODULE_NAME,
  USER_M_SET_TOKEN,
  USER_M_SET_USER,
} from '~/store/user'

export default {
  name: 'Login',
  components: {
    Loading,
  },
  layout: 'blank',
  // TODO(rushui 2021-11-24): redirect when user have login
  middleware({ store, query, redirect }) {
    const user = store.state[USER_MODULE_NAME].user
    const from = query.from || '/'
    if (isDef(user) && !isVoid(user.id)) {
      redirect(from)
    }
  },
  asyncData({ query }) {
    const { name: shopName = '', channel, bindOld = false, platform } = query
    return {
      shopName,
      channel,
      bindOld, // true: have an account already, to login.
      newStatus: bindOld ? undefined : NEW_STATUS_SING_IN,
      platform,
    }
  },
  data() {
    const emailValidator = (rule, value, callback) => {
      if (isEmail(value)) {
        callback()
        return
      }
      callback(new Error('Please enter the correct email format.'))
    }
    return {
      listener: null,
      isLogin: true,
      authForm: {
        username: '',
        password: '',
        email: '',
      },
      rules: {
        username: [
          {
            required: true,
            message: 'Please enter your username',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: 'Please enter your password',
            trigger: 'blur',
          },
          {
            min: 6,
            message: 'Password must be at least 6 characters.',
            trigger: 'blur',
          },
        ],
        email: [
          {
            require: true,
            message: 'Please enter your email',
            trigger: 'blur',
          },
          {
            validator: emailValidator,
            trigger: 'blur',
          },
        ],
      },
      stat: STAT_IDLE,
    }
  },
  computed: {
    title() {
      return this.isLogin
        ? 'Log in to your Fashion Express'
        : 'Join Fashion Express free'
    },
    from() {
      return this.$route.query.from || '/'
    },
    isLoading() {
      return this.stat === STAT_LOADING
    },
  },

  mounted() {
    this.listener = window.addEventListener('keydown', (e) => {
      if (e.key.toUpperCase() !== 'ENTER') {
        return
      }
      this.submitForm('authForm')
    })
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.listener)
  },

  methods: {
    submitForm(formName) {
      const form = this.$refs[formName]
      form.validate((valid) => {
        if (valid) {
          this.handleSubmit()
        } else {
          this.$message({
            message: 'Please fill in the correct information.',
            type: 'warning',
            duration: DEFAULT_DURATION,
          })
          return false
        }
      })
    },

    getFormData() {
      const res = {
        username: this.authForm.username,
        password: this.authForm.password,
        // fixation temporarily
        channel: DEFAULT_CHANNEL,
        platform: DEFAULT_PLATFORM,
        shopName: this.shopName,
      }

      if (!this.isLogin) {
        res.newStatus = this.newStatus
        res.email = this.authForm.email
      }
      return res
    },

    handleClick() {
      const form = this.$refs['authForm']
      this.isLogin = !this.isLogin
      form.clearValidate()
      form.resetFields()
    },
    // eslint-disable-next-line require-await
    async handleSubmit() {
      const axios = this.$axios
      this.stat = STAT_LOADING
      const formData = this.getFormData()
      let token
      try {
        const tokenData = await axios[FETCH_AUTH](formData)
        token = tokenData.token

        this.stat = STAT_SUCCESS
        this.$message({
          message: this.isLogin
            ? 'Login successfully!'
            : 'Sign in successfully!',
          duration: DEFAULT_DURATION,
          type: 'success',
        })
        this.$router.replace(this.from)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('auth: ', e)
        this.$message({
          // TODO(rushui 2021-11-24): to fix message ?
          message: e.message,
          duration: DEFAULT_DURATION,
          type: 'error',
        })
        this.stat = STAT_ERROR
      }

      if (!isVoid(token)) {
        this.$cookies.set('token', token)
        const user = await axios[FETCH_USER_BY_TOKEN](token)
        this.$cookies.set(
          'user',
          pick(user, [
            'id',
            'username',
            'channel',
            'platform',
            'email',
            'regionCode',
            'myCode',
          ])
        )

        this.$store.commit(USER_M_SET_TOKEN, token)
        this.$store.commit(USER_M_SET_USER, user)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
