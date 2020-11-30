import Vue from 'vue'
import Vuex from 'vuex'
import A_addCart from './module/A_addCart'

//安装插件
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        A_addCart,
    }
})