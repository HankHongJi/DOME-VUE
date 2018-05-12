<template>
    <div class="notice">
        <back-title title="公告"></back-title>
        <div class="banner"></div>
        <div class="list">
            <router-link tag="div" :to="{path:'/article',query:{id:item.id,title:'公告'}}" class="item" v-for="(item,index) in notice" :key="index">
                <div class="title">
                    {{item.title}}
                </div>
                <div class="other" flex="main:justify">
                    <span>{{item.creatTime}}</span>
                    <span class="read">{{item.read}}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'notice',
    data () {
        return {
            notice:[
                {id:'001',title:'关于采购共享服团内进行公开招聘的通知',creatTime:'2018-04-11 09:28:19',read:22},
                {id:'002',title:'关于集团公司巡视工作办公室面向系统内公开招聘的通知',creatTime:'2018-04-11 09:28:19',read:222},
                {id:'003',title:'喜报@德宏分公司被属地评定为2017年度党风廉政建设责任制检...',creatTime:'2018-04-11 09:28:19',read:232},
                {id:'004',title:'关于采购共享服务中心面向集团内进行公开招聘的通知',creatTime:'2018-04-11 09:28:19',read:223},
                {id:'004',title:'关于采购共享服务中心面向集团内进行公开招聘的通知',creatTime:'2018-04-11 09:28:19',read:223},
                {id:'004',title:'关于采购共享服务中心面向集团内进行公开招聘的通知',creatTime:'2018-04-11 09:28:19',read:223},
                {id:'004',title:'关于采购共享服务中心面向集团内进行公开招聘的通知',creatTime:'2018-04-11 09:28:19',read:223},
                {id:'004',title:'关于采购共享服务中心面向集团内进行公开招聘的通知',creatTime:'2018-04-11 09:28:19',read:223},
                {id:'004',title:'关于采购共享服务中心面向集团内进行公开招聘的通知',creatTime:'2018-04-11 09:28:19',read:223},
            ]
        }
    },
    methods:{
    },
    mounted(){
    },

}
</script>
<style lang="scss" scoped>
    $url:'../../assets/';
    .notice{
        .banner{
            width: 100%;
            height: 2.5rem;
            background:url($url+"notice_banner.png") no-repeat;
            background-size: 100% auto;
            margin-bottom: 10px;
        }
        .list{
            padding: 0 18px;
            background: #fff;
            overflow: auto;
            text-align: left;
            .item{
                padding: 15px 0;
                min-height: 105px;
                border-bottom: 1px solid #e5e5e5;
                position: relative;
                .title{
                    font-size: 16px;
                }
                .other{
                    position: absolute;
                    width: 100%;
                    bottom: 15px;
                    left: 0;
                    color: #999999;
                    .read{
                        padding-left: 16px;
                        background:url($url+"icon_read.png") no-repeat left center;
                        background-size: 14px auto;
                    }
                }
                &:nth-last-child(1){
                    border-bottom: 0;
                }
            }
        }
    }
</style>
