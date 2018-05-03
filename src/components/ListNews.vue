<template>
    <ul class="list_news">
        <li flex="box:last" v-for="(item,index) in list" :key="index">
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
</template>

<script>
import articleImg from '@/assets/article_img.png'
export default {
    name: 'list_news',
    data () {
        return {
        }
    },
    props:['list'],
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
                            background: url($url+"articles_comment.png") no-repeat left center;
                            background-size: auto 11px;
                            text-align: left;
                        }
                        .read{
                            background-image: url($url+"articles_consult.png");
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
