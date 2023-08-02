/*
[rewrite_local]
^https?:\/\/(api|api\.next)\.bspapp\.com\/client$ url script-response-body https://raw.githubusercontent.com/ww0834/passion/main/quting.js
[mitm] 
hostname = api.bspapp.com,api.next.bspapp.com
*/
var body = $response.body.replace(/\"bannerList":\[.+\]/g， '\"bannerList":[]');$done({body});
