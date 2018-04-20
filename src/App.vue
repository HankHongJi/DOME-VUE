<template>
    <div id="app">
        <transition name="fade" mode="out-in" appear>
            <router-view/>
        </transition>
        <navigation></navigation>
        <transition name="fade" mode="out-in" appear>
            <loading v-if="loading"></loading>
        </transition>
        <alert></alert>
        <confirm></confirm>
    </div>
</template>

<script>
import 'flex.css'
import Navigation from '@/components/Navigation.vue'
import Loading from '@/components/Loading.vue'
import Alert from '@/components/Alert.vue'
import Confirm from '@/components/Confirm.vue'
import {mapState} from 'vuex'
export default {
    name: 'App',
    data () {
        return {

        };
    },
    components:{
        Navigation,Loading,Alert,Confirm
    },
    computed:{
        ...mapState(['loading'])
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
        height: 100%;
        overflow:hidden;
        padding-bottom: 50px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
