<template>
    <div class="clause">
        <div>条款</div>
        <div class="swiper-box">
            <swipe class="my-swipe" @change='fun' :defaultIndex='2'>
                <swipe-item v-for="(item,index) in swiperData" :key="index"><img :src="item.src" alt="轮播"></swipe-item>
            </swipe>
        </div>
    </div>
</template>

<script>
import Swiper from '@/components/Swiper.vue'
import banner1 from '@/assets/swiper/banner1.jpg'
import banner2 from '@/assets/swiper/banner2.jpg'
import banner3 from '@/assets/swiper/banner3.jpg'
import { Swipe, SwipeItem } from 'vue-swipe'
export default {
    name: 'clause',
    data () {
        return {
            swiperData:[
                {src:banner1,name:'轮播1'},
                {src:banner2,name:'轮播2'},
                {src:banner3,name:'轮播3'}
            ]

        }
    },

    components:{
        Swipe,SwipeItem
    },
    methods:{
        fun(index){
            console.log(index)
        }
    },
    mounted(){
    },

}
</script>
<style lang="scss">
    .swiper-box{
        width: 100%;
        height: 3.75rem;
        background: red;
        img{
            width: 100%;
            height: 3.75rem;
        }
        .mint-swipe-indicator{
            width: 12px;
            height: 12px;
            opacity:0.7;
        }
        .is-active{

        }
    }
</style>
