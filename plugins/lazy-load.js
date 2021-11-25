// TODO(rushui 2021-11-24): load from CDN
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import loadingImage from '~/assets/img/loading-pending.png'
const errorImage = loadingImage

// see also: https://github.com/hilongjw/vue-lazyload
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorImage,
  loading: loadingImage,
  attempt: 1,
  observer: true, // use IntersectionObserver
  listenEvents: ['scroll'],
})
