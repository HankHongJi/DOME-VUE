import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('@/pages/home/Home')), 'home')
const MyApp = r => require.ensure([], () => r(require('@/pages/myApp/MyApp')), 'home')
const New = r => require.ensure([], () => r(require('@/pages/new/New')), 'home')
const Shop = r => require.ensure([], () => r(require('@/pages/shop/Shop')), 'home')
const Setting = r => require.ensure([], () => r(require('@/pages/setting/Setting')), 'home')
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            redirect:'/home'
        },
        {
            path: '/new',
            name: 'new',
            component: New
        },
        {
            path: '/myApp',
            name: 'myApp',
            component: MyApp
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop
        },
        {
            path: '/setting',
            name: 'setting',
            component: Setting
        },
    ]
})
