const MODULE_NAME = 'USER'

export const FETCHER_USER_KEY = `${MODULE_NAME}-FETCH-USER`

export const fetchUser = (context, a, b) => {
  console.log('fetch user: ', context)
  console.log('fetch user: ', a, b)
}

/**
 * @type {import("~/types").ApiModule}
 */
export default [
  {
    key: FETCHER_USER_KEY,
    fetcher: fetchUser,
  },
]
