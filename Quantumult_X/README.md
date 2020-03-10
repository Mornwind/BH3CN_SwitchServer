# 「崩坏3」跨服配置（Quantumult X）（iOS客户端 → 官服服务器）
 > By: [Mornwind](https://blog.mornwind.cc)
 > 
 > GitHub Link: [BH3_Region_Selector/Quantumult_X](https://github.com/Mornwind/BH3_Region_Selector/tree/master/Quantumult_X) 

## 参考来源
 > ① 霞ヶ丘詩羽x：[B站专栏（cv3610324）](https://www.bilibili.com/read/cv3610324)
 > 
 > ② FlintyLemming：[QX规则订阅](https://git.flinty.moe/root/BH3_Region_Selector)

---

## ⚠️ 注意事项 ⚠️
1. 本项目内所提到的所有客户端与服务器，均为**国服**。
2. 目前跨服只可在官服之间跨。渠道服由于**账号系统**不同以及游戏包体中的**登录器**不同，现阶段没有找到方法跨服，只能通过在PC端上扫码进行登录这种方式，敬请见谅。
3. **本项目中关于渠道服的部分，仅作学习参考，尚起不到实际用途。** 目前在PC端账号密码登录方式的服务器列表中，实际上是包含四个渠道服的，但是全都被官方隐藏了，目前应该是还没准备好（第2点里面已经说了原因）。所以就算手动解除了隐藏状态，也是登录不进去的。

## ⚠️ 特别说明 ⚠️
1. "进阶方法——脚本法"中，跨服脚本中**并未含有**用于修改游戏内数据以获得不正当收益的作弊内容，只是用来切换服务器，故理论上不会被封号。跨服脚本代码**公开透明**地存放于本项目中，欢迎随时进行检查。如若不放心，还请使用"新手使用（重定向法）"，或者另寻他法。

---

## 效果预览
![使用 Quantumult X 跨服](/Quantumult_X/quantumult_x_preview.jpg)

## 配置信息
### 入门方法——重定向法
 > 默认全平台列表（本身就是完整列表，由官方云端控制，只不过账号密码登录方式中隐藏了渠道服入口）。
 > 
 > 仅使用 **URL 重定向（URL Rewrite）** 功能实现。

```
[rewrite_remote]
# 新手直接订阅使用，无需自行更动
https://raw.githubusercontent.com/Mornwind/BH3_Region_Selector/master/Quantumult_X/bh3_region_rewrite.conf, tag=BH3 Region Rewrite, enabled=true
```

### 进阶方法——脚本法
 > 自定义服务器列表，可调整顺序、删去多余服务器。
 > 
 > 仅使用 **脚本（Script）** 功能实现。

```
[rewrite_local]
# 自定义服务器列表
^https:\/\/global(.+?)\.bh3\.com\/query_dispatch\?version=.* url script-response-body bh3_region_list.js

# 改写连入服务器的客户端标识
^http:\/\/(.*)\/query_gameserver\?version=.* url script-request-header bh3_vid_rewrite.js

# 确保每个版本首次进入服务器时，提示下载资源
^http:\/\/(.*)\/query_gameserver\?version=.* url script-response-body bh3_resource_update.js

[MITM]
hostname = *.bh3.com
```