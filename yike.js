/*************************************

项目名称：一刻相册 解锁部分功能
下载地址：https://t.cn/AiT82mfg
下载地址：https://t.cn/Ainbj7GV
脚本作者：chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！
使用说明：非一次性解锁，每次解锁需打开脚本
本人只需一刻，仅自用
**************************************

[rewrite_local]

^https?:\/\/pan\.baidu\.com\/(youai\/(user\/.+\/getminfo|membership\/.+\/adswitch)|(rest\/.+\/membership\/user|act\/.+\/(bchannel|welfare)\/list|api\/usercfg)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/bdcloud.js

[mitm]

hostname = pan.baidu.com

*************************************/


var chxm1023 = JSON.parse($response.body);
const yike = '/getminfo';
const ad = '/adswitch';
const usercfg = '/api/usercfg';

if ($request.url.indexOf(yike) != -1){
  chxm1023 = {
  "errno": 0,
  "request_id": 342581654394297772,
  "has_purchased": 1,
  "has_buy_1m_auto_first": 0,
  "can_buy_1m_auto_first": 0,
  "can_buy_1m_auto_first_6": 0,
  "has_received_7dfree": 1,
  "product_tag": 3,
  "sign_status": 1,
  "sign_infos": [{
    "product_id": "12745849497343294855",
    "order_no": "2203060931530010416",
    "ctime": 1646537208,
    "mtime": "2022-05-06 11:26:48",
    "status": 1,
    "sign_price": 1000,
    "sign_channel": 0
  }],
  "vip_tags": ["album_vip"],
  "product_infos": [{
    "product_id": "12745849497343294855",
    "start_time": 1646534568,
    "end_time": 4092599349,
    "buy_time": 1649994533,
    "tag": "album_vip",
    "order_no": "2203060931530010416"
  }],
  "vip_infos": [{
    "tag": "album_vip",
    "start_time": 1646537208,
    "end_time": 4092599349
  }],
  "expire_time": 0
 };
}

if ($request.url.indexOf(ad) != -1){
  chxm1023.switch = "open";
}

$done({body : JSON.stringify(chxm1023)});
