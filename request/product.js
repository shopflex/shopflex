import { stringify } from 'qs'
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

export const MODULE_NAME = 'PRODUCT'
export const FETCH_PRODUCT_LIST = `${MODULE_NAME}-FETCH-PRODUCT-LIST`
export const FETCH_UPDATE_PRODUCT_STATUS = `${MODULE_NAME}-FETCH-UPDATE-PRODUCT-STATUS`

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
 * @param {{disStatus: 0 | 1, ids: number | number[]}} data
 * @returns
 */
export const fetchUpdateProductStatus = ({ $axios }, data) => {
  const query = stringify(data)
  return $axios
    .post(
      `/distributor/product/update/disStatus${query ? '?' + query : ''}`,
      null
    )
    .then((res) => {
      const { code, message, data } = res
      if (code !== ERR_CODE_OK) throw new Error(message)
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
  {
    key: FETCH_UPDATE_PRODUCT_STATUS,
    fetcher: fetchUpdateProductStatus,
  },
]
