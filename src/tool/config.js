/**
 * 配置编译环境和线上环境之间的切换
 *
 * activeServer: 当前ws地址
 * cstest: 客服测试ws地址
 * devtest: 开发测试ws地址
 * platformId: 平台ID
 *
 */

let config={};
let     protocol = 'ws://';
const	cstest ='bbetasia-fpms-web.neweb.me/websocket';
// let   devtest ='ws://bbetasia-devtest-web.neweb.me/websocket';
let     devtest ='192.168.10.199:9280';
devtest = cstest;
let     activeServer = devtest;
if(location.protocol=="https:"){
    protocol='wss://'
}
if((!location.port || location.port =='80') && 'bbetasia-devtest-web.neweb.me' != location.hostname){
    activeServer= location.hostname +'/websocket';
    platformPlayerPrefix='w';
}
activeServer = protocol+activeServer;
config.url=activeServer;
config.platformId=8;
config.prefix='p';

export default config
