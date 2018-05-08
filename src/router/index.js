import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('@/pages/home/Home')), 'home')
const MyApp = r => require.ensure([], () => r(require('@/pages/myApp/MyApp')), 'home')
const New = r => require.ensure([], () => r(require('@/pages/new/New')), 'home')
const News = r => require.ensure([], () => r(require('@/pages/news/News')), 'home')
const Shop = r => require.ensure([], () => r(require('@/pages/shop/Shop')), 'home')

const Setting = r => require.ensure([], () => r(require('@/pages/setting/Setting')), 'home')
const SetSecurity = r => require.ensure([], () => r(require('@/pages/setting/SetSecurity')), 'setting')
const Share = r => require.ensure([], () => r(require('@/pages/setting/Share')), 'setting')
const Proposal = r => require.ensure([], () => r(require('@/pages/setting/Proposal')), 'setting')



const AppDetails = r => require.ensure([], () => r(require('@/pages/appDetails/AppDetails')), 'appDetails')
const Notice= r => require.ensure([], () => r(require('@/pages/Notice/Notice')), 'Notice')
const Article= r => require.ensure([], () => r(require('@/pages/article/Article')), 'Article')
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
        {
            path: '/proposal',
            name: 'proposal',
            component: Proposal
        },
        {
            path: '/setSecurity',
            name: 'setSecurity',
            component: SetSecurity
        },
        {
            path: '/share',
            name: 'share',
            component: Share
        },
        {
            path: '/appDetails',
            name: 'appDetails',
            component: AppDetails
        },
        {
            path: '/notice',
            name: 'notice',
            component: Notice
        },
        {
            path: '/article',
            name: 'article',
            component: Article
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
    ]
})
