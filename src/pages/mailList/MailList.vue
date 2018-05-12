<template>
    <div class="mail_list">
        <back-title title="通讯录"></back-title>
        <div class="input_box">
            <input type="text" placeholder="请输入姓名/工号进行查找">
        </div>
        <div class="navs">
            <div class="item" @click="tab(index)" v-for="(item,index) in mailList" :class="{active:index==active}" :key="index">
                {{item.name}}
            </div>
            <div class="active_bar" :style="{left:((active*2+1)/6).toPercent()}"></div>
        </div>
        <div class="mail_list" v-if='activeList'>
            <list-mail :list="activeList"></list-mail>
        </div>
        <div class="unit_list" v-else>
            <div class="item leader" flex="cross:center box:first">
                <span></span>
                <div class="content" flex="box:last">
                    <span @click="exchange(mailList[active].leader)">公司领导 ({{mailList[active].leader.length}})</span>
                    <div></div>
                </div>
            </div>
            <div class="item" flex="box:first" v-for="(item,index) in mailList[active].unitList" :key="index">
                <span :class="item.status? 'icon_open':'icon_close'"></span>
                <div class="content" flex="dir:top">
                    <span @click="item.status =!item.status" >{{item.name}}</span>
                    <ListUnit v-if="item.status" @change="change"  :list="item.department"></ListUnit>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import ListMail from '@/components/ListMail'
