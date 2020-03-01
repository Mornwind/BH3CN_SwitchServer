# 「崩坏3」跨服配置（Surge 4 / Loon）（iOS客户端 → 官服服务器）
 > By: [Mornwind](https://github.com/Mornwind)
 > 
 > GitHub Link: [BH3_Region_Selector](https://github.com/Mornwind/BH3_Region_Selector) 

## 参考来源
 > ① 霞ヶ丘詩羽x：[B站专栏（cv3610324）](https://www.bilibili.com/read/cv3610324)
 > 
 > ② FlintyLemming：[QX规则订阅](https://git.flinty.moe/root/bh3-switch)（注：服务器维护中，暂无法访问）

---

## ⚠️ 注意事项 ⚠️
1. 本项目内所提到的所有客户端与服务器，均为**国服**。
2. 目前跨服只可在官服之间跨。渠道服由于**账号系统**不同以及游戏包体中的**登录器**不同，现阶段没有找到方法跨服，只能通过在PC端上扫码进行登录这种方式，敬请见谅。
3. **本项目中关于渠道服的部分，仅作学习参考，尚起不到实际用途。**目前在PC端账号密码登录方式的服务器列表中，实际上是包含四个渠道服的，但是全都被官方隐藏了，目前应该是还没准备好（第2点里面已经说了原因）。所以就算手动解除了隐藏状态，也是登录不进去的。

## ⚠️ 特别说明 ⚠️
1. "进阶使用（脚本法）"中，跨服脚本中**并未含有**用于修改游戏内数据以获得不正当收益的作弊内容，只是用来切换服务器，故理论上不会被封号。跨服脚本代码**公开透明**地存放于本项目中，欢迎随时进行检查。如若不放心，还请使用"新手使用（重定向法）"，或者另寻他法。

---

## 效果预览
![使用 Surge 4 跨服](/Surge_4/surge_4_preview.jpg)

## 配置信息
### ⑴ 新手使用（重定向法）
 > 默认全平台列表（本身就是完整列表，由官方云端控制，只不过账号密码登录方式中隐藏了渠道服入口）。
 > 
 > 仅使用 **URL 重定向（URL Rewrite）** 功能实现。

```
[URL Rewrite]
# 获取全平台服务器列表
^https:\/\/global(.+?)\.bh3\.com\/query_dispatch\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*) https://global$1.bh3.com/query_dispatch?version=$2_gf_pc 302

# 改写连入服务器的客户端标识
# > 官服
# >> 安卓国服
^http:\/\/106\.14\.51\.73\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://106.14.51.73/query_gameserver?version=$1_gf_android&t=$3&uid=$4 header
# >> iOS国服
^http:\/\/139\.224\.7\.27\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.224.7.27/query_gameserver?version=$1_gf_ios&t=$3&uid=$4 header
# >> 全平台（桌面）服
^http:\/\/106\.15\.162\.73\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://106.15.162.73/query_gameserver?version=$1_gf_pc&t=$3&uid=$4 header
# > 渠道服（详见说明文档最前面的"注意事项"部分）
# >> Bilibili服
^http:\/\/139\.196\.248\.220\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139>.196.248.220/query_gameserver?version=$1_gf_pc&t=$3&uid=$4 header
# >> 应用宝服
^http:\/\/115\.159\.20\.29\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://115.159.20.29/query_gameserver?version=$1_gf_pc&t=$3&uid=$4 header
# >> 渠道1服
^http:\/\/139\.196\.248\.218\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_pc&t=$3&uid=$4 header
# >> 渠道2服
^http:\/\/139\.196\.248\.219\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.196.248.220/query_gameserver?version=$1_gf_pc&t=$3&uid=$4 header

[MITM]
hostname = global*.bh3.com
```

### ⑵ 进阶使用（脚本法）
 > 自定义服务器列表，可调整顺序、删去多余服务器。
 > 
 > 仅使用 **脚本（Script）** 功能实现。

```
[Script]
# 自定义服务器列表
http-response ^https:\/\/global(.+?)\.bh3\.com\/query_dispatch\?version=.* requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Mornwind/BH3_Region_Selector/master/bh3_region_list.js

# 改写连入服务器的客户端标识
http-request ^http:\/\/(.*)\/query_gameserver\?version=.* requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Mornwind/BH3_Region_Selector/master/bh3_region_selector.js

[MITM]
hostname = global*.bh3.com
```