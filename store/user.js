const M_SET_USER = 'm-set-user'
const M_SET_TOKEN = 'm-set-token'
const A_SET_USER = 'a-set-user'

export const USER_MODULE_NAME = 'user'
export const USER_M_SET_USER = `${USER_MODULE_NAME}/${M_SET_USER}`
export const USER_M_SET_TOKEN = `${USER_MODULE_NAME}/${M_SET_TOKEN}`
export const USER_A_SET_USER = `${USER_MODULE_NAME}/${A_SET_USER}`
/**
 * @returns { { user: Partial<User> }}
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

export const actions = {
  // /**
  //  * @param {import('~/types').Store} store
  //  * @param {string} token
  //  * @returns
  //  */
  // async [A_SET_USER](store, token) {
  //   const { $axios, $cookies, commit } = store
  //   if (isVoid(token)) return
  //   debugger
  //   try {
  //     const res = await $axios[FETCH_USER_BY_TOKEN](token)
  //     console.log(res)
  //     $cookies.remove('token')
  //     $cookies.set('token', token)
  //     commit(M_SET_TOKEN, token)
  //   } catch (e) {
  //     commit(M_SET_TOKEN, '')
  //     if (process.env.NODE_ENV !== 'production') console.log(e)
  //   }
  // },
}
