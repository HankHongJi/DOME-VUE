<template>
    <div class="app-details">
        <back-title :title="appInfo.name"></back-title>
        <div class="app_info" flex="cross:center main:justify box:justify">
            <span class="icon" :class="appInfo.icon" style="width:50px"></span>
            <div class="text">
                <span>云移资讯</span>
                {{appInfo.downloads}}次下载  {{appInfo.size}}MB<br/>
                {{appInfo.creatTime}}
            </div>
            <div class="btn_no" style="width:65px;">{{appInfo.install?'更新':'下载'}}</div>
        </div>
        <div class="app_screenshot">
            <div class="img-outer">
                <div class="img-box" :style="{width:(125*appInfo.screenshot.length+26)+'px'}" v-if="appInfo.screenshot">
                    <img :src="item" v-for="(item,index) in appInfo.screenshot" alt="展示" :key="index">
                </div>
            </div>
        </div>
        <div class="app_change">
            <div class="tab">
                <div :class="{active:tab}" @click="tab=true">应用简介</div>
                <div :class="{active:!tab}" @click="tab=false">更新内容</div>
            </div>
            <p>云移资讯app是一个能够实现当前EIP系统部分业务向移动应用的延伸，一方面从技术上打通移动应用与现有业务结合的开发模式，同时提高办公效率，打破过去时间和地理位置的限制，让用户随时随地使用日常业务系统。</p>
        </div>
        <div class="app_comment">
            <div class="title" flex='main:justify'>
                <span class="name news">公司新闻</span>
                <router-link to="/commenting" tag="span" class="write">我要评论</router-link>
            </div>
            <div class="item" flex="box:first" v-for="(item,index) in comment" :key="index" v-if="index<showMax">
                <div class="head-box">
                    <img :src="item.userHeadimg" alt="">
                </div>
                <div class="text">
                    <div class="user_name" style="font-size:18px">{{item.userName}}</div>
                    <div class="content">{{item.content}}</div>
                    <div flex="main:justify" class="other">
                        <div class="time">{{item.creatTime}}</div>
                        <div class="fabulous">赞 ({{item.fabulous}})</div>
                    </div>
                </div>
            </div>
            <div class="app_all" v-if="showMax!=comment.length" @click="showMax=comment.length">
                全部评论
            </div>
        </div>
        <div style="height:60px"></div>
        <div class="update">
            更新 ({{appInfo.size}}MB)
        </div>
    </div>
</template>

