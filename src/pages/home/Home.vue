<template>
    <div class="home">
        <div class="banner-box">
            <swipe class="my-swipe">
                <swipe-item v-for="(item,index) in swiperData" :key="index"><img :src="item.src" alt="轮播"></swipe-item>
            </swipe>
        </div>
        <div class="mytask" flex='box:mean'>
            <div flex='cross:center box:last'>
                <div class="text">
                    <span style="">23</span>
                    <p>我的待办</p>
                </div>
                <span class="open"></span>
            </div>
            <div flex='cross:center box:last'>
                <div class="text">
                    <span style="">8</span>
                    <p>我的待阅</p>
                </div>
                <span class="open"></span>
            </div>
        </div>
        <ul class="navs mrgt">
            <li v-for="(item,index) in navs" :key='index' flex="dir:top cross:center">
                <span class="icon" :class="item.icon"></span>
                <p>{{item.name}}</p>
            </li>
        </ul>
        <div class="notice">
            最新公告：微信微博，云南移动精彩无限！
        </div>
        <div class="navs-more">
            <div class="mail">
                <div class="text">
                    <div>通讯录</div>
                    <p>快速查询企业通讯信息</p>
                </div>
            </div>
            <div class="other">
                <div class="cars">
                    <div class="text">
                        <div>车辆管理</div>
                        <p>企业内部车辆使用信息</p>
                    </div>
                </div>
                <div class="fault">
                    <div class="text">
                        <div>故障平台</div>
                        <p>实施掌握各种故障动态</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="articles mrgt">
            <div class="title" flex='main:justify'>
                <span class="name news">公司新闻</span>
                <span class="open">更多</span>
            </div>
            <list-news :list="articles.news.list"></list-news>
        </div>
        <div class="articles mrgt">
            <div class="title" flex='main:justify'>
                <span class="name dynamic">大理最新动态</span>
                <span class="open">更多</span>
            </div>
            <list-news :list="articles.dynamic.list"></list-news>
        </div>
    </div>
</template>

<script>
import banner1 from '@/assets/swiper/home_banner1.png'
import banner2 from '@/assets/swiper/home_banner2.png'
import articleImg from '@/assets/article_img.png'
import { Swipe, SwipeItem } from 'vue-swipe'
import ListNews from '@/components/ListNews'
export default {
    name: 'home',
    data () {
        return {
            text:"城管灌灌灌灌灌",
            swiperData:[
                {src:banner1,name:'轮播'},
                {src:banner2,name:'轮播'},
                {src:banner1,name:'轮播'},
                {src:banner2,name:'轮播'}
            ],
            navs:[
                {name:'资产管理',icon:'icon-zc'},
                {name:'云移资讯',icon:'icon-yy'},
                {name:'BOMC',icon:'icon-bo'},
                {name:'手机经分',icon:'icon-sj'},
                {name:'质量管理',icon:'icon-zl'},
                {name:'通讯录',icon:'icon-tx'},
                {name:'一线之音',icon:'icon-yx'},
                {name:'添加',icon:'icon-tj'}
            ],
            articles:{
                news:{
                    name:'公司新闻',
                    list:[
                        {
                            title:'中国移动亮相2018世界移动大会，宣布将建世界规模最大5G试验网',
                            createTime:'2018-04-09 07:28',
                            read:111122,
                            comment:386,
                            imgUrl:articleImg
                        },
                        {
                            title:'中国移动亮相2018世界移动大会，宣布将建世界规模最大5G试验网',
                            createTime:'2018-04-09 07:28',
                            read:4343,
                            comment:386,
                            imgUrl:articleImg
                        },
                        {
                            title:'中国移动亮相2018世界移动大会，宣布将建世界规模最大5G试验网',
                            createTime:'2018-04-09 07:28',
                            read:433,
                            comment:386,
                            imgUrl:articleImg
                        }
                    ]
                },
                dynamic:{
                    name:'大理最新动态',
                    list:[
                        {
                            title:'中国移动亮相2018世界移动大会，宣布将建世界规模最大5G试验网',
                            createTime:'2018-04-09 07:28',
                            read:1112,
                            comment:386,
                            imgUrl:articleImg
                        },
                        {
                            title:'中国移动亮相2018世界移动大会，宣布将建世界规模最大5G试验网',
                            createTime:'2018-04-09 07:28',
                            read:4343,
                            comment:386,
                            imgUrl:articleImg
                        },
                        {
                            title:'中国移动亮相2018世界移动大会，宣布将建世界规模最大5G试验网',
                            createTime:'2018-04-09 07:28',
                            read:433,
                            comment:386,
                            imgUrl:articleImg
                        }
                    ]
                }
            }
        }
    },
    components:{
        Swipe,SwipeItem,ListNews
    },
    methods:{
    },
    mounted(){
    },
}
</script>
<style lang="scss">
    .articles{
        overflow: auto;
        background: #fff;

        .title{
            height: 44px;
            line-height: 44px;
            padding: 0 18px;
            border-bottom: 1px solid #e5e5e5;
            .name{
                font-size: 16px;
                font-weight: 900;
                color: #212121;
                padding-left: 24px;
                background:url("../../assets/articles_new.png") no-repeat left center;
                background-size:13px auto ;
            }
            .dynamic{
                background-image: url("../../assets/articles_dynamic.png");
            }
            .open{
                width: 43px;
                height: 100%;
                color: #d1d1d1;
                background-position:right 49%;
                background-size: 6px auto;
            }
        }
    }
    .home{
        .mint-swipe-indicator{
            width: 8px;
            height: 8px;
            background: #fff;
            opacity:0.7;
            margin: 0 5px;
            transition: all 0.25s;
        }
        .is-active{
            opacity:1;
        }
    }
    .open{
        display: block;
        background: url("../../assets/icon-open.png") no-repeat;
        background-size: 100% auto;
        width: 6px;
        height: 10px;
    }
    .mrgt{
        margin-top: 10px;
    }
    @media screen and (max-width: 340px) {
    body {
        .article_content{
            .others span{
                 font-size: 10px;
            }
            .article_data{
                width: 94px !important;
            }
        }
    }
}
</style>

