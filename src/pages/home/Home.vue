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
            <li :class="item.icon" v-for="(item,index) in navs" :key='index'>
               {{item.name}}
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
            <ul class="list">
                <li flex="box:last" v-for="(item,index) in articles.news.list"  :key="index">
                    <div class="article_content">
                        <h3>{{item.title}}</h3>
                        <div class="others" flex='main:justify'>
                            <span>{{item.createTime.substring(2)}}</span>
                            <div class="article_data" flex='box:mean'>
                                <span class="read">{{item.read}}</span>
                                <span class="comment">{{item.comment}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="article_img" flex="main:center">
                        <img :src="item.imgUrl" alt="公司新闻">
                    </div>
                </li>
            </ul>
        </div>
        <div class="articles mrgt">
            <div class="title" flex='main:justify'>
                <span class="name dynamic">大理最新动态</span>
                <span class="open">更多</span>
            </div>
            <ul class="list">
                <li flex="box:last" v-for="(item,index) in articles.dynamic.list" :key="index">
                    <div class="article_content">
                        <h3>{{item.title}}</h3>
                        <div class="others" flex='main:justify'>
                            <span>{{item.createTime.substring(2)}}</span>
                            <div class="article_data" flex='box:mean'>
                                <span class="read">{{item.read}}</span>
                                <span class="comment">{{item.comment}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="article_img" flex="main:center">
                        <img :src="item.imgUrl" alt="公司新闻">
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import banner1 from '@/assets/swiper/home_banner1.png'
import banner2 from '@/assets/swiper/home_banner2.png'
import articleImg from '@/assets/article_img.png'
import { Swipe, SwipeItem } from 'vue-swipe'
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
                {name:'资产管理',icon:'icon1'},
                {name:'云移资讯',icon:'icon2'},
                {name:'BOMC',icon:'icon3'},
                {name:'手机经分',icon:'icon4'},
                {name:'质量管理',icon:'icon5'},
                {name:'通讯录',icon:'icon6'},
                {name:'一线之音',icon:'icon7'},
                {name:'添加',icon:'add'}
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
        Swipe,SwipeItem
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
        .list{
            padding: 0 18px;
            overflow: auto;
            li{
                height: 126px;
                padding:18px 0;
                .article_content{
                    position: relative;
                    height: 100%;
                    h3{
                        font-size: 14px;
                        font-weight: 900;
                        color: #212121;
                        text-align: left;
                        padding-right: 10px;
                        line-height: 23px;
                        overflow: hidden;
                    }
                    .others{
                        position: absolute;
                        bottom: 0;
                        line-height: 1;
                        height: 12px;
                        font-size: 12px;
                        width: 100%;
                        color: #999999;
                        .article_data{
                            width: 110px;
                            margin-right: 0;
                            span{
                                padding-left: 16px;
                                background: url("../../assets/articles_comment.png") no-repeat left center;
                                background-size: auto 11px;
                                text-align: left;
                            }
                            .read{
                                background-image: url("../../assets/articles_consult.png");
                                background-position: left 46%;
                            }
                            .comment{

                            }
                        }
                    }
                }
                .article_img{
                    height: 100%;
                    width: 120px;
                    overflow: hidden;
                    img{
                        height: 100%;
                    }
                }
            }
            li:not(:last-child){
                border-bottom: 1px solid #e5e5e5;
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
                padding: 3px 0 26px;
                li{
                    width:25%;
                    height: 96px;
                    background:url($url+"home_nav1.png") no-repeat center 46%;
                    background-size: 50px auto;
                    padding-top: 82px;
                    line-height: 1;
                    float: left;
                }
                li.icon2{
                    background-image:url($url+"home_nav2.png");
                }
                li.icon3{
                    background-image:url($url+"home_nav3.png");
                }
                li.icon4{
                    background-image:url($url+"home_nav4.png");
                }
                li.icon5{
                    background-image:url($url+"home_nav5.png");
                }
                li.icon6{
                    background-image:url($url+"home_nav6.png");
                }
                li.icon7{
                    background-image:url($url+"home_nav7.png");
                }
                li.add{
                    background-image:url($url+"home_nav_add.png");
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
