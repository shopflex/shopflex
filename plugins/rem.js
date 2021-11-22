import Vue from 'vue'
import { debounce } from 'lodash'

function initMobile() {
  const userAgentInfo = navigator.userAgent
  const agents = ['Android', 'iPhone', 'iPad']
  let mobile = false
  for (let i = 0; i < agents.length; i++) {
    if (userAgentInfo.indexOf(agents[i]) > 0) {
      mobile = true
      break
    }
  }
  Vue.prototype._mobile = mobile
  if (mobile === true) {
    function resizeRem() {
      const docElement = document.documentElement
      const width = docElement.getBoundingClientRect().width
      const rem = width / 20
      docElement.style.fontSize = rem + 'px'
    }
    window.addEventListener('resize', () => {
      debounce(resizeRem)
    })
    window.addEventListener('pageshow', resizeRem)
  }
}
initMobile()
Vue.use(initMobile)
