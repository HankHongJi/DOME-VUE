<template>
    <div class="confirm" @touchmove.prevent='1' v-if='confirm'>
        <div class="mask"></div>
        <div class="content">
            <div class="effect" :class="{enter:show,leave:!show}">
                <h2>{{confirm.title || '温馨提示'}}</h2>
                <div class="text" v-html="confirm.text|| '请确认'"></div>
                <div class="btns" flex='box:mean'>
                    <div class="btn" @click='execute(confirm.okFun)'>{{confirm.okName ||'确定'}}</div>
                    <div class="btn" v-if='confirm.noFun' @click='execute(confirm.noFun)'>{{confirm.noName ||'取消'}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

/*
*   confirm确认框
*{
    example
        let title = '温馨提示'
        let text = '这是一个确认框'
        let okFun = ()=>{
            console.log("确认后执行")
        }
        let okName="执行"
        let noFun=()=>{
            console.log("取消关闭")
        }
        let noName="执行"
        let important=true
        this.$tool.CONFIRM({title:title,text:text,okFun:okFun,okName:okName,noFun:noFun,noName:noName,important:important});
}
*@param {String} 字符串title (默认==>'温馨提示')
*@param {String} 字符串text  (默认==>'请确认')
*@param {String} 字符串okName  (默认==>'确认')
*@param {String} 字符串noName  (默认==>'取消')
*@param {Boolean} 布尔值important  (默认==>false,当为true的时候表示很重要，如果之前有弹窗会清除之前的并替换)
*@param {Function}  点击okName 执行的函数okFun(默认==>null)
*@param {Function}  点击noName 执行的函数noFun(默认==>null)
*
*hank 2018.4.18
*
*/

import {mapState} from 'vuex'
export default {
    name: 'confirm',
    data () {
        return {
            show:true
        }
    },
    methods:{
        execute(fun){
            this.show=false;
            setTimeout(()=>{
                this.$tool.SET_STATE({name:'confirm',content:null});
                fun&&fun();
            },300);
        }
    },
    computed:{
        ...mapState(['confirm'])
    },
    watch:{
        confirm(){
            if(this.confirm)this.show=true;
        }
    }

}
</script>
<style lang="scss" type="text/css" scoped>
    .confirm{
        .content{
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate3d(-50%,-50%,0);
            transform-origin: 50% 50%;
            width: 250px;
            min-height: 100px;
            z-index: 10000;
            border-radius: 5px;
            overflow: auto;
            h2{
                font-size: 16px;
                line-height: 2;
                font-weight: 900;
            }
            .text{
                padding: 10px;
            }
            .btns{
                height: 45px;
                line-height: 45px;
                text-align: center;
                border-top: 0.5px solid #ccc;
                font-size: 16px;
                div:nth-child(2){
                    border-left:  0.5px solid #ccc;
                }
            }
            .effect{
                background: #fff;
                transition: all 0.3s;
                transform: scale(0.5);
                opacity: 0;
                animation:amt-modal-in .3s ease-out;
            }
            .enter{
                opacity: 1;
                transform: scale(1);
            }
        }
        .mask{
        }
    }
    @keyframes amt-modal-in{
        0% {
            opacity: 0;
            transform: scale3d(.5,.5,1);
        }
        100% {
            opacity: 1;
            transform: scaleX(1);
        }
    }

</style>
