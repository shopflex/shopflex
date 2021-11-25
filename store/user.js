import { isDef, isVoid } from '~/shared/utils'

const M_SET_USER = 'm-set-user'
const M_SET_TOKEN = 'm-set-token'
const A_SET_USER = 'a-set-user'

export const USER_MODULE_NAME = 'user'
export const USER_M_SET_USER = `${USER_MODULE_NAME}/${M_SET_USER}`
export const USER_M_SET_TOKEN = `${USER_MODULE_NAME}/${M_SET_TOKEN}`
export const USER_A_SET_USER = `${USER_MODULE_NAME}/${A_SET_USER}`

/**
 * @returns { { user: Partial<import('~/types').User> | null, token: string | undefined }}
 */
export const state = () => ({
  token: undefined,
  // user: {
  //   id: undefined,
  //   username: '',
  //   password: '',
  //   channel: '',
  //   email: '',
  //   nickName: '',
  //   regionCode: '',
  //   myCode: '',
  //   platform: '',
  // },
  user: null,
})

export const mutations = {
  /**
   * @param {*} state
   * @param { User } user
   */
  [M_SET_USER](state, user) {
    state.user = user
  },
  [M_SET_TOKEN](state, token) {
    state.token = token
  },
}

// export const actions = {}
export const getters = {
  isLogin(state) {
    return isDef(state.user) && !isVoid(state.user.id)
  },
}
