<template>
    <div class="setting">
        <user-info :info="userInfo"></user-info>
        <div class="navs">
            <div class="item" flex="box:first">
                <div class="icon icon_gx"></div>
                <div class="text" flex="main:justify">
                    <div class="name">检查更新</div>
                    <span>当前版本: 4.0.1</span>
                </div>
            </div>
            <div class="item" flex="box:first">
                <div class="icon icon_hc"></div>
                <div class="text" flex="main:justify">
                    <div class="name">清除缓存</div>
                    <span></span>
                </div>
            </div>
            <div class="item" flex="box:first">
                <div class="icon icon_sz"></div>
                <div class="text" flex="main:justify">
                    <div class="name">安全设置</div>
                    <span></span>
                </div>
            </div>
        </div>
        <div class="navs">
            <div class="item" flex="box:first">
                <div class="icon icon_sj"></div>
                <div class="text" flex="main:justify">
                    <div class="name">社交分享</div>
                    <span></span>
                </div>
            </div>
        </div>
        <div class="navs">
            <div class="item" flex="box:first">
                <div class="icon icon_yj"></div>
                <div class="text" flex="main:justify">
                    <div class="name">意见与建议</div>
                    <span></span>
                </div>
            </div>
        </div>
        <div class="sign_out">退出系统</div>
    </div>
</template>

<script>
import UserInfo from '@/components/UserInfo'

import userInfoHead from '@/assets/user_info_head.png'
export default {
    name: 'setting',
    data () {
        return {
            userInfo:{
                headImg:userInfoHead,
                name:'戴越灵',
                userId:46008765,
                department:'云南移动/信息技术部/信息系统室'
            }
        }
    },
    components:{UserInfo},
    methods:{

    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
    $url:'../../assets/';
    .setting{
        .navs{
            overflow: auto;
            margin-bottom: 10px;
            .item{
                height: 50px;
                background:#fff;
                line-height: 50px;
                .icon{
                    width: 56px;
                    height: 50px;
                    &.icon_gx{
                        background:url($url+"icon_gx.png") no-repeat center;
                        background-size: 17px auto;
                    }
                    &.icon_yj{
                        background:url($url+"icon_yj.png") no-repeat center;
                        background-size: 17px auto;
                    }
                    &.icon_hc{
                        background:url($url+"icon_hc.png") no-repeat center;
                        background-size: 16px auto;
                    }
                    &.icon_sj{
                        background:url($url+"icon_sj.png") no-repeat center;
                        background-size: 19px auto;
                    }
                    &.icon_sz{
                        background:url($url+"icon_sz.png") no-repeat center;
                        background-size: 16px auto;
                    }
                }
                .text{
                    padding-right: 18px;
                    border-bottom: 0.5px solid #e5e5e5;
                    div.name{
                        font-size: 16px;
                    }
                    span{
                        color: #999;
                        background: url($url+"icon_go.png") no-repeat right center;
                        background-size: 8px auto;
                        padding-right: 20px;
                    }
                }
            }
        }
        .navs .item:nth-last-child(1){
            .text{
                border-bottom:none;
            }
        }
        .sign_out{
            font-size: 16px;
            height: 50px;
            background: #fff;
            line-height: 50px;
        }
    }
</style>
