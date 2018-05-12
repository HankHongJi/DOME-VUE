<template>
    <div class="my_app">
        <div class="font-md">
            我的应用
        </div>
        <div class="apps">
            <div class="item" flex="box:first cross:center" v-for="(item,index) in list" :key="index">
                <span class="icon">
                    <img :src="item.icon" alt="">
                </span>
                <div class="content">
                    <div class="name">
                        <span>{{item.name}}</span>V1.2.1
                    </div>
                    <div class="text">{{item.text}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import iconZC from '@/assets/home_nav1.png'
import iconYY from '@/assets/home_nav2.png'
import iconBO from '@/assets/home_nav3.png'
import iconSJ from '@/assets/home_nav4.png'
export default {
    name: 'clause',
    data () {
        return {
            list:[
                {
                    name:'云移资讯',
                    icon:iconZC,
                    Edition:'v1.2.1',
                    text:'实现当前EIP系统部分业务向移动应用的延伸，一方面从技术上打通移动应用与现有业务结合的开用与现有业务结合的开用与现有业务结合的开发'
                },
                {
                    name:'资产管理',
                    icon:iconYY,
                    Edition:'v1.3.1',
                    text:'实现当前EIP系统部分业务向移动应用的延伸，一方面从技术上打通移动应用与现有业务结合的开发'
                },
                {
                    name:'BOMC',
                    icon:iconBO,
                    Edition:'v1.4.1',
                    text:'实现当前EIP系统部分业务向移动应用的延伸，一方面从技术上打通移动应用与现有用与现有业务结合的开业务结合的开发'
                },
                {
                    name:'手机经分',
                    icon:iconSJ,
                    Edition:'v1.6.1',
                    text:'实现当前EIP系统部分业务向移动应用的延伸，一方面从技术上打通移动应用与现有业务结合的开发'
                },
            ]

        }
    },
    methods:{
        fun(index){
            console.log(index)
        }
    },
    mounted(){
    },

}
</script>
<style lang="scss">

    .my_app{
        .font-md{
            background: #fff;
            height: 44px;
            line-height: 44px;
        }
        .item{
            padding: 0 18PX;
            background: #fff;
            margin-top: 10px;
            height: 96px;
            span.icon{
                width: 50px;
                height: 50px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .content{
                text-align: left;
                padding-left: 10px;
                .name{
                    font-size: 12px;
                    color: #f87926;
                    span{
                        color: #212121;
                        font-size:18px;
                        margin-right: 8px;
                    }
                }
            }
            .text{
                font-size: 12px;
                height: 36px;
                word-break:break-all;
                display:-webkit-box;
                -webkit-line-clamp:2;
                -webkit-box-orient:vertical;
                overflow:hidden;
            }
        }
    }
</style>
