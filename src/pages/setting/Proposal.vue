<template>
    <div class="proposal">
        <back-title title="意见与建议"></back-title>
        <text-from maxNum='400' v-model="fromData" textareaPlaceholder='请仔细描述你的问题'></text-from>
        <div class="btn" @click="send">提交</div>
    </div>
</template>

<script>

import TextFrom from '@/components/TextFrom'
export default {
    name: 'proposal',
    data () {
        return {
            maxNum:400,
            fromData:{
                title:null,
                content:null,
            },
            content:'555'
        }
    },
    components:{TextFrom},
    methods:{
        send(){
            console.log(this.fromData)
        }
    },
    mounted(){

    },
    computed: {
        // currentNum:vm=>this.content.length
    }
}
</script>


<style lang="scss" scoped>
    $url:'../../assets/';
    .proposal{
        .btn{
            height: 48px;
            line-height: 48px;
            font-size: 16px;
            margin: 18px;
            width: auto;
        }
    }
</style>
