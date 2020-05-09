/*
「崩坏3」跨服（iOS 端 → 安卓国服）
By: Mornwind
Reference: 霞ヶ丘詩羽x / FlintyLemming

README:
https://github.com/Mornwind/BH3CN_SwitchServer/blob/master/README.md
*/

let url = $request.url;

url = url.replace(/gf_.+?&/,"gf_pc&");

$done({url});