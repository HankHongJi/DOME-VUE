<template>
    <div class="mail_info">
        <div class="back" @click="$router.go(-1)"></div>
        <user-info :info="userInfo"></user-info>
        <div class="more_info">
            <div class="item" flex="box:first cross:center">
                <span class="icon_phone"></span>
                <div class="content icon_wx2">{{userInfo.phoneNumber}} <span></span></div>
            </div>
            <div class="item" flex="box:first cross:center">
                <span class="icon_mail"></span>
                <div class="content">{{userInfo.email}}</div>
            </div>
            <div class="item" flex="box:first cross:center">
                <span class="icon_ims"></span>
                <div class="content no_boder">{{userInfo.ims}}</div>
            </div>
        </div>

    </div>
</template>

<script>
import UserInfo from '@/components/UserInfo'
import userInfoHead from '@/assets/user_info_head.png'
export default {
    name: 'mail_info',
    data () {
        return {
            userInfo:{
                headImg:userInfoHead,
                name:'戴越灵',
                userId:46008765,
                department:'云南移动/信息技术部/信息系统室',
                phoneNumber:'13908700001',
                email:'saqian@yn.chinamobile.com',
                ims:'4166161'
            }
        }
    },
    components:{
        UserInfo
    },
    methods:{
    },
    mounted(){

    }

}
</script>
<style lang="scss">
    $url:'../../assets/';
    .mail_info{
        position: relative;
        .back{
            position: absolute;
            width:48px ;
            height: 44px;
            background:url($url+"icon_back2.png") no-repeat center;
            background-size: 12px auto;
            z-index: 99;
        }
        .more_info{
            background: #fff;
            .item{
                height: 60px;
                padding-left: 18px;
                span{
                    width:24px;
                    height: 60px;
                    margin-right: 9px;
                    &.icon_phone{
                        background:url($url+"icon_phone.png") no-repeat center;
                        background-size: 20px auto;
                    }
                    &.icon_mail{
                        background:url($url+"icon_mail.png") no-repeat center;
                        background-size: 20px auto;
                    }
                    &.icon_ims{
                        background:url($url+"icon_ims.png") no-repeat center;
                        background-size: 24px auto;
                    }
                }
                .content{
                    border-bottom: 1px solid #e5e5e5;
                    height: 100%;
                    line-height: 59px;
                    text-align: left;
                    &.icon_wx2{
                        color: #4585f4;
                        span{
                            float: right;
                            width: 21px;
                            height: 59px;
                            background: url($url+"icon_wx2.png") no-repeat center;
                            background-size: 21px auto;
                            margin-right: 18px;
                        }
                    }
                }
                .no_boder{
                    border: 0;
                }
            }
        }
    }
</style>
