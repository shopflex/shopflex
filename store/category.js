// import { CATEGORY_PAGE_SIZE } from '~/config'

// export const M_SET_TOTAL = 'm-set-total'
// export const M_SET_PAGE_NUM = 'm-set-page-num'
// export const M_SET_LIST = 'm-set-list'
// export const A_SET_CATEGORY = 'a-set-category'

// export const CATEGORY_MODULE_NAME = 'category'
// export const CATEGORY_M_SET_TOTAL = `${CATEGORY_MODULE_NAME}/${M_SET_TOTAL}`
// export const CATEGORY_M_SET_PAGE_NUM = `${CATEGORY_MODULE_NAME}/${M_SET_PAGE_NUM}`
// export const CATEGORY_M_SET_LIST = `${CATEGORY_MODULE_NAME}/${M_SET_LIST}`
// export const CATEGORY_A_SET_CATEGORY = `${CATEGORY_MODULE_NAME}/${A_SET_CATEGORY}`

// export const state = () => {
//   return {
//     list: [],
//     pageNum: 1,
//     pageSize: CATEGORY_PAGE_SIZE,
//     total: undefined,
//   }
// }

// export const mutations = {
//   [M_SET_TOTAL](state, total) {
//     state.total = total
//   },
//   [M_SET_PAGE_NUM](state, pageNum) {
//     state.pageNum = pageNum
//   },
//   [M_SET_LIST](state, list) {
//     state.list = list
//   },
// }

// export const actions = {
//   /**
//    * @param { import('~/types').FetchProductListRes } category
//    */
//   async [A_SET_CATEGORY]({ commit }, category) {
//     const { pageNum, list, total } = await category
//     commit(M_SET_LIST, list)
//     commit(M_SET_PAGE_NUM, pageNum)
//     commit(M_SET_TOTAL, total)
//   },
// }
