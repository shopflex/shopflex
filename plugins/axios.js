import { BASE_URL, DEFAULT_TIMEOUT } from '@/config'

/**
 * @param {{$axios: import('@nuxtjs/axios').NuxtAxiosInstance}} param0
 */
export default function ({ $axios, redirect, route, store, $cookies }) {
  $axios.defaults.baseURL = BASE_URL
  $axios.defaults.timeout = DEFAULT_TIMEOUT

  $axios.onRequest((config) => {
    return config
  })

  $axios.onResponse((res) => {
    return res.data
  })

  // $axios.onError(() => {})
}
