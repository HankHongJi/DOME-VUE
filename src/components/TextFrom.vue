<template>
    <div class="text_from">
        <div class="from_box">
            <div class="title" v-if="!title">
                <input type="text" @change="change" v-model="fromData.title" placeholder="标题">
            </div>
            <div class="text">
                <textarea type="textarea"  @input="change"  v-model="fromData.content" :placeholder="textareaPlaceholder"></textarea>
                <div>{{currentNum}}</div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'text_from',
    data () {
        return {
            content:'666',
            fromData:{
                title:null,
                content:'',
            },
        }
    },
    props:['maxNum','textareaPlaceholder','title'],
    methods:{
        change(){
            if(this.fromData.content.length>this.maxNum){
                this.fromData.content=this.fromData.content.substring(0,this.maxNum)
            }
            this.$emit('input',this.fromData)
        }
    },
    mounted(){
    },
    computed: {
        currentNum:function(){
            return this.maxNum - this.fromData.content.length
        }
    }

}
</script>
<style lang="scss">
    .from_box{
        background: #fff;
        padding: 0 18px;
        div.title{
            height: 50px;
            line-height: 49px;
            border-bottom: 1px solid #f7f7f7;
        }
        div.text{
            height:210px;
            div{
                text-align: right;
                line-height: 1;
                color: #c0c0c0;
            }
        }
        input{
            height: 100%;
        }
        input,textarea{
            display: block;
            width: 100%;
            padding:10px;
            line-height: 20px;
            border: 0;
            resize:none;
            text-align: justify;
        }
        textarea{
            height: 190px;
        }
    }
</style>
