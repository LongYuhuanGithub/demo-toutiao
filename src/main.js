import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入 Vant 组件库
import Vant from 'vant'
// import 'vant/lib/index.css'
// 定制主题第一步：为了能够覆盖默认的 less 变量，这里一定要把 .css 后缀名改为 .less
import 'vant/lib/index.less'

// 安装 Vant 组件库
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
