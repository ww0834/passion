/****************************************
转自大佬
脚本作者：chxm1023
var body = $response.body.replace(/needVerify":true/g, 'needVerify":false').replace(/code":\d+/g, 'code":0');$done({ body });
***************************************/
var body = $response.body.replace(/\"needVerify":\d+/g, '\"needVerify":false').replace(/\"bannerList":\[.+\]/g, '\"bannerList":[]');$done({body});
