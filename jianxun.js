var jianxun = JSON.parse($response.body);
if ($request.url.includes("/user/info")) {
  jianxun.data.is_vip = true;
  jianxun.data.vip_expire_time = "8888-08-08 00:00:00";
} else if ($request.url.includes("/login/account")) {
  jianxun.data.items[0].mobile = "6";
}
$done({ body: JSON.stringify(jianxun) });
