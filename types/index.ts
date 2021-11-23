import type { NuxtAxiosInstance } from '@nuxtjs/axios'

interface MAxios extends NuxtAxiosInstance {
  // eg: fetchUser = (context) => {}
  [key: string]: any | ((context: Context) => void)
}

declare interface Context {
  app: any
  store: any
  route: any
  params: any
  query: any
  env: any
  isDev: boolean
  isHMR: boolean
  redirect: Function
  error: any
  $config: any
  $cookie: any
  $axios: MAxios
}

declare interface User {
  age: number
  balance: number
  bindStatus: number
  channel: string
  createTime: string
  currencyCode: string
  currentEarning: string
  diamond: number
  email: string
  expectEarning: string
  firstName: string
  freezeMoney: number
  gender: string
  icon: string
  id: number
  lastName: string
  loginTime: string
  myCode: string
  nickName: string
  note: string
  occupation: string
  password: string
  phone: string
  platform: string
  platformStatus: number
  refCode: string
  regionCode: string
  shopName: string
  socialMediaType: string
  status: number
  tags: string
  totalCommission: number
  username: string
  whatsappNumber: string
  withdrawMoney: number
}

export type Fetcher = (context: Context, ...args: any[]) => void
export type ApiModule = { key: string; fetcher: Fetcher }[]
export type RequestList = ApiModule[]
