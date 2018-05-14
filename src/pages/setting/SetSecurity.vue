<template>
    <div class="set_security">
        <back-title title="安全设置"></back-title>
        <div class="navs">
            <div class="item" flex="main:justify cross:center">
                <div class="name">手势密码</div>
                <div class="swich" :class="{active:setting.gesturePassWord}">
                    <input v-model="setting.gesturePassWord" type="checkbox" />
                </div>
            </div>
            <div class="item" flex="box:first">
                <div class="name">设置手势密码</div>
                <span class="goto"></span>
            </div>
        </div>
        <div class="navs">
            <div class="item" flex="main:justify cross:center">
                <div class="name">指纹密码</div>
                <div class="swich" :class="{active:setting.fingerprintPassWord}">
                    <input v-model="setting.fingerprintPassWord" type="checkbox" />
                </div>
            </div>
        </div>
        <div class="navs">
            <div class="item" flex="main:justify cross:center">
                <div class="name">免密码</div>
                <div class="swich" :class="{active:setting.freePassWord}">
                    <input v-model="setting.freePassWord" type="checkbox" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'setting',
    data () {
        return {
            setting:{
                gesturePassWord:false,
                fingerprintPassWord:false,
                freePassWord:false,
            }
        }
    },
    methods:{

    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
    $url:'../../assets/';
    .set_security{
        .navs{
            overflow: auto;
            margin-top: 10px;
            background:#fff;
            .item{
                height: 50px;
                line-height: 50px;
                margin: 0 18px;
                border-bottom:1px solid #e5e5e5;
                div.name{
                    font-size: 16px;
                }
                .swich{
                    width: 52px;
                    height: 32px;
                    border-radius: 16px;
                    position: relative;
                    border: 1px solid #e5e5e5;
                    transition: all 0.2s;
                    input{
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                        z-index: 99;
                        opacity: 0;
                    }
                    &:after{
                        position: absolute;
                        box-shadow: 1px 0 1px #ccc;
                        top: 50%;
                        left: 0;
                        transform: translate3d(0,-50%,0);
                        display: block;
                        content: "";
                        width: 30px;
                        height: 30px;
                        background: #fff;
                        border-radius: 50%;
                        transition: all 0.2s;
                    }
                }
                .active{
                    background: #4ed964;
                    border: 1px solid #4ed964;
                    &:after{
                        transform: translate3d(20px,-50%,0);
                        box-shadow: none;
                        border: 0;
                    }
                }
                .goto{
                    color: #999;
                    background: url($url+"icon_go.png") no-repeat right center;
                    background-size: 8px auto;
                    padding-right: 20px;
                }
            }
        }
        .navs .item:nth-last-child(1){
            border-bottom: 0;
        }
    }
</style>
