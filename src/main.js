import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入toast插件
import toast from 'components/common/toast'
//导入fastclick解决移动端延迟
import FastClick from 'fastclick'
//导入vue-lazyload
import LazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() //在原型上创建事件总线

Vue.use(toast) //安装封装的toast插件
FastClick.attach(document.body) //解决移动端300ms延迟
Vue.use(LazyLoad, {
    loading: require('./assets/img/common/placeholder.gif')
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')