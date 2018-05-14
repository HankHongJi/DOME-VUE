<template>
    <div class="navigation">
        <div class="catalog" flex="box:mean">
            <router-link to='/mail' key='1'>消息</router-link>
            <router-link to='/myApp' key='2'>我的应用</router-link>
            <router-link to='/home' key='3'>首页</router-link>
            <router-link to='/shop' key='4'>应用商店</router-link>
            <router-link to='/setting' key='5'>设置</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navigation',
    data () {
        return {
            activeClass:''
        }
    },
    methods:{
    },
    watch:{
        $route(){
            if(this.$route.path=='/'){
                this.activeClass = 'router-link-active'
            }else{
                this.activeClass =''
            }
        }
    }

}
</script>m
<style lang="scss" type="text/css" scoped>
    .navigation{
        .catalog{
            position: fixed;
            left:0 ;
            right: 0;
            bottom: 0;
            z-index: 999;
            height: 50px;
            border-top:1px solid #b2b2b2;
            color: #666666;
            line-height: 1;
            background: #f9f9f9;
            a{
                padding-top: 32px;
            }
            a:nth-child(1){
                background: url("../assets/home_news_icon.png") no-repeat center 6px;
                background-size: 20px auto;
            }
            a:nth-child(2){
                background: url("../assets/home_use_icon.png") no-repeat center 6px;
                background-size: 19px auto;
                &.router-link-active{
                    background: url("../assets/home_use_icon_a.png") no-repeat center 5px;
                    background-size: 24px auto;
                }
            }
            a:nth-child(3){
                background: url("../assets/home_home_icon.png") no-repeat center 6px;
                background-size: 20px auto;
                &.router-link-active{
                    background: url("../assets/home_home_selected_icon.png") no-repeat center 5px;
                    background-size: 25px auto;
                }
            }
            a:nth-child(4){
                background: url("../assets/home_store_icon.png") no-repeat center 6px;
                background-size: 19px auto;
                &.router-link-active{
                    background: url("../assets/home_store_icon_a.png") no-repeat center 5px;
                    background-size: 24px auto;
                }
            }
            a:nth-child(5){
                background: url("../assets/home_set_icon.png") no-repeat center 6px;
                background-size: 19px auto;
                &.router-link-active{
                    background: url("../assets/home_set_icon_a.png") no-repeat center 5px;
                    background-size: 24px auto;
                }
            }
            .router-link-active{
                color:#4585f4;
            }
        }

    }
</style>
