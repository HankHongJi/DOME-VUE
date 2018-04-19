<template>
    <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide"></div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
export default {
    name: 'swiper',
    data () {
        return {
            text:"awfafafw",
            width:null,
            height:null
        }
    },
    props:['swiperData'],
    methods:{

    },
    mounted(){
        this.width=this.$parent.$el.clientWidth;
        this.height=this.$parent.$el.clientHeight;
        console.log(this.swiperData)
    },

}
</script>
<style lang="scss" type="text/css" scoped>
</style>
