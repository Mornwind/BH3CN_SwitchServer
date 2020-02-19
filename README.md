# 「崩坏3（iOS版）国服服务器列表补全计划」
 > By: [Mornwind](https://github.com/Mornwind/BH3_Region_Selector)
 > 
 > Reference: [FlintyLemming](https://git.flinty.moe/root/bh3-switch) / [霞ヶ丘詩羽x](https://www.bilibili.com/read/cv3610324)

![国服服务器列表预览](/bh3_region_list_preview.gif)

## ⒈ 国服平台代码
 > 以下为分别连接不同的国服服务器时，有效的平台代码。

- 官服
  - 安卓服：`gf_android`，`gf_pc`
  - iOS服：`gf_ios`，`gf_pc`
  - 全平台（桌面）服：`gf_pc`，`gf_android`，`gf_ios`
- 渠道服（登录入口已存在于桌面端，但目前被官方隐藏，可能是因为账号系统不同，尚未准备好）
  - BiliBili服：`gf_pc`，`gf_android_bilibili`
  - 应用宝服：`gf_pc`，`gf_android_tencent`
  - 混服01：`gf_pc`，`gf_android_coolpad`，`gf_android_gionee`，`gf_android_huawei`，`gf_android_lenovo`，`gf_android_oppo`，`gf_android_vivo`
  - 混服02：`gf_pc`，`gf_android_qihoo`，`gf_android_uc`，`gf_android_wandoujia`，`gf_android_xiaomi`

## ⒉ 配置信息
### ⑴ 新手使用
 > 默认全平台列表（本身就是完整列表，由官方云端控制，只不过渠道服入口暂被隐藏）。
 > 
 > 只使用 URL 重定向。

#### ① Surge 4：
```
[URL Rewrite]
# 获取全平台服务器列表
^https:\/\/global(\d*)\.bh3\.com\/query_dispatch\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*) https://global$1.bh3.com/query_dispatch?version=$2_gf_pc 302

# 改写连入服务器的平台代码
# > 官服
# >> 安卓国服
^http:\/\/106\.14\.51\.73\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://106.14.51.73/query_gameserver?version=$1_gf_android 302
# >> iOS国服
^http:\/\/139\.224\.7\.27\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.224.7.27/query_gameserver?version=$1_gf_ios 302
# >> 全平台（桌面）服
^http:\/\/106\.15\.162\.73\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://106.15.162.73/query_gameserver?version=$1_gf_pc 302
# > 渠道服（登录入口已存在于桌面端，但目前被官方隐藏，可能是因为账号系统不同，尚未准备好）
# >> BiliBili服
^http:\/\/139\.196\.248\.220\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139>.196.248.220/query_gameserver?version=$1_gf_pc 302
# >> 应用宝服
^http:\/\/115\.159\.20\.29\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://115.159.20.29/query_gameserver?version=$1_gf_pc 302
# >> 混服01
^http:\/\/139\.196\.248\.218\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_pc 302
# >> 混服02
^http:\/\/139\.196\.248\.219\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_pc 302

[MITM]
hostname = global*.bh3.com
```

#### ② Quantumult X：
```
[rewrite_remote]
https://raw.githubusercontent.com/Mornwind/BH3_Region_Selector/master/bh3_region_rewrite_basic.conf, tag=BH3 Region Rewrite, enabled=true
```

### ⑵ 进阶使用
 > 自定义服务器列表，可调整顺序、删去多余服务器。
 > 
 > 利用脚本 + URL 重定向。

#### ① Surge 4：
```
[URL Rewrite]
# 官服
# > 安卓国服
^http:\/\/106\.14\.51\.73\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://106.14.51.73/query_gameserver?version=$1_gf_android 302
# > iOS国服
^http:\/\/139\.224\.7\.27\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.224.7.27/query_gameserver?version=$1_gf_ios 302
# > 全平台（桌面）服
^http:\/\/106\.15\.162\.73\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://106.15.162.73/query_gameserver?version=$1_gf_pc 302
# 渠道服（登录入口已存在于桌面端，但目前被官方隐藏，可能是因为账号系统不同，尚未准备好）
# > BiliBili服
^http:\/\/139\.196\.248\.220\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_pc 302
# > 应用宝服
^http:\/\/115\.159\.20\.29\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://115.159.20.29/query_gameserver?version=$1_gf_pc 302
# > 混服01
^http:\/\/139\.196\.248\.218\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_pc 302
# > 混服02
^http:\/\/139\.196\.248\.219\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_pc 302

[Script]
http-response ^https:\/\/global(\d*)\.bh3\.com\/query_dispatch\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Mornwind/BH3_Region_Selector/master/bh3_region_list.js

[MITM]
hostname = global*.bh3.com
```

#### ② Quantumult X：
```
[rewrite_remote]
https://raw.githubusercontent.com/Mornwind/BH3_Region_Selector/master/bh3_region_rewrite_advanced.conf, tag=BH3 Region Rewrite, enabled=true

[rewrite_local]
^https:\/\/global(\d*)\.bh3\.com\/query_dispatch\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*) url script-response-body bh3_region_list.js

[MITM]
hostname = *.bh3.com
```