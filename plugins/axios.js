import { BASE_URL, DEFAULT_TIMEOUT, TOKEN_HEAD } from '@/config'
import { isVoid } from '~/shared/utils'
import { USER_MODULE_NAME } from '~/store/user'

/**
 * @param {import('~/types').Context} param0
 */
export default function ({ $axios, redirect, route, store, $cookies }) {
  $axios.defaults.baseURL = BASE_URL
  $axios.defaults.timeout = DEFAULT_TIMEOUT
  $axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
  $axios.defaults.transformRequest = (data) => JSON.stringify(data)

  $axios.onRequest((config) => {
    const token = store.state[USER_MODULE_NAME].token
    if (!isVoid(token)) {
      config.headers.Authorization = `${TOKEN_HEAD}${token}`
    }

    return config
  })

  $axios.onResponse((res) => {
    return res.data
  })

  // $axios.onError(() => {})
}
