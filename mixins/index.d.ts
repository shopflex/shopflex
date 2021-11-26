declare interface useLoadingOptions {
  timeout?: number
  isIdle?: string
  isSuccess?: string
  isLoading?: string
  isError?: string
  setByPromise?: string
  setLoading?: string
}
declare function useLoading(options: useLoadingOptions): Vue.ComponentOptions
