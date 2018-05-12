<template>
    <div class="mail" flex="main:center cross:center dir:top">
        <div class="title">vue插件及全局组件DEMO</div>
        <div class="demo">
            <demo></demo>
        </div>
    </div>
</template>

<script>

import Demo from '@/pages/demo/Demo'
export default {
    name: 'mail',
    data () {
        return {
            text:"awfafafw"
        }
    },
    components:{
        Demo
    },
    methods:{

    },
    mounted(){
    },

}
</script>
<style lang="scss" scoped>
    .mail{
        background: #fff;
        .title{
            line-height: 45px;
        }
        .demo{
            width: 100%;
        }
    }
</style>
