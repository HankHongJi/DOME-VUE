import socketVue from '@/tool/socket-vue'
import config from '@/tool/config'
import store from '@/store'
/****************************************创建ws对象************************************/
let WS= new socketVue(config,store);
let api = {};

/***************************************心机包***************************************/
//用于验证玩家webSocket链接是否有效。
api.authenticate = function(service,data){
    return WS.send({
        service:service,
        functionName:'authenticate',
        data:data
    })
}

/***************************************平台***************************************/
api.searchConsumptionRecord = function(data){
    return WS.send({
        service:'platform',
        functionName:'searchConsumptionRecord',
        data:data
    })
}

export default api
