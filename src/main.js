// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import tool from './tool'
import api from './tool/api'

import polyfill from './tool/polyfill'
import ES6Promise from 'es6-promise'
/************移动端************/
import vueTouch from './tool/vue-touch'


//全局组件
import BackTitle from './components/BackTitle'
Vue.component('back-title', BackTitle)

/* eslint-disable*/
Vue.config.productionTip = false



/**********************************兼容Promise*********************************/
polyfill();
ES6Promise.polyfill();




/**********************************为移动端设置*********************************/
/*     绑定点击效果       */
document.body.addEventListener('touchstart', function () {});

/*  设置REM(100PX=>1REM) */
;(function () {
	var docEl = document.documentElement;
	var resize = 'orientationchange' in window ? 'orientationchange' : 'resize';
	var setRem = function () {
		var screenWidth = docEl.clientWidth || window.screen.width || 360;
		var screenHeight = docEl.clientHeight || window.screen.Height || 360;
		var remWidth = screenWidth<screenHeight ? screenWidth :screenHeight;
		store.commit("SET_STATE",{name:'window',content:{
			height:docEl.clientHeight || window.screen.height || 360,
			width:docEl.clientWidth || window.screen.width || 360
		}});
		docEl.style.fontSize = (100 * screenWidth / 750) + 'px';
	};
	window.addEventListener('resize', setRem, false);
	document.addEventListener('DOMContentLoaded', setRem, false);
	setRem();
})();
/**********************************路由守卫*********************************/

var docEl = document.documentElement;
router.beforeEach((to, from, next) => {
    //存放需显示底部导航的路由名
    const navigationShow=['home','myApp','setting','shop'];
    //白色背景路由
    const bodyBgc=['share'];
    store.commit('SET_STATE',{name:"navigation",content:navigationShow.includes(to.name)});
    if(bodyBgc.includes(to.name)){
        docEl.style.backgroundColor='#fff'
    }else{
        docEl.style.backgroundColor='#f4f4f4'
    }
    next();
})
/**********************************VUE创建*********************************/
Vue.prototype.$tool = tool
Vue.prototype.$api = api
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
