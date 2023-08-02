
var body = $response.body.replace(/\"bannerList":\[.+\]/g, '\"bannerList":[]');$done({body});