<script>
import screenshot1 from '@/assets/screenshot_1.png'
import screenshot2 from '@/assets/screenshot_2.png'
import screenshot3 from '@/assets/screenshot_3.png'
import userHeadimg1 from '@/assets/user_head_img1.png'
import userHeadimg2 from '@/assets/user_head_img2.png'
export default {
    name: 'app-details',
    data () {
        return {
            appData:{
                1:{appId:1,icon:'icon icon-yy',name:'云移资讯',downloads:6646,size:22.4,install:false,update:true,creatTime:'2018/04/11 12:03',screenshot:[screenshot1,screenshot2,screenshot3]},
                2:{appId:2,icon:'icon icon-zc',name:'资产管理',downloads:555,size:26.4,install:true,update:true,creatTime:'2018/04/01 12:03',screenshot:[screenshot1,screenshot2,screenshot3]},
                3:{appId:3,icon:'icon icon-bo',name:'BOMC',downloads:6646,size:21.4,install:false,update:true,creatTime:'2018/04/10 12:03',screenshot:[screenshot1,screenshot2,screenshot3]},
                4:{appId:4,icon:'icon icon-sj',name:'手机经分',downloads:2256,size:21.4,install:true,update:true,creatTime:'2018/05/11 12:03',screenshot:[screenshot1,screenshot2,screenshot3]},
                5:{appId:5,icon:'icon icon-zl',name:'质量管理',downloads:5556,size:26.4,install:false,update:true,creatTime:'2018/06/11 12:03',screenshot:[screenshot1,screenshot2,screenshot3]},
                6:{appId:6,icon:'icon icon-tx',name:'通讯录',downloads:6646,size:26.4,install:false,update:true,creatTime:'2018/08/11 12:03',screenshot:[screenshot1,screenshot2,screenshot3]},
                7:{appId:7,icon:'icon icon-yx',name:'一线之音',downloads:6646,size:26.4,install:true,update:true,creatTime:'2018/05/11 12:03',screenshot:[screenshot1,screenshot2,screenshot3]},
            },
            showMax:3,
            appInfo:{},
            tab:true,
            comment:[
                {
                    userName:'撒倩',
                    userHeadimg:userHeadimg1,
                    content:'这款APP非常好用，真不错不错，值得推荐，哈哈哈哈。',
                    creatTime:'2018/05/11 12:03',
                    fabulous:88
                },
                {
                    userName:'张珂',
                    userHeadimg:userHeadimg2,
                    content:'找了好久这款APP，终于被为找到了，刚刚下载，还有好多功能没去做详细了解，棒。',
                    creatTime:'2018/05/11 12:03',
                    fabulous:885
                },
                {
                    userName:'李敏',
                    userHeadimg:userHeadimg1,
                    content:'这款APP非常好用，真不错不错，值得推荐，哈哈哈哈。',
                    creatTime:'2018/05/11 12:03',
                    fabulous:46
                },
                {
                    userName:'李敏',
                    userHeadimg:userHeadimg1,
                    content:'这款APP非常好用，真不错不错，值得推荐，哈哈哈哈。',
                    creatTime:'2018/05/11 12:03',
                    fabulous:46
                },
                {
                    userName:'李敏',
                    userHeadimg:userHeadimg1,
                    content:'这款APP非常好用，真不错不错，值得推荐，哈哈哈哈。',
                    creatTime:'2018/05/11 12:03',
                    fabulous:46
                },
                {
                    userName:'李敏',
                    userHeadimg:userHeadimg1,
                    content:'这款APP非常好用，真不错不错，值得推荐，哈哈哈哈。',
                    creatTime:'2018/05/11 12:03',
                    fabulous:46
                },
                {
                    userName:'李敏',
                    userHeadimg:userHeadimg1,
                    content:'这款APP非常好用，真不错不错，值得推荐，哈哈哈哈。',
                    creatTime:'2018/05/11 12:03',
                    fabulous:46
                },
            ]
        }
    },
    methods:{

    },
    mounted(){
        this.appInfo=this.appData[this.$route.query.appId];
    },

}
</script>
<style lang="scss" type="text/css">
    .app-details{
        .box{
            height: 100%;
            overflow: auto;
            background:#f4f4f4;
        }
        .update{
            height: 50px;
            background: #4585f4;
            font-size: 18px;
            color: #fff;
            line-height: 50px;
            position: fixed;
            width: 100%;
            z-index: 9999;
            bottom: 0;
        }
        .app_comment{
            background: #fff;
            .title{
                height: 44px;
                line-height: 44px;
                padding: 0 18px;
                border-bottom: 1px solid #e5e5e5;
                width: 100%;
                font-size: 16px;
                .write{
                    padding-left: 22px;
                    background: url("../../assets/icon_write.png") no-repeat left center;
                    background-size: 13px auto;
                    color: #4585f4;
                }
            }
            .item{
                margin:0 18px;
                padding: 18px 0;
                border-bottom: 1px solid #e8e8e8;
                .head-box{
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    border: 1px solid #ececec;
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .text{
                    padding-left: 10px;
                    text-align: left;
                    .other{
                        margin-top: 10px;
                        font-size: 12px;
                        .time{
                            color: #acacac;
                        }
                        .fabulous{
                            color: #528ef5;
                        }
                    }
                }
            }
            .app_all{
                height: 50px;
                line-height: 50px;
                font-size: 16px;
                color:#538ef5;
            }
        }
        .app_change{
            border-top: 1px solid  #e7e7e7;
            padding: 0 18px 25px;
            border-bottom: 10px solid #f4f4f4;
            background: #fff;
            .tab{
                width: 212px;
                height: 29px;
                border-radius: 3px;
                border: 1px solid #999999;
                margin: 25px auto 14px;
                div{
                    float: left;
                    width: 50%;
                    height: 100%;
                    line-height: 27px;
                    &.active{
                        background: #999;
                        color: #fff;
                    }
                }
            }
            p{
                text-align:justify;
                color: #565656;
            }
        }
        .app_screenshot{
            height: 245px;
            background: #fff;
            padding:18px 0;
            div.img-outer{
                height: 215px;
                overflow-x: auto;
            }
            div.img-box{
                img{
                    width: 115px;
                    height: 205px;
                    margin-right: 10px;
                    &:nth-last-child(1){
                        margin-right: 0;
                    }
                }
            }

        }
        .app_info{
            height: 104px;
            border-bottom: 1px solid  #e7e7e7;
            padding: 0 18px;
            background: #fff;
            .text{
                text-align: left;
                padding-left: 10px;
                color:#565656;
                span{
                    font-size: 16px;
                    color: #212121;
                    display: block;
                }
            }
        }
    }
</style>
