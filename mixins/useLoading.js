import {
  isDef,
  STAT_IDLE,
  STAT_LOADING,
  STAT_ERROR,
  STAT_SUCCESS,
} from '~/shared'

export const DEFAULT_TIMEOUT = 5000
export const DEFAULT_IS_IDLE = 'isIdle'
export const DEFAULT_IS_LOADING = 'isLoading'
export const DEFAULT_IS_SUCCESS = 'isSuccess'
export const DEFAULT_IS_ERROR = 'isError'
export const DEFAULT_SET_LOADING = 'setLoading'
export const DEFAULT_SET_LOADING_BY_PROMISE = 'setLoadingByPromise'

let id = 1

const DEFAULT_OPTIONS = {
  timeout: DEFAULT_TIMEOUT,
  isIdle: DEFAULT_IS_IDLE,
  isLoading: DEFAULT_IS_LOADING,
  isSuccess: DEFAULT_IS_SUCCESS,
  isError: DEFAULT_IS_ERROR,
  setLoading: DEFAULT_SET_LOADING,
  setLoadingByPromise: DEFAULT_SET_LOADING_BY_PROMISE,
}

/**
 * Create mixin function.
 * Usage: const instance = new Vue({ mixins: [useLoading(options)] })
 * @default {timeout=5000}
 * @default {isIdle='isIdle'}
 * @default {isLoading='isLoading'}
 * @default {isSuccess='isSuccess'}
 * @default {isError='isError'}
 * @default {setByLoadingPromise='setLoadingByPromise'}
 * @default {setLoading='setLoading'}
 * @returns { Vue.ComponentOptions }
 */
export const useLoading = (options) => {
  const {
    timeout,
    isLoading,
    isError,
    isIdle,
    isSuccess,
    setLoadingByPromise,
    setLoading,
  } = {
    ...DEFAULT_OPTIONS,
    options,
  }

  const stat = `@@useLoading-stat-${id++}`

  return {
    data() {
      return {
        [stat]: STAT_IDLE,
      }
    },
    computed: {
      [isIdle]() {
        return this[stat] === STAT_IDLE
      },
      [isLoading]() {
        return this[stat] === STAT_LOADING
      },
      [isSuccess]() {
        return this[stat] === STAT_SUCCESS
      },
      [isError]() {
        return this[stat] === STAT_ERROR
      },
    },
    methods: {
      [setLoadingByPromise](promise) {
        if (!(promise instanceof Promise)) {
          return promise
        }

        let timer = setTimeout(() => {
          this[stat] = STAT_IDLE
          timer = undefined
        }, timeout)

        this[stat] = STAT_LOADING
        promise
          .then((res) => {
            this[stat] = STAT_SUCCESS
            return res
          })
          .catch((e) => {
            this[stat] = STAT_ERROR
            throw e
          })
          .finally(() => {
            if (isDef) {
              clearTimeout(timer)
              timer = undefined
            }
          })

        return promise
      },
      [setLoading](isLoading = false) {
        this[stat] = isLoading ? STAT_LOADING : STAT_IDLE
      },
    },
  }
}
