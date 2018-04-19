let Tool = {}
import store from '@/store'   //引入vuex


/*************************************函数扩展**************************************/

/**
 * 删除数组中的其中一项
 * let arr = [1,2,3,55]
 * let item = 3
 * arr.remove(item)
 *@param {Array} 数组arr
 *@param {*} 数组中的某一项item
 */
Array.prototype.remove = function (val) {
    for (let i = 0; i < this.length;) {
        if (this[i] == val) {
            this.splice(i, 1);
        } else {
            i++;
        }
    }
};
/**
 * 小数转百分比
 * let n=0.1
 * arr.toPercent()
 * @param {Number} 数字n
 */
Number.prototype.toPercent = function(){
    return (Math.round(this * 10000)/100).toFixed(2) + '%';
}

/**
 * 时间对象格式转换
 * let time=new Date()
 * let format = "yyyy-MM-dd hh:mm:ss"
 * let str=time.format(format)
 * @param {Date} 时间对象time
 * @param {String} 时间转换格式format
 *
 */
Date.prototype.format = function (format) {
    let o={
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format))format=format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o){
        if (new RegExp("(" + k + ")").test(format)){
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            return format;
        }
    }
};

/******************************************功能函数*******************************************/

/**
 * 字符串数组转BASE64
 * let buffer='[137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 80, 0, 0, 0, 30, 8, 3, 0, 0, 0,…]'
 * let BASE64=Tool.arrayBufferToBase64(buffer)
 * @param {String} 时间转换格式buffer
 *
 */
Tool.arrayBufferToBase64= function (buffer) {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return  'data:image/png;base64,' + window.btoa(binary);
};


/*************************************MUTATIONS常用函数**************************************/
Tool.SET_STATE=function(opt){
    store.commit('SET_STATE',opt);
}
Tool.ALERT=function(opt){
    store.commit('ALERT',opt);
}
Tool.CONFIRM=function(opt){
    store.commit('CONFIRM',opt);
}

/****************************************Storage************************************/
Tool.setStore=function(key,val){
    sessionStorage.setItem(key,JSON.stringify(val))
};
Tool.getStore=function(key){
    return JSON.parse(sessionStorage.getItem(key));
};


export default Tool
export {Tool}
