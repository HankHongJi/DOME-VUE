<template>
    <ul class="list_unit">
        <li flex="main:justify cross:center box:justify" @click="$emit('change', item.list)" v-for="(item,index) in list" :key="index">
            {{item.name+' ('+ item.list.length+')'}}
        </li>
    </ul>
</template>

<script>
import articleImg from '@/assets/article_img.png'
export default {
    name: 'list_unit',
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
    .list_unit{
        li{
            height: 45px;
            background:url($url+"icon_go.png") no-repeat left center;
            background-size: 8px auto;
            color: #212121;
            padding-left: 22px;
        }
    }
</style>
