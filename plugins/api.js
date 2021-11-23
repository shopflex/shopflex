// 该插件的用途是将 request 中所有模块的请求注入到 $axios 实例上，
// 实现如下功能：
// 在每一个子模块中定义：fetcher 和 XXX_KEY
//     其中：fetcher = (context, ...args) => {}
//     注入后使用如下：$axios[XXX_KEY](...args)
//     在模块中的 fetcher 就可以使用 nuxt 提供的 context
import httpModules from '~/request'

/**
 * @param { import('~/types'.IContext) } context
 */
export default function (context) {
  const $axios = context.$axios

  httpModules.forEach((module) => {
    module.forEach((item) => {
      const { key, fetcher } = item
      $axios[key] = (...args) => fetcher(context, ...args)
    })
  })
}
