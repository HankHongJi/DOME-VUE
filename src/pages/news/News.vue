<template>
    <div class="news">
        <back-title title="新闻列表"></back-title>
        <div class="navs">
            <div class="item" v-for="(item,index) in news" :class="{active:index==active}" :key="index">
                {{item.name}}
                <input type="radio" v-model="active" :value="index" name='nav'/>
            </div>
            <div class="active_bar" :style="{left:((active*2+1)/6).toPercent()}"></div>
        </div>
        <div class="news_list">
            <list-news :list="news[active].list" comment='1' :title="$route.query.title"></list-news>
        </div>
    </div>
</template>

<script>
import ListNews from '@/components/ListNews'
import articleImg from '@/assets/article_img.png'
export default {
    name: 'news',
    data () {
        return {
            active:0,
            news:[
                {
                    name:'最新动态',
                    list:[
                        {
                            title:'中国移动亮相2018世界移动大会，宣布将建世界规模最大5G试验网',
                            createTime:'2018-04-09 07:28',
                            read:111122,
                            comment:386,
                            imgUrl:articleImg
                        },
                        {
                            title:'中国移动建世界规模最大5G试验网',
                            createTime:'2018-04-09 07:28',
                            read:4343,
                            comment:386,
                            imgUrl:articleImg
                        },
                        {
                            title:'中国移动亮相20318世界移动大会，宣布将建世界规模最大5G试验网',
                            createTime:'2018-04-09 07:28',
                            read:433,
                            comment:386,
                            imgUrl:articleImg
                        }
                    ]
                },
                {
                    name:'二级部门',
                    list:[
                        {
                            title:'中国移动大会，宣布将建世界规模最大5G试验网',
                            createTime:'2018-04-09 07:28',
                            read:111122,
                            comment:386,
                            imgUrl:articleImg
                        },
                        {
                            title:'中国移动亮相2015558世界移动大会，宣布将建世界规模最大5G试验网',
                            createTime:'2018-04-09 07:28',
                            read:4343,
                            comment:386,
                            imgUrl:articleImg
                        },
                        {
                            title:'中国移动亮相2016668世界移动大会，宣布将建世界规模最大5G试验网',
                            createTime:'2018-04-09 07:28',
                            read:433,
                            comment:386,
                            imgUrl:articleImg
                        }
                    ]
                },
                {
                    name:'分公司',
                    list:[
                        {
                            title:'中国移动亮相2444018世界移动大会，宣布将建世界规模最大5G试验网',
                            createTime:'2018-04-09 07:28',
                            read:111122,
                            comment:386,
                            imgUrl:articleImg
                        },
                        {
                            title:'中国移动亮相2055建世界试验网',
                            createTime:'2018-04-09 07:28',
                            read:4343,
                            comment:386,
                            imgUrl:articleImg
                        },
                        {
                            title:'中国移动亮相266665018世界规模最大5G试验网',
                            createTime:'2018-04-09 07:28',
                            read:433,
                            comment:386,
                            imgUrl:articleImg
                        }
                    ]
                },
            ]
        }
    },
    components:{
        ListNews
    },
    methods:{
    },
    mounted(){
    },

}
</script>
<style lang="scss" scoped>
    $url:'../../assets/';
    .news{
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
