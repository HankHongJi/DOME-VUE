<template>
    <div class="shop">
        <div class="font-md">应用商店</div>
        <div class="navs">
            <div :class="{active:!hot}" @click="hot=false">最新应用</div>
            <div :class="{active:hot}" @click="hot=true">热门应用</div>
            <div class="active_bar" :style="{left:hot?'75%':'25%'}"></div>
        </div>
        <div class="banner"></div>
        <div class="list">
            <div class="item" flex="cross:center main:justify box:last" v-for="(item,index) in (hot? appList.hottest:appList.newest)" :key="index">
                <router-link :to='{path:"/appDetails",query:{icon:item.icon,appId:item.appId}}' flex="box:first">
                    <span class="icon" :class="item.icon" style="width:50px"></span>
                    <div class="text">
                        <span>{{item.name}}</span>
                        <div class="count">
                            <span>{{item.downloads}}次下载</span>{{item.size}}MB
                        </div>
                    </div>
                </router-link>
                <div class="uninstall" flex-box="0" v-if="item.install">卸载</div>
                <div class="btn" style="width:65px">{{item.install?'更新':'下载'}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'shop',
    data () {
        return {
            hot:false,
            appList:{
                newest:[
                    {appId:1,icon:'icon icon-yy',name:'云移资讯',downloads:6646,size:22.4,install:false,update:true},
                    {appId:2,icon:'icon icon-zc',name:'资产管理',downloads:555,size:26.4,install:true,update:true},
                    {appId:3,icon:'icon icon-bo',name:'BOMC',downloads:6646,size:21.4,install:false,update:true},
                    {appId:4,icon:'icon icon-sj',name:'手机经分',downloads:2256,size:21.4,install:true,update:true},
                    {appId:5,icon:'icon icon-zl',name:'质量管理',downloads:5556,size:26.4,install:false,update:true}
                ],
                hottest:[
                    {appId:6,icon:'icon icon-tx',name:'通讯录',downloads:6646,size:26.4,install:false,update:true},
                    {appId:7,icon:'icon icon-yx',name:'一线之音',downloads:6646,size:26.4,install:true,update:true},
                    {appId:3,icon:'icon icon-bo',name:'BOMC',downloads:6646,size:26.4,install:true,update:true},
                    {appId:4,icon:'icon icon-sj',name:'手机经分',downloads:6646,size:26.4,install:false,update:true},
                    {appId:5,icon:'icon icon-zl',name:'质量管理',downloads:6646,size:26.4,install:false,update:true}
                ]
            }
        }
    },
    methods:{
    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
    $url:'../../assets/';
    .shop{
        position: relative;
        .font-md{
            height: 44px;
            line-height: 44px;
            background: #fff;
        }
        .navs{
            height: 44px;
            line-height: 44px;
            background: #fff;
            position: relative;
            div{
                font-size: 14px;
                height: 100%;
                width: 50%;
                float: left;
                transition: all 0.1s;
            }
            div.active{
                color: #4585f4;
                font-weight: 900;
                font-size: 14px;
                position: relative;
            }
            .active_bar{
                width: 21px;
                height: 3px;
                border-radius: 5px;
                background: #4585f4;
                position: absolute;
                margin-left: -11px;
                bottom: 5px;
                transition: all 0.3s;
            }
        }
        .banner{
            height: 2.5rem;
            background:url($url+"shop_banner.png") no-repeat;
            background-size: 100% auto;
        }
        .list{
            overflow: auto;
            .item{
                margin-top: 10px;
                padding: 0 18px;
                background: #fff;
                height: 86px;
                >span{
                    width: 50px;
                }
                .uninstall{
                    color: #4585f4;
                    text-decoration: underline;
                    width:50px;
                    padding: 0 5px;
                }

                .text{
                    text-align: left;
                    padding-left: 8px;
                    >span{
                        font-weight: 900;
                        font-size: 14px;
                    }
                    .count{
                        span{
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
    }
</style>
