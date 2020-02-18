# 「崩坏3（iOS版）国服服务器列表补全」
> By: [Mornwind](https://github.com/Mornwind/BH3_Region_Selector)
> 
> Reference: [FlintyLemming](https://git.flinty.moe/root/bh3-switch) / [霞ヶ丘詩羽x](https://www.bilibili.com/read/cv3610324)

## Surge 4:
```
[URL Rewrite]
# 官服
# > 安卓国服（gf_android）
^http:\/\/106\.14\.51\.73\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://106.14.51.73/query_gameserver?version=$1_gf_android 302
# > iOS国服（gf_ios）
^http:\/\/139\.224\.7\.27\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.224.7.27/query_gameserver?version=$1_gf_ios 302
# > 全平台（桌面）服（gf_pc）
^http:\/\/106\.15\.162\.73\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://106.15.162.73/query_gameserver?version=$1_gf_pc 302

# 渠道服（桌面端）（官方目前隐藏登录入口，可能尚未准备好）
# > BiliBili服（gf_pc）
^http:\/\/139\.196\.248\.220\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_pc 302
# > 应用宝服（gf_pc）
^http:\/\/115\.159\.20\.29\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://115.159.20.29/query_gameserver?version=$1_gf_pc 302
# > 混服01（gf_pc）
^http:\/\/139\.196\.248\.218\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_pc 302
# > 混服02（gf_pc）
^http:\/\/139\.196\.248\.219\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_pc 302

# 渠道服（移动端）（不可用，因为账号系统不同）
# > BiliBili服（gf_android_bilibili）
# ^http:\/\/139\.196\.248\.220\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_android_bilibili 302
# > 应用宝服（gf_android_tencent）
# ^http:\/\/115\.159\.20\.29\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://115.159.20.29/query_gameserver?version=$1_gf_android_tencent 302
# > 混服01
# >> 酷派服（gf_android_coolpad）
# ^http:\/\/139\.196\.248\.218\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_android_coolpad 302
# >> 金立服（gf_android_gionee）
# ^http:\/\/139\.196\.248\.218\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_android_gionee 302
# >> 华为服（gf_android_huawei）
# ^http:\/\/139\.196\.248\.218\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_android_huawei 302
# >> 联想服（gf_android_lenovo）
# ^http:\/\/139\.196\.248\.218\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_android_lenovo 302
# >> OPPO服（gf_android_oppo）
# ^http:\/\/139\.196\.248\.218\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_android_oppo 302
# >> VIVO服（gf_android_vivo）
# ^http:\/\/139\.196\.248\.218\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_android_vivo 302
# > 混服02
# >> 360服（gf_android_qihoo）
# ^http:\/\/139\.196\.248\.219\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_android_qihoo 302
# >> 九游服（gf_android_uc）
# ^http:\/\/139\.196\.248\.219\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_android_uc 302
# >> 豌豆荚服（gf_android_wandoujia）
# ^http:\/\/139\.196\.248\.219\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_android_wandoujia 302
# >> 小米服（gf_android_xiaomi）
# ^http:\/\/139\.196\.248\.219\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_android_xiaomi 302

[Script]
http-response ^https:\/\/global(\d*)\.bh3\.com\/query_dispatch\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Mornwind/BH3_Region_Selector/master/bh3_region_list.js

[MITM]
hostname = global*.bh3.com
```

## QuanX：
```
[rewrite_remote]
https://raw.githubusercontent.com/Mornwind/BH3_Region_Selector/master/bh3_region_rewrite_remote.conf, tag=BH3 Region Rewrite, enabled=true

[rewrite_local]
^https:\/\/global(\d*)\.bh3\.com\/query_dispatch\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*) url script-response-body Scripts/bh3_region_list.js

[MITM]
hostname = global*.bh3.com
```