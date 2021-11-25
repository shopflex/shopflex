// global data

const M_SET_IS_LOADING = 'm-set-is-loading'

export const COMMON_MODULE_NAME = 'common'
export const COMMON_M_SET_IS_LOADING = `${COMMON_MODULE_NAME}/${M_SET_IS_LOADING}`

export const state = () => {
  return {
    isLoading: false,
  }
}

export const mutations = {
  [M_SET_IS_LOADING](state, isLoading) {
    state.isLoading = isLoading
  },
}
