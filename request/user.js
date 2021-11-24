import { ERR_CODE_OK, TOKEN_HEAD } from '~/config'
import { formatMessage, isVoid } from '~/shared/utils'

const MODULE_NAME = 'USER'

export const FETCH_AUTH = `${MODULE_NAME}-FETCH-AUTH`
export const FETCH_USER_BY_TOKEN = `${MODULE_NAME}-FETCH-USER-BY-TOKEN`

/**
 * @param { import ('~/types').Context } context
 * @param { import ('~/types').AuthForm } form
 * @returns { Promise<import('~/types').User> } user information
 */
export const fetchAuth = ({ $axios }, form) => {
  return $axios.post('/admin/merchant/login', form).then((value) => {
    const { code, data, message } = value
    if (code !== ERR_CODE_OK) throw new Error(formatMessage(message))
    return data
  })
}

/**
 * @param { import ('~/types').Context } param0
 * @param { import ('~/types').AuthForm } form
 * @returns { Promise<import('~/types').User> } user information
 */
export const fetchUserByToken = ({ $axios }, token) => {
  if (isVoid(token)) return Promise.reject(Error('Invalid token'))
  return $axios
    .get('/admin/0/new', {
      headers: {
        Authorization: `${TOKEN_HEAD}${token}`,
      },
    })
    .then((res) => {
      const { code, data } = res
      if (code !== ERR_CODE_OK) throw new Error(`Fail to get user information`)
      return data.admin
    })
}

/**
 * @type {import("~/types").ApiModule}
 */
export default [
  {
    key: FETCH_AUTH,
    fetcher: fetchAuth,
  },
  {
    key: FETCH_USER_BY_TOKEN,
    fetcher: fetchUserByToken,
  },
]
