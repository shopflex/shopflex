import {
  BASE_URL,
  DEFAULT_TIMEOUT,
  ERR_CODE_UNAUTHORIZED,
  TOKEN_HEAD,
} from '~/config'
import { isVoid } from '~/shared/utils'
import { USER_MODULE_NAME } from '~/store/user'

/**
 * @param {import('~/types').Context} param0
 */
export default function ({ $axios, redirect, route, store }) {
  $axios.defaults.baseURL = BASE_URL
  $axios.defaults.timeout = DEFAULT_TIMEOUT
  $axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
  $axios.defaults.transformRequest = (data) => JSON.stringify(data)

  $axios.onRequest((config) => {
    // Getting token from store is better than from $cookie
    const token = store.state[USER_MODULE_NAME].token
    if (!isVoid(token)) {
      config.headers.Authorization = `${TOKEN_HEAD}${token}`
    }

    return config
  })

  $axios.onResponse((res) => {
    const status = res.status
    if (status === 401 || res.data.code === ERR_CODE_UNAUTHORIZED) {
      redirect('/auth')
    }
    return res.data
  })

  // $axios.onError(() => {})
}
