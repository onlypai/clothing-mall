import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() //在原型上创建事件总线

Vue.use(toast) //安装封装的toast插件

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')