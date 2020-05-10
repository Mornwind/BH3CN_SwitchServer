# 「崩坏3」跨服配置（Quantumult X）（iOS 端 → 安卓国服）
 > By: [Mornwind](https://blog.mornwind.cc)
 > 
 > GitHub Link: [Mornwind/BH3CN_SwitchServer/Quantumult_X](https://github.com/Mornwind/BH3CN_SwitchServer/tree/master/Quantumult_X)

## 参考来源
 > ① 霞ヶ丘詩羽x：[B站专栏（cv3610324）](https://www.bilibili.com/read/cv3610324)
 > 
 > ② FlintyLemming：[QuanX 跨服规则](https://git.flinty.moe/root/BH3_Region_Selector)
 > 
 > ③ KorenKrita

---

## ⚠️ 注意事项 ⚠️
1. **非官方直接提供的“跨服”行为，本身就违反了 Mihoyo 的用户协议。如若担心自己被封号，请勿使用本方法跨服，买对应的设备去玩更安全放心。**
2. 目前在 iOS 端登录安卓国服，仍无法进行充值，还需要自备安卓设备或者用 PC 端进行充值。
3. 本项目内所提到的所有客户端与服务器，均为**国服**。
4. 目前跨服**只可在官服之间进行**。渠道服由于**账号系统**不同以及游戏包体中的**登录器**不同，现阶段没有找到方法跨服，只能通过在 PC 端上扫码进行登录这种方式，敬请见谅。本项目中关于渠道服的部分，仅作学习参考，尚起不到实际用途。
5. **若出现资源缺失，需先进 iOS 国服下载资源。**

## ⚠️ 特别说明 ⚠️
1. “脚本法”中，跨服脚本中**并未含有**用于修改游戏内数据以获得不正当收益的作弊内容，只是用来切换服务器，故理论上不会被封号。跨服脚本代码**公开透明**地存放于本项目中，欢迎随时进行检查。如若不放心，还请使用“重定向法”，或者另寻他法。
2. 请勿从共享 Apple ID 或盗版来源下载 Quantumult X，否则会在 Quantumult X **验证收据时触发保护机制**，导致 Quantumult X 的**关键功能永久失效**。

---

## 效果预览
![使用 Quantumult X 跨服](/Quantumult_X/Quantumult_X_Preview.jpg)

---

## 前期准备
- 账号：安卓国服
- 系统：iOS 12+ / iPadOS 13+
- 工具：[Quantumult X](https://apps.apple.com/app/id1443988620)
- GitHub 项目链接：[Mornwind/BH3CN_SwitchServer/Quantumult_X](/Quantumult_X)

## 配置教程
详见 FlintyLemming 的 [Quantumult X 跨服教程](https://git.flinty.moe/root/BH3_Region_Selector/-/blob/master/README.md)。

## 配置方法
### 方法 A：重定向法
 > 默认全平台列表（本身就是完整列表，由官方云端控制，只不过账号密码登录方式中隐藏了渠道服入口）。
 > 
 > 仅使用 **URL 重定向（URL Rewrite）** 功能实现。

```
[rewrite_remote]
# 崩坏3 跨服（新手直接订阅使用，无需自行更动）
https://raw.githubusercontent.com/Mornwind/BH3CN_SwitchServer/master/Quantumult_X/bh3cn_switchserver.conf, tag=BH3CN_SwitchServer, enabled=true
```

### 方法 B：脚本法
 > 默认全平台列表（本身就是完整列表，由官方云端控制，只不过账号密码登录方式中隐藏了渠道服入口）。
 > 
 > 仅使用 **脚本（Script）** 功能实现。

#### 本地脚本（商店版、TF 版均可用）
```
[rewrite_local]
# 崩坏3 跨服
# > 获取全平台服务器列表
^https:\/\/(.+?)\.bh3\.com\/query_dispatch\?version=(.+?)_gf_(.+?)&t=(\d+) url script-request-header bh3cn_switchserver.js
# > 改写连入服务器的客户端标识
^http:\/\/(.+?)\/query_gameserver\?version=(.+?)_gf_(.+?)&t=(\d+)&uid=(\d+) url script-request-header bh3cn_switchserver.js

[MITM]
hostname = *.bh3.com
```

#### 远程脚本（仅 TF 版可用）
```
[rewrite_local]
# 崩坏3 跨服
# > 获取全平台服务器列表
^https:\/\/(.+?)\.bh3\.com\/query_dispatch\?version=(.+?)_gf_(.+?)&t=(\d+) url script-request-header https://raw.githubusercontent.com/Mornwind/BH3CN_SwitchServer/master/Quantumult_X/bh3cn_switchserver.js
# > 改写连入服务器的客户端标识
^http:\/\/(.+?)\/query_gameserver\?version=(.+?)_gf_(.+?)&t=(\d+)&uid=(\d+) url script-request-header https://raw.githubusercontent.com/Mornwind/BH3CN_SwitchServer/master/Quantumult_X/bh3cn_switchserver.js

[MITM]
hostname = *.bh3.com
```
