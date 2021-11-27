export interface useLoadingOptions {
  timeout?: number
  isIdle?: string
  isSuccess?: string
  isLoading?: string
  isError?: string
  setByPromise?: string
  setLoading?: string
}
export function useLoading(options: useLoadingOptions): Vue.ComponentOptions
