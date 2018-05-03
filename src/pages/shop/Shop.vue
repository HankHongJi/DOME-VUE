<template>
    <div class="shop">
        <div class="font-md">应用商店</div>
        <div class="navs">
            <div :class="{active:!hot}" @click="hot=false">最新应用</div>
            <div :class="{active:hot}" @click="hot=true">热门应用</div>
        </div>
        <div class="banner"></div>
        <div class="list">
            <div class="item" flex="cross:center main:justify box:justify" v-for="(item,index) in (hot? appList.hottest:appList.newest)">
                <span class="icon" :class="item.icon"></span>
                <div class="text">
                    <span>{{item.name}}</span>
                    <div class="count">
                        <span>{{item.downloads}}次下载</span>{{item.size}}MB
                    </div>
                </div>
                <div class="uninstall" flex-box="0" v-if="item.install">卸载</div>
                <div class="btn">{{item.install?'更新':'下载'}}</div>
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
                    {icon:'icon icon-yy',name:'云移资讯',downloads:6646,size:22.4,install:false,update:true},
                    {icon:'icon icon-zc',name:'资产管理',downloads:555,size:26.4,install:true,update:true},
                    {icon:'icon icon-bo',name:'BOMC',downloads:6646,size:21.4,install:false,update:true},
                    {icon:'icon icon-sj',name:'手机经分',downloads:2256,size:21.4,install:true,update:true},
                    {icon:'icon icon-zl',name:'质量管理',downloads:5556,size:26.4,install:false,update:true}
                ],
                hottest:[
                    {icon:'icon icon-tx',name:'通讯录',downloads:6646,size:26.4,install:false,update:true},
                    {icon:'icon icon-yx',name:'一线之音',downloads:6646,size:26.4,install:true,update:true},
                    {icon:'icon icon-bo',name:'BOMC',downloads:6646,size:26.4,install:true,update:true},
                    {icon:'icon icon-sj',name:'手机经分',downloads:6646,size:26.4,install:false,update:true},
                    {icon:'icon icon-zl',name:'质量管理',downloads:6646,size:26.4,install:false,update:true}
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
        height: 100%;
        background:#f4f4f4;
        position: relative;
        overflow: auto;
        padding-bottom:20px;
        .font-md{
            height: 44px;
            line-height: 44px;
            background: #fff;
        }
        .navs{
            height: 44px;
            background: #fff;
            div{
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
                &:after{
                    display: block;
                    content: '';
                    width: 21px;
                    height: 3px;
                    border-radius: 2px;
                    background: #4585f4;
                    position: absolute;
                    left: 50%;
                    margin-left: -11px;
                    bottom: 5px;
                }
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
                .btn{
                    width: 65px;
                    height: 28px;
                    text-align: center;
                    line-height: 28px;
                    color: #fff;
                    background: #4585f4;
                    border-radius: 3px;
                    letter-spacing: 1px;
                    &:active:after{
                        border-radius: 3px;
                    }
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
