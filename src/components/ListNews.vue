<template>
    <ul class="list_news">
        <router-link :to='{path:"/article",query:{title:title}}' tag="li" flex="box:last" v-for="(item,index) in list" :key="index">
            <div class="article_content">
                <h3>{{item.title}}</h3>
                <div class="others" flex='main:justify box:first'>
                    <span>{{item.createTime.substring(2)}}</span>
                    <div class="article_data" flex='dir:right'>
                        <span class="read">{{item.read}}</span>
                        <span class="comment" v-if='!comment'>{{item.comment}}</span>
                    </div>
                </div>
            </div>
            <div class="article_img" flex="main:center">
                <img :src="item.imgUrl" alt="公司新闻">
            </div>
        </router-link>
    </ul>
</template>

<script>
import articleImg from '@/assets/article_img.png'
export default {
    name: 'list_news',
    data () {
        return {
        }
    },
    props:['list','comment','title'],
    methods:{
    },
    mounted(){
    },
}
</script>
<style lang="scss">
    $url:"../assets/";
    .list_news{
        padding: 0 18px;
        overflow: auto;
        li{
            height: 126px;
            padding:18px 0;
            .article_content{
                position: relative;
                height: 100%;
                h3{
                    font-size: 16px;
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
                    overflow: hidden;
                    .article_data{
                        margin-right: 0;
                        span{
                            padding-left: 16px;
                            background: url($url+"articles_comment.png") no-repeat left center;
                            background-size: auto 11px;
                            text-align: left;
                            margin-right: 10px;

                        }
                        .read{
                            background-image: url($url+"icon_read.png");
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
    @media screen and (max-width: 340px) {
    body {
        .article_content{
            h3{
                font-size: 14px !important;
            }
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
