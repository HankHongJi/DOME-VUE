import {SET_STATE,MSG,ALERT,CONFIRM,REGISTER,LOGOUT} from './mutation-types.js';
import  {Tool} from "@/tool/index.js";
/* eslint-disable */
export default {
    [SET_STATE](state,{name,content,sub}){
        sub?state[name][sub] = content : state[name] = content;
    },
	[ALERT](state,data){
        data.show=true;
        state.alert.push(data);
        setTimeout(()=>{
            state.alert.remove(data)
        },2000)
	},
	[CONFIRM](state,data){
		// if(state.confirm.length >0  && data.text==state.confirm[state.confirm.length-1].text){
		// 	return;
        // }
        // console.log(66666666)
		if(!state.confirm){
            state.confirm=data;
        }else if(state.confirm &&data.important){
            state.confirm=null;
            setTimeout(()=>{
                state.confirm=data;
            },200)
        }
	},
	[REGISTER](state,data=true){
		state.mask=data;
	},
	//用户登录，设置登录信息
	[LOGOUT](state,data){
	},
}
