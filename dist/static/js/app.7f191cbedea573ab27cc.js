webpackJsonp([8],{"6KTq":function(t,n){},MOnw:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),o=e("Dd8w"),a=e.n(o),c=(e("qXie"),{render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navigation"},[e("div",{staticClass:"catalog",attrs:{flex:"box:mean"}},[e("router-link",{key:"1",attrs:{to:"/mail"}},[t._v("消息")]),t._v(" "),e("router-link",{key:"2",attrs:{to:"/myApp"}},[t._v("我的应用")]),t._v(" "),e("router-link",{key:"3",attrs:{to:"/home"}},[t._v("首页")]),t._v(" "),e("router-link",{key:"4",attrs:{to:"/shop"}},[t._v("应用商店")]),t._v(" "),e("router-link",{key:"5",attrs:{to:"/setting"}},[t._v("设置")])],1)])},staticRenderFns:[]});var r=e("VU/8")({name:"navigation",data:function(){return{activeClass:""}},methods:{},watch:{$route:function(){"/"==this.$route.path?this.activeClass="router-link-active":this.activeClass=""}}},c,!1,function(t){e("MOnw")},"data-v-15c2aab0",null).exports,s={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"loading",on:{touchmove:function(t){t.preventDefault()}}},[n("div",{staticClass:"backg"}),this._v(" "),n("div",{staticClass:"loader loader-4"})])},staticRenderFns:[]};var u=e("VU/8")({name:"loading"},s,!1,function(t){e("kGpq")},"data-v-99f981de",null).exports,l=e("NYxO"),h={name:"msgalert",data:function(){return{icon:"icon-complete",icons:{success:"icon-complete",warn:"icon-jinggao",error:"icon-404cuowu",news:"icon-sysInfo-copy"}}},computed:a()({},Object(l.b)(["alert"]))},d={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"alert-box"},t._l(t.alert,function(n,i){return e("transition",{key:i,attrs:{name:"fade",mode:"out-in",appear:""}},[n.show?e("div",{staticClass:"msgalert",attrs:{flex:"box:justify"}},[e("span",{staticClass:"icon",class:n.type?t.icons[n.type]:"icon-complete"}),t._v(" "),e("div",[t._v(t._s(n.text))]),t._v(" "),e("span",{staticClass:"icon icon-cha close",on:{click:function(t){n.show=!1}}})]):t._e()])}))},staticRenderFns:[]};var f=e("VU/8")(h,d,!1,function(t){e("bXh6")},"data-v-bcadabe8",null).exports,p={name:"confirm",data:function(){return{show:!0}},methods:{execute:function(t){var n=this;this.show=!1,setTimeout(function(){n.$tool.SET_STATE({name:"confirm",content:null}),t&&t()},300)}},computed:a()({},Object(l.b)(["confirm"])),watch:{confirm:function(){this.confirm&&(this.show=!0)}}},m={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.confirm?e("div",{staticClass:"confirm",on:{touchmove:function(t){t.preventDefault()}}},[e("div",{staticClass:"mask"}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"effect",class:{enter:t.show,leave:!t.show}},[e("h2",[t._v(t._s(t.confirm.title||"温馨提示"))]),t._v(" "),e("div",{staticClass:"text",domProps:{innerHTML:t._s(t.confirm.text||"请确认")}}),t._v(" "),e("div",{staticClass:"btns",attrs:{flex:"box:mean"}},[e("div",{staticClass:"btn_confirm",on:{click:function(n){t.execute(t.confirm.okFun)}}},[t._v(t._s(t.confirm.okName||"确定"))]),t._v(" "),t.confirm.noFun?e("div",{staticClass:"btn_confirm",on:{click:function(n){t.execute(t.confirm.noFun)}}},[t._v(t._s(t.confirm.noName||"取消"))]):t._e()])])])]):t._e()},staticRenderFns:[]};var v={name:"App",data:function(){return{}},components:{Navigation:r,Loading:u,Alert:f,Confirm:e("VU/8")(p,m,!1,function(t){e("ni3I")},"data-v-8629ff48",null).exports,BackTop:e("sU8K").a},computed:a()({},Object(l.b)(["loading","navigation"])),watch:{$route:function(){window.scrollTo(0,0)}}},g={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[e("router-view",{staticClass:"app_content",style:{marginBottom:t.navigation?"70px":"0"}})],1),t._v(" "),t.navigation?e("navigation"):t._e(),t._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[t.loading?e("loading"):t._e()],1),t._v(" "),e("alert"),t._v(" "),e("confirm"),t._v(" "),t.navigation?t._e():e("back-top")],1)},staticRenderFns:[]};var b=e("VU/8")(v,g,!1,function(t){e("qJWw")},null,null).exports,w=e("bOdI"),_=e.n(w),T=e("mvHQ"),y=e.n(T),k={};Array.prototype.remove=function(t){for(var n=0;n<this.length;)this[n]==t?this.splice(n,1):n++},Number.prototype.toPercent=function(){return(Math.round(1e4*this)/100).toFixed(2)+"%"},Date.prototype.format=function(t){var n={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var e in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),n)if(new RegExp("("+e+")").test(t))return t=t.replace(RegExp.$1,1==RegExp.$1.length?n[e]:("00"+n[e]).substr((""+n[e]).length))},k.arrayBufferToBase64=function(t){for(var n="",e=new Uint8Array(t),i=e.byteLength,o=0;o<i;o++)n+=String.fromCharCode(e[o]);return"data:image/png;base64,"+window.btoa(n)},k.SET_STATE=function(t){S.commit("SET_STATE",t)},k.ALERT=function(t){S.commit("ALERT",t)},k.CONFIRM=function(t){S.commit("CONFIRM",t)},k.setStore=function(t,n){sessionStorage.setItem(t,y()(n))},k.getStore=function(t){return JSON.parse(sessionStorage.getItem(t))};var E,C=k,x=(E={},_()(E,"SET_STATE",function(t,n){var e=n.name,i=n.content,o=n.sub;o?t[e][o]=i:t[e]=i}),_()(E,"ALERT",function(t,n){n.show=!0,t.alert.push(n),setTimeout(function(){t.alert.remove(n)},2e3)}),_()(E,"CONFIRM",function(t,n){t.confirm?t.confirm&&n.important&&(t.confirm=null,setTimeout(function(){t.confirm=n},200)):t.confirm=n}),_()(E,"REGISTER",function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.mask=n}),_()(E,"LOGOUT",function(t,n){}),E);i.a.use(l.a);var S=new l.a.Store({state:{loading:!1,alert:[],confirm:null,navigation:!0},getters:{},actions:{},mutations:x}),M=e("/ocq");i.a.use(M.a);var L=new M.a({mode:"history",routes:[{path:"/",name:"index",redirect:"/home"},{path:"/mail",name:"mail",component:function(t){return e.e(0).then(function(){return t(e("BgHL"))}.bind(null,e)).catch(e.oe)}},{path:"/mailList",name:"mailList",component:function(t){return e.e(0).then(function(){return t(e("yjI/"))}.bind(null,e)).catch(e.oe)}},{path:"/mailInfo",name:"mailInfo",component:function(t){return e.e(3).then(function(){return t(e("RXyJ"))}.bind(null,e)).catch(e.oe)}},{path:"/myApp",name:"myApp",component:function(t){return e.e(0).then(function(){return t(e("VATo"))}.bind(null,e)).catch(e.oe)}},{path:"/home",name:"home",component:function(t){return e.e(0).then(function(){return t(e("wXUp"))}.bind(null,e)).catch(e.oe)}},{path:"/shop",name:"shop",component:function(t){return e.e(0).then(function(){return t(e("u+SN"))}.bind(null,e)).catch(e.oe)}},{path:"/setting",name:"setting",component:function(t){return e.e(0).then(function(){return t(e("rlSs"))}.bind(null,e)).catch(e.oe)}},{path:"/proposal",name:"proposal",component:function(t){return e.e(1).then(function(){return t(e("/XnL"))}.bind(null,e)).catch(e.oe)}},{path:"/setSecurity",name:"setSecurity",component:function(t){return e.e(1).then(function(){return t(e("2Q3m"))}.bind(null,e)).catch(e.oe)}},{path:"/share",name:"share",component:function(t){return e.e(1).then(function(){return t(e("qKW8"))}.bind(null,e)).catch(e.oe)}},{path:"/commenting",name:"commenting",component:function(t){return e.e(4).then(function(){return t(e("dJS7"))}.bind(null,e)).catch(e.oe)}},{path:"/appDetails",name:"appDetails",component:function(t){return e.e(2).then(function(){return t(e("1MT+"))}.bind(null,e)).catch(e.oe)}},{path:"/notice",name:"notice",component:function(t){return e.e(5).then(function(){return t(e("Pqcv"))}.bind(null,e)).catch(e.oe)}},{path:"/article",name:"article",component:function(t){return e.e(6).then(function(){return t(e("tLJp"))}.bind(null,e)).catch(e.oe)}},{path:"/news",name:"news",component:function(t){return e.e(0).then(function(){return t(e("vOV4"))}.bind(null,e)).catch(e.oe)}}]}),A=(e("6KTq"),{test:function(){alert("api测试")}}),R=A,O=e("hKoQ"),$=e.n(O),F=e("pFYg"),j=e.n(F);function B(t,n,e){var i=this;this.obj=t,this.binding=n,this.touchType=e,this.vueTouches={x:0,y:0},this.vueMoves=!0,this.vueLeave=!0,this.longTouch=!0,this.vueCallBack="object"==j()(n.value)?n.value.fn:n.value,this.obj.addEventListener("touchstart",function(t){i.start(t)},!1),this.obj.addEventListener("touchend",function(t){i.end(t)},!1),this.obj.addEventListener("touchmove",function(t){i.move(t)},!1)}B.prototype={start:function(t){this.vueMoves=!0,this.vueLeave=!0,this.longTouch=!0,this.vueTouches={x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY},this.time=setTimeout(function(){this.vueLeave&&this.vueMoves&&("longtap"==this.touchType&&this.vueCallBack(this.binding.value,t),this.longTouch=!1)}.bind(this),1e3)},end:function(t){var n=t.changedTouches[0].pageX-this.vueTouches.x,e=t.changedTouches[0].pageY-this.vueTouches.y;clearTimeout(this.time),Math.abs(n)>10||Math.abs(e)>100?("swipe"==this.touchType&&this.vueCallBack(this.binding.value,t),Math.abs(n)>Math.abs(e)?(n>10&&"swiperight"==this.touchType&&this.vueCallBack(this.binding.value,t),n<-10&&"swipeleft"==this.touchType&&this.vueCallBack(this.binding.value,t)):(e>10&&"swipedown"==this.touchType&&this.vueCallBack(this.binding.value,t),e<-10&&"swipeup"==this.touchType&&this.vueCallBack(this.binding.value,t))):this.longTouch&&this.vueMoves&&("tap"==this.touchType&&this.vueCallBack(this.binding.value,t),this.vueLeave=!1)},move:function(t){this.vueMoves=!1}},i.a.directive("tap",{bind:function(t,n){new B(t,n,"tap")}}),i.a.directive("swipe",{bind:function(t,n){new B(t,n,"swipe")}}),i.a.directive("swipeleft",{bind:function(t,n){new B(t,n,"swipeleft")}}),i.a.directive("swiperight",{bind:function(t,n){new B(t,n,"swiperight")}}),i.a.directive("swipedown",{bind:function(t,n){new B(t,n,"swipedown")}}),i.a.directive("swipeup",{bind:function(t,n){new B(t,n,"swipeup")}}),i.a.directive("longtap",{bind:function(t,n){new B(t,n,"longtap")}});var I={name:"back-title",data:function(){return{}},props:{back:String,title:String},methods:{},mounted:function(){}},q={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"back-title"},[e("div",{staticClass:"back",on:{click:function(n){t.back?t.$router.push({path:t.back}):t.$router.go(-1)}}}),t._v("\n    "+t._s(t.title)+"\n")])},staticRenderFns:[]};var N,U,H=e("VU/8")(I,q,!1,function(t){e("f5E+")},"data-v-134420fe",null).exports;i.a.component("back-title",H),i.a.config.productionTip=!1,String.prototype.includes||(String.prototype.includes=function(t,n){return"number"!=typeof n&&(n=0),!(n+t.length>this.length)&&-1!==this.indexOf(t,n)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,n){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),i=e.length>>>0;if(0===i)return!1;for(var o=0|n,a=Math.max(o>=0?o:i-Math.abs(o),0);a<i;){if(e[a]===t)return!0;a++}return!1}}),$.a.polyfill(),document.body.addEventListener("touchstart",function(){}),N=document.documentElement,window,U=function(){var t=N.clientWidth||window.screen.width||360;N.clientHeight||window.screen.Height;S.commit("SET_STATE",{name:"window",content:{height:N.clientHeight||window.screen.height||360,width:N.clientWidth||window.screen.width||360}}),N.style.fontSize=100*t/750+"px"},window.addEventListener("resize",U,!1),document.addEventListener("DOMContentLoaded",U,!1),U();var V=document.documentElement;L.beforeEach(function(t,n,e){S.commit("SET_STATE",{name:"navigation",content:["home","myApp","setting","shop","mail"].includes(t.name)}),["share"].includes(t.name)?V.style.backgroundColor="#fff":V.style.backgroundColor="#f4f4f4",e()}),i.a.prototype.$tool=C,i.a.prototype.$api=R,new i.a({el:"#app",router:L,store:S,components:{App:b},template:"<App/>"})},bXh6:function(t,n){},"f5E+":function(t,n){},kGpq:function(t,n){},ni3I:function(t,n){},qJWw:function(t,n){},qXie:function(t,n){},sU8K:function(t,n,e){"use strict";var i={name:"back-top",data:function(){return{scroll:0}},props:["scrollTop"],methods:{gotop:function(){document.body.scrollTop=document.documentElement.scrollTop=0}},created:function(){var t=this;window.addEventListener("scroll",function(){t.scroll=document.documentElement.scrollTop||document.body.scrollTop})}},o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"back-top",class:{show:this.scroll>150},on:{click:this.gotop}})},staticRenderFns:[]};var a=e("VU/8")(i,o,!1,function(t){e("xhcd")},"data-v-355f64c2",null);n.a=a.exports},xhcd:function(t,n){}},["NHnr"]);