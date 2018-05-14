<template>
    <div class="set_share">
        <back-title title="社交分享"></back-title>
        <div class="qr-box">
            <img src="../../assets/qr.png" alt="二维码">
        </div>
        <div class="shares">
            <div class="text">
                <div>分享到</div>
            </div>
            <div class="list" flex="main:justify">
                <div class="item" flex="main:center dir:top cross:center">
                    <div class="icon icon-dx"></div>
                    <p>短信</p>
                </div>
                <div class="item" flex="main:center dir:top cross:center">
                    <div class="icon icon-wx"></div>
                    <p>微信</p>
                </div>
                <div class="item" flex="main:center dir:top cross:center">
                    <div class="icon icon-pyq"></div>
                    <p>朋友圈</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'set_share',
    data () {
        return {
        }
    },
    methods:{

    },
    mounted(){

    }
}
</script>
<style lang="scss">
    $url:'../../assets/';
    .set_share{
        height: 100%;
        .qr-box{
            width: 4rem;
            height: 4rem;
            margin: 64px auto 104px;
            img{
                width: 100%;
                height: 100%;
                box-shadow:0 8px 15px #cddffc;
            }
        }
        .shares{
            padding:  0 38px;
            .text{
                height:20px;
                border-top:1px solid #cccccc;
                position: relative;
                div{
                    position: absolute;
                    width: 98px;
                    background: #fff;
                    left:50%;
                    margin-left: -49px;
                    top: -10px;
                    height: 20px;
                    line-height: 20px;
                    font-size: 16px;
                }
            }
            .list{
                margin-top: 50px;
                text-align: center;
                p{
                    margin-top: 8px;
                }
            }
        }

    }
</style>
