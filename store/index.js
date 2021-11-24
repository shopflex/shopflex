import { USER_M_SET_TOKEN, USER_M_SET_USER } from './user'
import { isDef, isVoid } from '~/shared/utils'

export const actions = {
  nuxtServerInit(store, { app: { $cookies } }) {
    const user = $cookies.get('user')
    const token = $cookies.get('token')
    if (isDef(user)) {
      store.commit(USER_M_SET_USER, user)
    }
    if (!isVoid(token)) {
      store.commit(USER_M_SET_TOKEN, token)
    }
  },
}
