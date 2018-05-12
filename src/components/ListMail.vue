<template>
    <ul class="list_mail">
        <router-link :to='{path:"/mailInfo",query:{id:item.userId}}' tag="li" flex="main:justify cross:center box:justify" v-for="(item,index) in list" :key="index">
            <div class="head_box">
                <img :src="item.headSrc" alt="">
            </div>
            <div class="text">
                <div class="name">{{item.name}}</div>
                <span>{{item.phoneNumber}}</span>
            </div>
            <div class="tell"></div>
        </router-link>
    </ul>
</template>

<script>
import articleImg from '@/assets/article_img.png'
export default {
    name: 'list_mail',
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
    .list_mail{
        background: #fff;
        padding-left: 18px;
        border-top: 1px solid #e5e5e5;
        li{
            height: 60px;
            border-top: 1px solid #e5e5e5;
            .head_box{
                width: 51px;
                height: 100%;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .text{
                text-align: left;
                padding-left: 10px;
                div{
                    color: #212121;
                    font-size: 16px;
                }
                span{
                    color: #999999;
                }
            }
            .tell{
                height: 22px;
                width: 51px;
                background: url($url+"icon_tell.png") no-repeat 21px center;
                background-size: 15px auto;
                border-left: 1px solid #dddddd;
            }
            &:nth-child(1){
                border:0;
            }
        }
    }
</style>
