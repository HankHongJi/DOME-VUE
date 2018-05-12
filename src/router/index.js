import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('@/pages/home/Home')), 'home')
const MyApp = r => require.ensure([], () => r(require('@/pages/myApp/MyApp')), 'home')
const Mail = r => require.ensure([], () => r(require('@/pages/mail/Mail')), 'home')
const News = r => require.ensure([], () => r(require('@/pages/news/News')), 'home')
const Shop = r => require.ensure([], () => r(require('@/pages/shop/Shop')), 'home')
const MailList= r => require.ensure([], () => r(require('@/pages/mailList/MailList')), 'home')
const MailInfo= r => require.ensure([], () => r(require('@/pages/mailList/MailInfo')), 'MailInfo')

const Setting = r => require.ensure([], () => r(require('@/pages/setting/Setting')), 'home')
const SetSecurity = r => require.ensure([], () => r(require('@/pages/setting/SetSecurity')), 'setting')
const Share = r => require.ensure([], () => r(require('@/pages/setting/Share')), 'setting')
const Proposal = r => require.ensure([], () => r(require('@/pages/setting/Proposal')), 'setting')



const AppDetails = r => require.ensure([], () => r(require('@/pages/appDetails/AppDetails')), 'appDetails')
const Commenting = r => require.ensure([], () => r(require('@/pages/appDetails/Commenting')), 'commenting')
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
            path: '/mail',
            name: 'mail',
            component: Mail
        },
        {
            path: '/mailList',
            name: 'mailList',
            component: MailList
        },
        {
            path: '/mailInfo',
            name: 'mailInfo',
            component: MailInfo
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
            path: '/commenting',
            name: 'commenting',
            component: Commenting
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
