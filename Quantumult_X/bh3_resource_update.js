/*
「崩坏3」跨服（iOS客户端 → 官服服务器）
By: Mornwind
Reference: 霞ヶ丘詩羽x / FlintyLemming

README:
https://github.com/Mornwind/BH3_Region_Selector/blob/master/README.md
*/

let body = $response.body;

// 确保每个版本首次进入服务器时，提示下载资源
body = body.replace(/disable_msad/,"update_streaming_asb");

$done({body});