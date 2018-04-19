import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('@/pages/home/Home')), 'home')
const Account = r => require.ensure([], () => r(require('@/pages/account/Account')), 'home')
const Clause = r => require.ensure([], () => r(require('@/pages/clause/Clause')), 'home')
const Report = r => require.ensure([], () => r(require('@/pages/report/Report')), 'home')
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/account',
            name: 'account',
            component: Account
        },
        {
            path: '/clause',
            name: 'clause',
            component: Clause
        },
        {
            path: '/report',
            name: 'report',
            component: Report
        },
    ]
})