import articleImg from '@/assets/article_img.png'
import useHead1 from '@/assets/user_head_img1.png'
import useHead2 from '@/assets/user_head_img2.png'
import ListUnit from '@/components/ListUnit'
export default {
    name: 'mail_list',
    data () {
        return {
            active:0,
            activeList:null,
            latelyList:[
                {
                    userId:666,
                    headSrc:useHead1,
                    name:'撒倩',
                    phoneNumber:'13908700001'
                },
                {
                    userId:777,
                    headSrc:useHead2,
                    name:'李敏',
                    phoneNumber:'13908700002'
                },
                {
                    userId:777,
                    headSrc:useHead1,
                    name:'张珂',
                    phoneNumber:'13908700003'
                },
                {
                    userId:666,
                    headSrc:useHead2,
                    name:'季晓三',
                    phoneNumber:'13908700004'
                },
                {
                    userId:777,
                    headSrc:useHead1,
                    name:'撒倩',
                    phoneNumber:'13908700005'
                }
            ],
            mailList:[
                {
                    name:'省公司',
                    leader:[
                        {
                            headSrc:useHead1,
                            name:'撒倩',
                            phoneNumber:'13908700001'
                        },
                        {
                            headSrc:useHead2,
                            name:'李敏',
                            phoneNumber:'13908700002'
                        },
                        {
                            headSrc:useHead1,
                            name:'张珂',
                            phoneNumber:'13908700003'
                        },
                        {
                            headSrc:useHead2,
                            name:'季晓三',
                            phoneNumber:'13908700004'
                        },
                        {
                            headSrc:useHead1,
                            name:'撒倩',
                            phoneNumber:'13908700005'
                        }
                    ],
                    unitList:[
                        {
                            name:'客户体验管理部',
                            status:false,
                            department:[
                                {
                                    name:'部门领导',
                                    list:[
                                        {
                                            headSrc:useHead1,
                                            name:'撒倩',
                                            phoneNumber:'13908700001'
                                        },
                                        {
                                            headSrc:useHead2,
                                            name:'李敏',
                                            phoneNumber:'13908700002'
                                        },
                                        {
                                            headSrc:useHead1,
                                            name:'张珂',
                                            phoneNumber:'13908700003'
                                        }
                                    ]
                                },
                                {
                                    name:'市场策划管理室',
                                    list:[
                                        {
                                            headSrc:useHead1,
                                            name:'撒倩',
                                            phoneNumber:'13908700001'
                                        },
                                        {
                                            headSrc:useHead2,
                                            name:'李敏',
                                            phoneNumber:'13908700002'
                                        },
                                        {
                                            headSrc:useHead1,
                                            name:'张珂',
                                            phoneNumber:'13908700003'
                                        }
                                    ]
                                },
                                {
                                    name:'家庭客户运营室',
                                    list:[
                                        {
                                            headSrc:useHead1,
                                            name:'撒倩',
                                            phoneNumber:'13908700001'
                                        },
                                        {
                                            headSrc:useHead2,
                                            name:'李敏',
                                            phoneNumber:'13908700002'
                                        },
                                        {
                                            headSrc:useHead1,
                                            name:'张珂',
                                            phoneNumber:'13908700003'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name:'客户体验管理部',
                            status:false,
                            department:[
                                {
                                    name:'部门领导',
                                    list:[
                                        {
                                            headSrc:useHead1,
                                            name:'撒倩',
                                            phoneNumber:'13908700001'
                                        },
                                        {
                                            headSrc:useHead2,
                                            name:'李敏',
                                            phoneNumber:'13908700002'
                                        },
                                        {
                                            headSrc:useHead1,
                                            name:'张珂',
                                            phoneNumber:'13908700003'
                                        }
                                    ]
                                },
                                {
                                    name:'市场策划管理室',
                                    list:[
                                        {
                                            headSrc:useHead1,
                                            name:'撒倩',
                                            phoneNumber:'13908700001'
                                        },
                                        {
                                            headSrc:useHead2,
                                            name:'李敏',
                                            phoneNumber:'13908700002'
                                        },
                                        {
                                            headSrc:useHead1,
                                            name:'张珂',
                                            phoneNumber:'13908700003'
                                        }
                                    ]
                                },
                                {
                                    name:'家庭客户运营室',
                                    list:[
                                        {
                                            headSrc:useHead1,
                                            name:'撒倩',
                                            phoneNumber:'13908700001'
                                        },
                                        {
                                            headSrc:useHead2,
                                            name:'李敏',
                                            phoneNumber:'13908700002'
                                        },
                                        {
                                            headSrc:useHead1,
                                            name:'张珂',
                                            phoneNumber:'13908700003'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name:'市场经营部',
                            status:false,
                            department:[
                                {
                                    name:'部门领导',
                                    list:[
                                        {
                                            headSrc:useHead1,
                                            name:'撒倩',
                                            phoneNumber:'13908704440001'
                                        },
                                        {
                                            headSrc:useHead2,
                                            name:'李敏',
                                            phoneNumber:'13908700444002'
                                        },
                                        {
                                            headSrc:useHead1,
                                            name:'张珂',
                                            phoneNumber:'13908704440003'
                                        }
                                    ]
                                },
                                {
                                    name:'市场策划管理室',
                                    list:[
                                        {
                                            headSrc:useHead1,
                                            name:'撒倩',
                                            phoneNumber:'13908700444001'
                                        },
                                        {
                                            headSrc:useHead2,
                                            name:'李敏',
                                            phoneNumber:'13908744400002'
                                        },
                                        {
                                            headSrc:useHead1,
                                            name:'张珂',
                                            phoneNumber:'13908733300003'
                                        }
                                    ]
                                },
                                {
                                    name:'家庭客户运营室',
                                    list:[
                                        {
                                            headSrc:useHead1,
                                            name:'撒倩',
                                            phoneNumber:'2423r2321'
                                        },
                                        {
                                            headSrc:useHead2,
                                            name:'李敏',
                                            phoneNumber:'2323'
                                        },
                                        {
                                            headSrc:useHead1,
                                            name:'张珂',
                                            phoneNumber:'1390872400003'
                                        },
                                        {
                                            headSrc:useHead1,
                                            name:'张珂',
                                            phoneNumber:'1390870032003'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name:'地州公司',
                    leader:[
                        {
                            headSrc:useHead1,
                            name:'撒倩',
                            phoneNumber:'13908700001'
                        },
                        {
                            headSrc:useHead2,
                            name:'李敏',
                            phoneNumber:'13908700002'
                        },
                        {
                            headSrc:useHead1,
                            name:'张珂',
                            phoneNumber:'13908700003'
                        }
                    ],
                    unitList:[
                        {
                            name:'客户体验管理部',
                            status:true,
                            department:[
                                {
                                    name:'部门领导',
                                    list:[
                                        {
                                            headSrc:useHead1,
                                            name:'撒倩',
                                            phoneNumber:'13908700001'
                                        },
                                        {
                                            headSrc:useHead2,
                                            name:'李敏',
                                            phoneNumber:'13908700002'
                                        },
                                        {
                                            headSrc:useHead1,
                                            name:'张珂',
                                            phoneNumber:'13908700003'
                                        }
                                    ]
                                },
                                {
                                    name:'市场策划管理室',
                                    list:[
                                        {
                                            headSrc:useHead1,
                                            name:'撒倩',
                                            phoneNumber:'13908700001'
                                        },
                                        {
                                            headSrc:useHead2,
                                            name:'李敏',
                                            phoneNumber:'13908700002'
                                        },
                                        {
                                            headSrc:useHead1,
                                            name:'张珂',
                                            phoneNumber:'13908700003'
                                        }
                                    ]
                                },
                                {
                                    name:'家庭客户运营室',
                                    list:[
                                        {
                                            headSrc:useHead1,
                                            name:'撒倩',
                                            phoneNumber:'13908700001'
                                        },
                                        {
                                            headSrc:useHead2,
                                            name:'李敏',
                                            phoneNumber:'13908700002'
                                        },
                                        {
                                            headSrc:useHead1,
                                            name:'张珂',
                                            phoneNumber:'13908700003'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name:'客户体验管理部',
                            status:false,
                            department:[
                                {
                                    name:'部门领导',
                                    list:[
                                        {
                                            headSrc:useHead1,
                                            name:'撒倩',
                                            phoneNumber:'13908700001'
                                        },
                                        {
                                            headSrc:useHead2,
                                            name:'李敏',
                                            phoneNumber:'13908700002'
                                        },
                                        {
                                            headSrc:useHead1,
                                            name:'张珂',
                                            phoneNumber:'13908700003'
                                        }
                                    ]
                                },
                                {
                                    name:'市场策划管理室',
                                    list:[
                                        {
                                            headSrc:useHead1,
                                            name:'撒倩',
                                            phoneNumber:'13908700001'
                                        },
                                        {
                                            headSrc:useHead2,
                                            name:'李敏',
                                            phoneNumber:'13908700002'
                                        },
                                        {
                                            headSrc:useHead1,
                                            name:'张珂',
                                            phoneNumber:'13908700003'
                                        }
                                    ]
                                },
                                {
                                    name:'家庭客户运营室',
                                    list:[
                                        {
                                            headSrc:useHead1,
                                            name:'撒倩',
                                            phoneNumber:'13908700001'
                                        },
                                        {
                                            headSrc:useHead2,
                                            name:'李敏',
                                            phoneNumber:'13908700002'
                                        },
                                        {
                                            headSrc:useHead1,
                                            name:'张珂',
                                            phoneNumber:'13908700003'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name:'市场经营部',
                            status:false,
                            department:[
                                {
                                    name:'部门领导',
                                    list:[
                                        {
                                            headSrc:useHead1,
                                            name:'撒倩',
                                            phoneNumber:'13908700001'
                                        },
                                        {
                                            headSrc:useHead2,
                                            name:'李敏',
                                            phoneNumber:'13908700002'
                                        },
                                        {
                                            headSrc:useHead1,
                                            name:'张珂',
                                            phoneNumber:'13908700003'
                                        }
                                    ]
                                },
                                {
                                    name:'市场策划管理室',
                                    list:[
                                        {
                                            headSrc:useHead1,
                                            name:'撒倩',
                                            phoneNumber:'13908700001'
                                        },
                                        {
                                            headSrc:useHead2,
                                            name:'李敏',
                                            phoneNumber:'13908700002'
                                        },
                                        {
                                            headSrc:useHead1,
                                            name:'张珂',
                                            phoneNumber:'13908700003'
                                        }
                                    ]
                                },
                                {
                                    name:'家庭客户运营室',
                                    list:[
                                        {
                                            headSrc:useHead1,
                                            name:'撒倩',
                                            phoneNumber:'13908700001'
                                        },
                                        {
                                            headSrc:useHead2,
                                            name:'李敏',
                                            phoneNumber:'13908700002'
                                        },
                                        {
                                            headSrc:useHead1,
                                            name:'张珂',
                                            phoneNumber:'13908700003'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name:'最近联系人',
                    list:[
                        {
                            headSrc:useHead1,
                            name:'撒倩',
                            phoneNumber:'13908700001'
                        },
                        {
                            headSrc:useHead2,
                            name:'李敏',
                            phoneNumber:'13908700002'
                        },
                        {
                            headSrc:useHead1,
                            name:'张珂',
                            phoneNumber:'13908700003'
                        },
                        {
                            headSrc:useHead2,
                            name:'季晓三',
                            phoneNumber:'13908700004'
                        },
                        {
                            headSrc:useHead1,
                            name:'撒倩',
                            phoneNumber:'13908700005'
                        }
                    ]
                },
            ]
        }
    },
    components:{
        ListMail,ListUnit
    },
    methods:{
        exchange(list){
            this.activeList=list;
        },
        change(list){
            this.activeList=list;
        },
        tab(index){
            this.active = index;
            if(index==2){
                this.activeList = this.latelyList;
            }else{
                this.activeList = null;
            }
        }
    },
    mounted(){

    }

}
</script>
<style lang="scss" scoped>
    $url:'../../assets/';
    .mail_list{
        .unit_list{
            border-top: 1px solid #dddddd;
            background: #fff;
            padding-left: 18px;
            .item{
                min-height: 45px;
                &.leader{
                    >span{
                        background:url($url+"icon_leader.png") no-repeat center;
                        background-size: auto 12px;
                    }
                    .content{
                        padding-right: 18px;
                        div{
                            width: 44px;
                            height: 44px;
                            background: url($url+"icon_go.png") no-repeat right center;
                            background-size: 8px auto;
                        }
                    }
                }
                >span{
                    display: block;
                    width: 27px;
                    height: 45px;
                    &.icon_open{
                        background: url($url+"icon_open.png") no-repeat center;
                        background-size: 16px auto;
                    }
                    &.icon_close{
                        background: url($url+"icon_close.png") no-repeat center;
                        background-size: 16px auto;
                    }
                }
                .content{
                    text-align: left;
                    color: #212121;
                    min-height: 45px;
                    line-height: 44px;
                    border-bottom: 1px solid #ebebeb;
                }
            }
        }
        .input_box{
            height: 50px;
            background: #fff;
            padding: 9px 18px;
            input{
                display: block;
                border-radius: 20px;
                width: 100%;
                height: 100%;
                background: url($url+"icon_search.png") #f4f4f4 no-repeat 10px center;
                background-size:15px auto ;
                border: 0;
                padding-left: 33px;
            }
        }
        .navs{
            height: 44px;
            line-height: 44px;
            background: #fff;
            position: relative;
            div.item{
                font-size: 16px;
                height: 100%;
                width: 33.33%;
                float: left;
                transition: all 0.1s;
                position: relative;
                color: #676767;
                input{
                    display: block;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    opacity: 0;
                }
            }
            div.active{
                color: #4585f4;
                font-size: 16px;
                position: relative;
            }
            .active_bar{
                width: 21px;
                height: 3px;
                border-radius: 5px;
                background: #4585f4;
                position: absolute;
                margin-left: -11px;
                bottom: 5px;
                transition: all 0.3s;
            }
        }
        .news_list{
            background: #fff;
        }
    }
</style>
