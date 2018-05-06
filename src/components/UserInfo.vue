<template>
    <div class="user_info" flex="dir:top cross:center">
        <div class="imgbox"><img :src="info.headImg" alt=""></div>
        <h3>{{info.name}}</h3>
        <p style="font-size:16px">{{info.userId}}</p>
        <p>{{info.department}}</p>
    </div>
</template>

<script>

export default {
    name: 'user_info',
    data () {
        return {
            text:"awfafafw"
        }
    },
    props:['info'],
    methods:{

    },
    mounted(){
    },

}
</script>
<style lang="scss" type="text/css" scoped>
    .user_info{
        height: 240px;
        background: #4b8bf6;
        color: #fff;
        .imgbox{
            width:87px;
            height: 87px;
            border-radius: 50%;
            border: 3px solid #83b1ef;
            overflow: hidden;
            margin-top: 36px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        h3,p{
            line-height: 1;
            padding-top: 9px;
            font-size: 14px;
        }
        h3{
            font-size: 20px;
        }
    }
</style>
