/*
简讯
[rewrite_local]
^https?:\/\/api\.tipsoon\.com/api\/v1\/(user\/info|login\/account) url script-response-body https://raw.githubusercontent.com/ww0834/passion/main/jianxun.js
[MITM]
hostname = api.tipsoon.com
*/








var jianxun = JSON.parse($response.body);
if ($request.url.includes("/user/info")) {
  jianxun.data.is_vip = true;
  jianxun.data.vip_expire_time = "8888-08-08 00:00:00";
} else if ($request.url.includes("/login/account")) {
  jianxun.data.items[0].mobile = "6";
}
$done({ body: JSON.stringify(jianxun) });
