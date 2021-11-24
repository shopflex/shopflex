import { BASE_URL, DEFAULT_TIMEOUT } from '@/config'

/**
 * @param {{$axios: import('@nuxtjs/axios').NuxtAxiosInstance}} param0
 */
export default function ({ $axios, redirect, route, store, $cookies }) {
  $axios.defaults.baseURL = BASE_URL
  $axios.defaults.timeout = DEFAULT_TIMEOUT
  $axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
  $axios.defaults.transformRequest = (data) => JSON.stringify(data)

  $axios.onRequest((config) => {
    // const method = (config.method || '').toLowerCase()
    // if (['post'].includes(method)) {
    //   config.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
    //   config.transformRequest = (data) => JSON.stringify(data)
    // }

    return config
  })

  $axios.onResponse((res) => {
    return res.data
  })

  // $axios.onError(() => {})
}
