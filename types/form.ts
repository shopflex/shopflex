export interface AuthForm {
  username: string
  password: string
  channel?: string
  email?: string // required when sign in.
  newStatus?: number // 1: register, 2: login
  platform?: string
  platformStatus?: 0
  shopName?: string
}
