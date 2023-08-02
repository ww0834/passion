/*
[rewrite_local]
^https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user url script-response-body https://raw.githubusercontent.com/ww0834/passion/main/baiducloud.js
[mitm] 
hostname = pan.baidu.com
*/

var baiducloud = JSON.parse($response.body);
baiducloud = {
  "product_infos" : [
    {
      "cur_svip_type" : "Crack"，
      "product_name" : "svip2_nd"，
      "product_description" : "解锁倍速+画质+爱你"，
      "function_num" : 510004015，
      "start_time" : 1672502400，
      "buy_description" : "不可下载加速"，
      "buy_time" : 980784000，
      "product_id" : "你好"，
      "auto_upgrade_to_svip" : 0，
      "end_time" : 4070880000，
      "cluster" : "vip"，
      "detail_cluster" : "svip"，
      "status" : 0
    }
  ]，
  "level_info" : {
    "current_level" : 10，
  }
};
$done({body:JSON.stringify(baiducloud)});
