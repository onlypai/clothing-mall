import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() //在原型上创建事件总线

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')