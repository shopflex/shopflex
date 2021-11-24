import { ERR_CODE_OK } from '~/config'
import { formatMessage } from '~/shared/utils'

const MODULE_NAME = 'USER'

export const FETCH_USER = `${MODULE_NAME}-FETCH-USER`

/**
 * @param { import ('~/types').Context } param0
 * @param { import ('~/types').AuthForm } form
 */
export const fetchUser = ({ $axios }, form) =>
  $axios.post('/admin/merchant/login', form).then((value) => {
    const { code, data, message } = value
    if (code !== ERR_CODE_OK) throw new Error(formatMessage(message))
    return data
  })

/**
 * @type {import("~/types").ApiModule}
 */
export default [
  {
    key: FETCH_USER,
    fetcher: fetchUser,
  },
]
