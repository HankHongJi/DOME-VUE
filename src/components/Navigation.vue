<template>
    <div class="navigation" flex="box:mean">
        <router-link to='/home' key='1' :class="activeClass"><span class="icon icon-shouye"></span><p>首页</p></router-link>
        <router-link to='/clause' key='2'><span class="icon icon-chanpintiaokuan"></span><p>条款</p></router-link>
        <router-link to='/report' key='3'><span class="icon icon-baobiao"></span><p>报表</p></router-link>
        <router-link to='/account' key='4'><span class="icon icon-zhanghu"></span><p>账户</p></router-link>
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
</script>
<style lang="scss" type="text/css" scoped>
    .navigation{
        position: fixed;
        left:0 ;
        right: 0;
        bottom: 0;
        z-index: 999;
        height: 55px;
        border-top:0.5px solid #ccc;
        span{
            font-size: 20px;
        }
        .router-link-active{
            color:blue;
        }
    }
</style>
