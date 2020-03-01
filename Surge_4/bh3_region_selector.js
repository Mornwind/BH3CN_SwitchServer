/*
「崩坏3」跨服（iOS客户端 → 官服服务器）
By: Mornwind
Reference: 霞ヶ丘詩羽x / FlintyLemming

README:
https://github.com/Mornwind/BH3_Region_Selector/blob/master/README.md
*/

let url = $request.url;

// 各个国服服务器的配置信息所在服务器IP
const android01 = "106.14.51.73";
const ios01 = "139.224.7.27";
const pc01 = "106.15.162.73";
const bb01 = "139.196.248.220";
const yyb01 = "115.159.20.29";
const hun01 = "139.196.248.218";
const hun02 = "139.196.248.219";

// 改写连入服务器的客户端标识
// > 官服
// >> 安卓国服
if (url.indexOf(android01) != -1) {
	url = url.replace(/gf_.+?&/,"gf_android&");
};
// >> iOS国服
if (url.indexOf(ios01) != -1) {
	url = url.replace(/gf_.+?&/,"gf_ios&");
};
// >> 全平台（桌面）服
if (url.indexOf(pc01) != -1) {
	url = url.replace(/gf_.+?&/,"gf_pc&");
};
// > 渠道服（详见说明文档最前面的"注意事项"部分）
// >> Bilibili服
if (url.indexOf(bb01) != -1) {
	url = url.replace(/gf_.+?&/,"gf_android_bilibili&");
};
// >> 应用宝服
if (url.indexOf(yyb01) != -1) {
	url = url.replace(/gf_.+?&/,"gf_android_tencent&");
};
// >> 渠道1服
if (url.indexOf(hun01) != -1) {
	url = url.replace(/gf_.+?&/,"gf_pc&");
};
// >> 渠道2服
if (url.indexOf(hun02) != -1) {
	url = url.replace(/gf_.+?&/,"gf_pc&");
};

$done({url});