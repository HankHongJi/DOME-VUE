<template>
    <div class="back-top" :class="{show:scroll>150}" @click="gotop">
    </div>
</template>
<script>
export default {
    name: 'back-top',
    data () {
        return {
            scroll:0
        }
    },
    props:['scrollTop'],
    methods:{
        gotop(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    },
    created(){
        window.addEventListener('scroll',()=>{
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
        })
    },

}
</script>
<style lang="scss" type="text/css" scoped>
    .back-top{
        width: 50px;
        height: 50px;
        background:url("../assets/icon_backtop.png") rgba(0,0,0,0.7) no-repeat center;
        background-size:23px auto;
        position: fixed;
        z-index: 999;
        right: 18px;
        bottom: 30px;
        border-radius: 50%;
        opacity: 0;
        // visibility: hidden;
        transition: all 0.3s;
        &.show{
            opacity: 1;
            // visibility: visible;
        }
    }
</style>
