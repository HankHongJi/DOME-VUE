 <template>
	<div class='alert-box'>
        <transition v-for='(item,index) in alert' :key='index' name="fade" mode="out-in" appear>
            <div class="msgalert" v-if="item.show" flex='box:justify'>
                <span class="icon" :class="item.type?icons[item.type]:'icon-complete'"></span>
                <div>{{item.text}}</div>
                <span class="icon icon-cha close" @click='item.show=false'></span>
            </div>
        </transition>
	</div>
</template>

<script>
/*
*   alert提示窗
*{
    example
        let a = '城管灌灌灌灌灌'
        let b = 'warn'
        this.$tool.ALERT({text:a,type:b});
}
*@param {String} a 字符串a
*@param {String} b 字符串b  ('success','warn','error','news') 四选一
*
*hank 2018.4.17
*
*/
import {mapState} from 'vuex'
export default {
    name: 'msgalert',
    data () {
        return {
            icon:'icon-complete',
            icons:{
                success:'icon-complete',
                warn:'icon-jinggao',
                error:'icon-404cuowu',
                news:'icon-sysInfo-copy'
            }
        };
    },
    computed:{
        ...mapState(['alert'])
    },
};
</script>

<style  lang="scss" scoped>
	.msgalert{
		box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);
		min-width: 300px;
		border-radius: 2px;
        position: fixed;
        height: 41px;
        line-height: 41px;
		left: 50%;
		top: 30px;
		transform:translate3d(-50%,0,0);
		background-color: #fff;
		opacity: 1;
		overflow: hidden;
		z-index: 9999;
		span{
            font-size: 18px;
            height: 100%;
            width: 41px;
		}
		div{
			padding-left: 10px;
            font-size: 14px;
            text-align: left;
		}
		span.icon-complete{
			left: 0;
			background: #13ce66;
			color:#fff;
		}
		span.icon-jinggao{
			left: 0;
			background: #f7ba2a;
			color:#fff;
		}
		span.icon-sysInfo-copy{
			left: 0;
			background: #50bfff;
			color:#fff;
		}
		span.icon-404cuowu{
			left: 0;
			background: #ff4949;
			color:#fff;
        }

    }
    .fade-enter-active, .fade-leave-active {
        transition: all 0.3s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
        top:-50px;
    }
</style>
