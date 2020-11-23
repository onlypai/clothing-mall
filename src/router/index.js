import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('views/home/Home')
const Category = () =>
    import ('views/category/Category')
const Profile = () =>
    import ('views/profile/Profile')
const Cart = () =>
    import ('views/cart/Cart')

//安装插件
Vue.use(VueRouter)

//创建路由对象
const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    }, {
        path: '/category',
        component: Category
    }, {
        path: '/cart',
        component: Cart
    }, {
        path: '/profile',
        component: Profile
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router