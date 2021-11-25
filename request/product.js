import { ERR_CODE_OK } from '~/config'

const transformParams = (params) => {
  const { status, ...res } = params
  if (status === 1) {
    res.newStatus = 1
  } else {
    res.status = 2
  }
  return res
}

const MODULE_NAME = 'PRODUCT'

export const FETCH_PRODUCT_LIST = `${MODULE_NAME}-FETCH-PRODUCT-LIST`

/**
 * @param { import ('~/types').Context } context
 * @param { import ('~/types').FetchProductParams } form
 * @returns { import('~/types').FetchProductListRes }
 */
export const fetchProductList = ({ $axios }, params) => {
  params = transformParams(params)
  return $axios
    .get('/distributor/product/list', {
      params,
    })
    .then((res) => {
      const { data, code, message } = res
      if (code !== ERR_CODE_OK) {
        throw new Error(message)
      }
      return data
    })
}

/**
 * @type {import("~/types").ApiModule}
 */
export default [
  {
    key: FETCH_PRODUCT_LIST,
    fetcher: fetchProductList,
  },
]
