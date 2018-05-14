<template>
    <div class="commenting">
        <back-title title="写评论"></back-title>
        <text-from maxNum='400' v-model="fromData" title="no" textareaPlaceholder='请写入评论内容'></text-from>
        <div class="btn" @click="send">提交</div>
    </div>
</template>

<script>

import TextFrom from '@/components/TextFrom'
export default {
    name: 'commenting',
    data () {
        return {
            maxNum:400,
            fromData:{
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


<style lang="scss">
    $url:'../../assets/';
    .commenting{
        .btn{
            height: 48px;
            line-height: 48px;
            font-size: 16px;
            margin: 18px;
            width: auto;
        }
    }
</style>
