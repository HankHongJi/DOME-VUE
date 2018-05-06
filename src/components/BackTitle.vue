<template>
    <div class="back-title">
        <div class="back" @click="back?$router.push({path:back}):$router.go(-1)"></div>
        {{title}}
    </div>
</template>
<script>
export default {
    name: 'back-title',
    data () {
        return {
        }
    },
    props:{back:String,title:String},
    methods:{
    },
    mounted(){
    },

}
</script>
<style lang="scss" type="text/css" scoped>
    .back-title{
        height: 44px;
        background:url("../assets/icon_back.png") #fff no-repeat 18px center;
        background-size: 12px auto;
        font-size: 18px;
        line-height: 44px;
        font-weight: 900;
        position: relative;
        div.back{
            height: 100%;
            width: 100px;
            position: absolute;
            left: 0;
            top:0;
        }
    }
</style>