<style lang="scss" scoped>
    $url:'../../assets/';
    .home{
        height: 100%;
        background:#f4f4f4;
        position: relative;
        overflow: auto;
        padding-bottom:20px;
        .banner-box{
            width: 100%;
            height: 3.78rem;
            img{
                width:7.5rem;
            }
        }
        .navs-more{
            height: 210px;
            background: #fff;
            >div{
                height: 100%;
                float: left;
                .text{
                    margin:23px 0 0 18px;
                    width: 1.5rem;
                    text-align: left;
                    div{
                        font-size: 16px;
                        color:#212121;
                        font-weight: 900;
                        line-height: 1;
                        margin-bottom: 12px;
                    }
                    p{
                        color:#9c9c9c;

                    }
                }
            }
            .mail{
                width: 2.85rem;
                border-right:1px solid #e5e5e5;
                background: url($url+"mail_icon.png") no-repeat center 110px;
                background-size: auto 79px;
            }
            .other{
                >div{
                    height: 50%;
                    width: 4.65rem;
                    overflow: hidden;
                }
                .cars{
                    border-bottom:1px solid #e5e5e5;
                    background: url($url+"car_icon.png") no-repeat 2.0rem 28px;
                    background-size: auto 52px;
                }
                .fault{
                    background: url($url+"fault_icon.png") no-repeat 2.28rem 24px;
                    background-size: auto 59px;
                }
            }
        }
        .notice{
            height: 45px;
            line-height: 45px;
            text-align: left;
            padding-left:41px;
            background:url("../../assets/home_notice_icon.png") #fff3d3 18px center no-repeat;
            background-size: 16px auto;
            color:#1a1a1a;
        }
        .navs{
                background: #fff;
                overflow: auto;
                padding: 25px 0 3px;
                li{
                    width:25%;
                    height: 96px;
                    float: left;
                    p{
                        margin-top: 10px;
                        line-height: 1;
                    }
                }
            }
        .mytask{
            height: 80px;
            background: #fff;

            .text{
                text-align: left;
                line-height: 1.2;
                span{
                    font-weight: 900;
                    font-size: 16px;
                }
            }
            >div{
                padding-left:77px;
                background: url($url+'home_mytask2.png') no-repeat 18px center;
                background-size: 44px auto;
                .open{
                    float: right;
                    width: 6px;
                    margin-right: 14px;

                }
            }
            >div:nth-child(1){
                &:after{
                   display: block;
                   content:'';
                   width: 1px;
                   height:36px;
                   background:#e5e5e5;
                }
                background-image: url($url+'home_mytask1.png');
            }
        }
    }
</style>
