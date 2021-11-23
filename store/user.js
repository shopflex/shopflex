import { isVoid } from '~/shared/utils'
export const USER_MODULE_NAME = 'user'
export const M_SET_USER = 'm-set-user'
export const A_SET_USER = 'a-set-user'
/**
 * @returns { { user: Partial<User> }}
 */
export const state = () => ({
  user: {
    id: undefined,
    username: '',
    password: '',
    channel: '',
    email: '',
    nickName: '',
    myCode: '',
    loginTime: '',
  },
})

export const mutations = {
  /**
   * @param {*} state
   * @param { User } user
   */
  [M_SET_USER](state, user) {
    state.user = user
  },
}

export const actions = {
  // async [A_SET_USER](store, token) {
  //   if (isVoid(token)) return
  //   await ''
  //   console.log(store)
  // }
}
