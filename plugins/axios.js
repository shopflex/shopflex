import {
  BASE_URL,
  DEFAULT_TIMEOUT,
  TOKEN_HEAD,
  ERR_CODE_UNAUTHORIZED,
} from '~/config'
import { isVoid, isAuthPath } from '~/shared/utils'
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
    if (
      (status === 401 || res.data.code === ERR_CODE_UNAUTHORIZED) &&
      !isAuthPath(route.path)
    ) {
      redirect('/auth')
    }
    return res.data
  })

  // $axios.onError(() => {})
}
