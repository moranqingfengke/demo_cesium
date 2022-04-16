import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 如果vue.config.js中不配置别名，使用下面的方式按路径引入
const cesium = require('cesium/Build/Cesium/Cesium.js')
const widgets = require('cesium/Build/Cesium/Widgets/widgets.css')

Vue.prototype.cesium = cesium
Vue.prototype.widgets = widgets

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
