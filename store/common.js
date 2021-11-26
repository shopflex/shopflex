// global data
import { DEFAULT_TIMEOUT } from '~/config'
import { isDef } from '~/shared'
import {
  STAT_ERROR,
  STAT_IDLE,
  STAT_LOADING,
  STAT_SUCCESS,
} from '~/shared/status'

// const M_SET_IS_LOADING = 'm-set-is-loading'
export const M_SET_STAT = 'm-set-stat'
export const M_SET_STAT_IDLE = 'm-set-stat-idle'
export const M_SET_STAT_LOADING = 'm-set-stat-loading'
export const M_SET_STAT_SUCCESS = 'm-set-stat-success'
export const M_SET_STAT_ERROR = 'm-set-stat-error'

export const A_SET_STAT = 'a-set-stat'

export const COMMON_MODULE_NAME = 'common'
export const COMMON_M_SET_STAT = `${COMMON_MODULE_NAME}/${M_SET_STAT}`
export const COMMON_M_SET_STAT_IDLE = `${COMMON_MODULE_NAME}/${M_SET_STAT_IDLE}`
export const COMMON_M_SET_STAT_LOADING = `${COMMON_MODULE_NAME}/${M_SET_STAT_LOADING}`
export const COMMON_M_SET_STAT_SUCCESS = `${COMMON_MODULE_NAME}/${M_SET_STAT_SUCCESS}`
export const COMMON_M_SET_STAT_ERROR = `${COMMON_MODULE_NAME}/${M_SET_STAT_ERROR}`

export const COMMON_A_SET_STAT = `${COMMON_MODULE_NAME}/${A_SET_STAT}`

export const state = () => {
  return {
    stat: STAT_IDLE,
  }
}

export const mutations = {
  [M_SET_STAT](state, stat) {
    state.stat = stat
  },
  [M_SET_STAT_IDLE](state) {
    state.stat = STAT_IDLE
  },
  [M_SET_STAT_LOADING](state) {
    state.stat = STAT_LOADING
  },
  [M_SET_STAT_SUCCESS](state) {
    state.stat = STAT_SUCCESS
  },
  [M_SET_STAT_ERROR](state) {
    state.stat = STAT_ERROR
  },
}

export const actions = {
  [A_SET_STAT]({ commit }, promise) {
    let timer = setTimeout(() => {
      commit(M_SET_STAT_IDLE)
      timer = undefined
    }, DEFAULT_TIMEOUT)

    commit(M_SET_STAT_LOADING)
    return promise
      .then((res) => {
        commit(M_SET_STAT_SUCCESS)
        return res
      })
      .catch((e) => {
        commit(M_SET_STAT_ERROR)
        throw e
      })
      .finally(() => {
        if (isDef(timer)) {
          clearTimeout(timer)
          timer = undefined
        }
      })
  },
}

export const getters = {
  isIdle(state) {
    return state.stat === STAT_IDLE
  },
  isError(state) {
    return state.stat === STAT_ERROR
  },
  isLoading(state) {
    return state.stat === STAT_LOADING
  },
  isSuccess(state) {
    return state.stat === STAT_SUCCESS
  },
}
