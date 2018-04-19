
/*
*   alert提示窗
*{
    let vuetouch = function(text){
        console.log(text.name)
    }
    <div class="touch"
        v-swipeleft="{fn:vuetouch,name:'左滑'}"
        v-swiperight="{fn:vuetouch,name:'右滑'}"
        v-swipeup="{fn:vuetouch,name:'上滑'}"
        v-swipedown="{fn:vuetouch,name:'下滑'}">
        上下左右滑动
    </div>
}
*@param {Funvtion}  函数vuetouch
*v-swipeleft="{fn:vuetouch,name:'左滑'}" 中 "{fn:vuetouch,name:'左滑'}" 为函数参数
*swipeleft,swiperight,swipeup,swipedown,tap,longtap共计5中移动端事件可调用
*
*hank 2018.4.19
*
*/

import Vue from 'vue'
function vueTouch(el,binding,type){
    let _this=this;
    this.obj=el;
    this.binding=binding;
    this.touchType=type;
    this.vueTouches={x:0,y:0};
    this.vueMoves=true;
    this.vueLeave=true;
    this.longTouch=true;
    this.vueCallBack=typeof(binding.value)=="object"?binding.value.fn:binding.value;
    this.obj.addEventListener("touchstart",function(e){
        _this.start(e);
    },false);
    this.obj.addEventListener("touchend",function(e){
        _this.end(e);
    },false);
    this.obj.addEventListener("touchmove",function(e){
        _this.move(e);
    },false);
};
vueTouch.prototype={
    start:function(e){
        this.vueMoves=true;
        this.vueLeave=true;
        this.longTouch=true;
        this.vueTouches={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY};
        this.time=setTimeout(function(){
            if(this.vueLeave&&this.vueMoves){
                this.touchType=="longtap"&&this.vueCallBack(this.binding.value,e);
                this.longTouch=false;
            };
        }.bind(this),1000);
    },
    end:function(e){
        let disX=e.changedTouches[0].pageX-this.vueTouches.x;
        let disY=e.changedTouches[0].pageY-this.vueTouches.y;
        clearTimeout(this.time);
        if(Math.abs(disX)>10||Math.abs(disY)>100){
            this.touchType=="swipe"&&this.vueCallBack(this.binding.value,e);
            if(Math.abs(disX)>Math.abs(disY)){
                if(disX>10){
                    this.touchType=="swiperight"&&this.vueCallBack(this.binding.value,e);
                };
                if(disX<-10){
                    this.touchType=="swipeleft"&&this.vueCallBack(this.binding.value,e);
                };
            }else{
                if(disY>10){
                    this.touchType=="swipedown"&&this.vueCallBack(this.binding.value,e);
                };
                if(disY<-10){
                    this.touchType=="swipeup"&&this.vueCallBack(this.binding.value,e);
                };
            };
        }else{
            if(this.longTouch&&this.vueMoves){
                this.touchType=="tap"&&this.vueCallBack(this.binding.value,e);
                this.vueLeave=false
            };
        };
    },
    move:function(e){
        this.vueMoves=false;
    }
};
Vue.directive("tap",{
    bind:function(el,binding){
        new vueTouch(el,binding,"tap");
    }
});
Vue.directive("swipe",{
    bind:function(el,binding){
        new vueTouch(el,binding,"swipe");
    }
});
Vue.directive("swipeleft",{
    bind:function(el,binding){
        new vueTouch(el,binding,"swipeleft");
    }
});
Vue.directive("swiperight",{
    bind:function(el,binding){
        new vueTouch(el,binding,"swiperight");
    }
});
Vue.directive("swipedown",{
    bind:function(el,binding){
        new vueTouch(el,binding,"swipedown");
    }
});
Vue.directive("swipeup",{
    bind:function(el,binding){
        new vueTouch(el,binding,"swipeup");
    }
});
Vue.directive("longtap",{
    bind:function(el,binding){
        new vueTouch(el,binding,"longtap");
    }
});
