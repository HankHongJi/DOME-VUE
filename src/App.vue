<template>
    <div id="app">
        <transition name="fade" mode="out-in" appear>
            <router-view class="app_content" :style="{marginBottom:navigation?'70px':'0'}"/>
        </transition>
        <navigation v-if="navigation"></navigation>
        <transition name="fade" mode="out-in" appear>
            <loading v-if="loading"></loading>
        </transition>
        <alert></alert>
        <confirm></confirm>
        <back-top v-if="!navigation"></back-top>
    </div>
</template>
<script>
import 'flex.css'
import Navigation from '@/components/Navigation.vue'
import Loading from '@/components/Loading.vue'
import Alert from '@/components/Alert.vue'
import Confirm from '@/components/Confirm.vue'
import {mapState} from 'vuex'
import BackTop from '@/components/BackTop'
export default {
    name: 'App',
    data () {
        return {

        };
    },
    components:{
        Navigation,Loading,Alert,Confirm,BackTop
    },
    computed:{
        ...mapState(['loading','navigation'])
    },
    watch:{
        $route(){
            window.scrollTo(0,0);
        }
    }
}
</script>

<style  lang="scss">
@import "vue-swipe/dist/vue-swipe.css";
//外部公共样式
@import "tool/base.scss";
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        overflow:hidden;
        min-height: 100%;
        _overflow:visible; _zoom:1;
    }
    .app_content{
        overflow:hidden;
         _overflow:visible; _zoom:1;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .25s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
