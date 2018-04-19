import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
// import {platformId} from "@/config/env";
Vue.use(Vuex);
const state={
    loading:false,    //加载动画
    alert:[],
    confirm:null
};

export default new Vuex.Store({state,getters,actions,mutations,});

