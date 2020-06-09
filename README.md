# 「崩坏3」跨服手册（iOS 端 → 安卓国服）
 > By: [Mornwind](https://blog.mornwind.cc)
 > 
 > GitHub Link: [Mornwind/BH3CN_SwitchServer](https://github.com/Mornwind/BH3CN_SwitchServer)

## 致谢
- **参考&协助**
  - 霞ヶ丘詩羽x：[B站专栏（cv3610324）](https://www.bilibili.com/read/cv3610324)
  - FlintyLemming：[QuanX 跨服教程](https://bitbucket.flinty.moe/projects/PER/repos/bh3_server_switch/browse)
- **指导&纠错**
  - NobyDa
  - chavyleung
  - KorenKrita

## 前言
作为一个晚登录两三天没能拿到“登录纪念勋章”的安卓国服的甲板老清洁工，自从嫌弃安卓机的卡慢（以及当年月光的光翼特效显示不出来），咬咬牙入了 iPod touch 和 iPad Pro 之后，便开始发愁：安卓端甲板上的老婆们，要怎么打包带到 iOS 端？

奈何，米忽悠一直不为 iOS 客户端加上安卓国服的登录入口（反过来也没有）。后来 ME 社跨服包的出现，为我带来了一线光明。找“Msk包子”大佬购入了无需自签的 iOS 端跨服客户端以后，连续用了好几个版本，省去了每周重新自签的麻烦，倒也还算舒服（只不过得每隔三四个版本付一次分发平台的证书费）。

最近在 TG 上研究 Surge 4 上可用的签到脚本的时候，偶然结识了一位在用 Quantumult X 的大佬“FlintyLemming”，而他的为崩坏3跨服的方法为我指明了另一条道路，也就促使了本项目的诞生。

在跟“FlintyLemming”大佬进行沟通交流的过程中，我也了解到，他在 Quantumult X 上实现的跨服方法，是借鉴B站一位大佬“霞ヶ丘詩羽x”提供的方案而完成的。而本项目，则是同时借鉴了两位大佬的方法，在 Surge 4 上实现了跨服，同时也为 Quantumult X 用户提供了另一种自定义方案。

此项目的初衷，就是为了能让常挂代理工具（如：Surge 4、Quantumult X）的玩家，无需频繁开关代理工具，就能在忘掉有这么一回事的情况下，在 iOS 端直接登入安卓国服，上舰<del>玩老婆</del>陪老婆玩。

---

## ⚠️ 注意事项 ⚠️
1. **非官方直接提供的“跨服”行为，本身就违反了 Mihoyo 的用户协议。如若担心自己被封号，请勿使用本方法跨服，买对应的设备去玩更安全放心。**
2. 目前在 iOS 端登录安卓国服，仍无法进行充值，还需要自备安卓设备或者用 PC 端进行充值。
3. 本项目内所提到的所有客户端与服务器，均为**国服**。
4. 目前跨服**只可在官服之间进行**。渠道服由于**账号系统**不同以及游戏包体中的**登录器**不同，现阶段没有找到方法跨服，只能通过在 PC 端上扫码进行登录这种方式，敬请见谅。本项目中关于渠道服的部分，仅作学习参考，尚起不到实际用途。
5. **若出现资源缺失，需先进 iOS 国服下载资源。**

---

## 效果预览
![崩坏3 跨服预览](/BH3CN_SwitchServer_Preview.jpg)

---

## iOS 端常见跨服方式
在 iOS 端上，常见的游戏跨服方式主要可分为以下三大类六小类：

| 类型 | 方式 | 优点 | 缺点 |
| :-: | :-: | :-: | :-: |
| [A-1](#a-1-类型已全部失效) | 通过**使用网络调试工具**，<br/>**在本地重写客户端请求**，<br/>**直接**实现跨服 | 本地修改无需依赖他人<br/>基本不受游戏版本更新影响 | 需要会亿点操作<br/>部分工具价格较高<br/>部分工具在国区无法下载 |
| [A-2](#a-2-类型未提供) | 通过**使用他人提供的代理服务器**，<br/>**在远端重写客户端请求**，<br/>**直接**实现跨服 | 操作较少 | 依赖代理服务器的稳定性<br/>安全性无法保证 |
| [B-1](#b-类型已全部失效) | 通过**对游戏客户端修改后重新打包**，<br/>**由他人统一签名后在线下载安装**，<br/>**直接**实现跨服 | 几乎无需操作 | 签名所需证书费较贵<br/>更新后需等待新跨服包发布 |
| [B-2](#b-类型已全部失效) | 通过**对游戏客户端修改后重新打包**，<br/>**自行签名然后越狱安装或侧载**，<br/>**直接**实现跨服 | 无需花钱 | 需要会亿点操作<br/>越狱影响系统安全性<br/>每 7 天需重新签名<br/>更新后需等待新跨服包发布 |
| [C-1](#c-1-类型) | 通过**使用云游戏平台**，<br/>**将游戏画面实时传输至移动设备**，<br/>**间接**实现跨服 | 操作较少<br/>能跨部分渠道服 | 可选渠道服受制于云平台<br/>严重依赖网络质量<br/>安全性无法保证<br/>非会员每日游戏时长受限<br/>非会员每次进入需排队等候 |
| [C-2](#c-2-类型) | 通过**使用云主机**，<br/>**将游戏画面实时传输至移动设备**，<br/>**间接**实现跨服 | 能跨渠道服 | 需要会亿点操作<br/>云主机普遍价格很高<br/>严重依赖网络质量 |

### A-1 类型（已全部失效）
 > A-1：通过**使用网络调试工具**，**在本地重写客户端请求**，**直接**实现跨服。

| 图标 | 跨服工具 | 别名 | 跨服教程与配置 |
| :-: | :-: | :-: | :-: |
| ![](/HTTP_Catcher/HTTP_Catcher_Icon.png) | [HTTP Catcher](/HTTP_Catcher) | 网球 | [图文教程](/HTTP_Catcher/README.md) |
| ![](/iHTTP_Tracker/iHTTP_Tracker_Icon.png) | [iHTTP Tracker](/iHTTP_Tracker) | 猫头鹰 | [图文教程](/iHTTP_Tracker/README.md) |
| ![](/Thor/Thor_Icon.png) | [Thor](/Thor) | 锤子 | [图文教程](/Thor/README.md) |
| ![](/Shadowrocket/Shadowrocket_Icon.png) | [Shadowrocket](/Shadowrocket) | 小火箭 | [图文教程](/Shadowrocket/README.md) |
| ![](/Pepi/Pepi_Icon.png) | [Pepi](/Pepi) | - | [图文教程](/Pepi/README.md) |
| ![](/Quantumult/Quantumult_Icon.png) | [Quantumult](/Quantumult) | 圈 | [图文教程](/Quantumult/README.md) |
| ![](/Quantumult_X/Quantumult_X_Icon.png) | [Quantumult X](/Quantumult_X) | 圈叉 | [图文教程（Flinty）](https://bitbucket.flinty.moe/projects/PER/repos/bh3_server_switch/browse/README.md) |
| ![](/Surge_4/Surge_4_Icon.png) | [Surge 4](/Surge_4) | - | [图文教程](/Surge_4/README.md) |
| ![](/Loon/Loon_Icon.png) | [Loon](/Loon) | 气球 | 参考 Surge 4 |

| 跨服工具 | 国区商店<br/>购买与下载 | 正规渠道价格 | 跨服操作<br/>方便程度 | 设备上同时<br/>挂梯与跨服 | 备注 |
| :-: | :-: | :-: | :-: | :-: | :-: |
| HTTP Catcher<br/>（网球） | ✅ | ¥28.00（内购）<br/>\$3.99（内购） | ★★★★ | ❌ | 3.0 版正在开发中 |
| iHTTP Tracker<br/>（猫头鹰） | ✅ | ¥12.00<br/>\$1.99 | ★★★★ | ❌ | 需 2.0 版 |
| Thor<br/>（锤子） | ✅ | ¥88.00<br/>\$12.99 | ★★★★ | ❌ |  |
| Shadowrocket<br/>（小火箭） | ❌ | \$2.99 | ★★★ | ✅ |  |
| Pepi | ❌ | \$1.99 | ★★ | ✅ | 开发者已停更 |
| Quantumult<br/>（圈） | ❌ | \$4.99 | ★★ | ✅ | 开发者已停更 |
| Quantumult X<br/>（圈叉） | ❌ | \$7.99 | ★★ | ✅ | TF 名额已满 |
| Surge 4 | ❌ | \$49.99（首次内购）<br/>+ \$14.99/y（订阅） | ★★ | ✅ |  |
| Loon<br/>（气球） | ❌ | \$2.99 | ★★ | ✅ | Bug 较多 |

 > 注：
 > 
 > 世界蛇⟡崩3少前跨服 - QQ 群：[`915089623`](https://jq.qq.com/?_wv=1027&k=5rnvPAT)

### A-2 类型（未提供）
 > A-2：通过**使用他人提供的代理服务器**，**在远端重写客户端请求**，**直接**实现跨服。

尚不提供此方式为「崩坏3」进行跨服。

### B 类型（已全部失效）
 > B-1：通过**对游戏客户端修改后重新打包**，**由他人统一签名后在线下载安装**，**直接**实现跨服。
 > 
 > B-2：通过**对游戏客户端修改后重新打包**，**自行签名然后越狱安装或侧载**，**直接**实现跨服。

| 图标 | 跨服工具 | 别名 | 跨服教程 | 跨服配置 |
| :-: | :-: | :-: | :-: | :-: |
| - | ME 社跨服包 | - | 见 ME 社公众号 | 见 ME 社公众号 |
| - | 逆熵乐队跨服包 | - | 见逆熵乐队公众号 | 见逆熵乐队公众号 |


| 跨服工具 | 国区商店<br/>购买与下载 | 正规渠道价格 | 跨服操作<br/>方便程度 | 设备上同时<br/>挂梯与跨服 | 备注 |
| :-: | :-: | :-: | :-: | :-: | :-: |
| ME 社跨服包<br/>（自签） | - | 免费 | ★ | ✅ | Cydia 已失效 |
| ME 社跨服包<br/>（免签） | - | ¥60.00/三个大版本 | ★★★★★ | ✅ |  |
| 逆熵乐队跨服包<br/>（自签） | - | 免费 | ★ | ✅ | 已停止更新 |

 > 注：
 > 
 > ME 社 - 微信公众号：（主）`me_shebao`；（备）`me_dby`
 > 
 > AntiEntropy 逆熵乐队 - 微信公众号：`aeband`

### C-1 类型
 > C-1：通过**使用云游戏平台**，**将游戏画面实时传输至移动设备**，**间接**实现跨服。

| 图标 | 跨服工具 | 别名 | 跨服教程 | 跨服配置 |
| :-: | :-: | :-: | :-: | :-: |
| - | 网易云游戏 | - | 见网易云游戏官网 | 见网易云游戏官网 |

| 跨服工具 | 国区商店<br/>购买与下载 | 正规渠道价格 | 跨服操作<br/>方便程度 | 设备上同时<br/>挂梯与跨服 | 备注 |
| :-: | :-: | :-: | :-: | :-: | :-: |
| 网易云游戏 | - | ¥15.9/月<br/>¥70/季<br/>¥240/年 | ★★★★★ | ✅ | 部分渠道服平台上没有 |

 > 注：
 > 
 > 网易云游戏 - 官网：<https://cg.163.com>

### C-2 类型
 > C-2：通过**使用云主机**，**将游戏画面实时传输至移动设备**，**间接**实现跨服。

此方法需自行摸索。

---

## 附录1：App Store 链接
- **游戏本体**
  - 崩坏3：<https://apps.apple.com/app/id1143402987>

- **网络调试工具（仅抓包）**
  - HTTP Catcher：<https://apps.apple.com/app/id1445874902>
  - iHTTP Tracker：<https://apps.apple.com/app/id1463315864>
  - Thor：<https://apps.apple.com/app/id1210562295>
- **网络调试工具（抓包、代理）**
  - Shadowrocket：<https://apps.apple.com/app/id932747118>
  - Pepi：<https://apps.apple.com/app/id1283082051>
  - Quantumult：<https://apps.apple.com/app/id1252015438>
  - Quantumult X：<https://apps.apple.com/app/id1443988620>
  - Surge 4：<https://apps.apple.com/app/id1442620678>
  - Loon：<https://apps.apple.com/app/id1373567447>

## 附录2：「崩坏3」国服客户端标识
 > 以下为分别连接不同的国服服务器时，有效的客户端标识。

- **官服**
  - 安卓国服：`gf_android`，`gf_pc`
  - iOS 国服：`gf_ios`，`gf_pc`
  - 全平台（桌面）服：`gf_pc`，`gf_android`，`gf_ios`
- **渠道服**
  - Bilibili 服：`gf_pc`，`gf_android_bilibili`
  - 应用宝服：`gf_pc`，`gf_android_tencent`
  - 渠道 1 服：`gf_pc`，`gf_android_coolpad`，`gf_android_gionee`，`gf_android_huawei`，`gf_android_lenovo`，`gf_android_oppo`，`gf_android_vivo`
  - 渠道 2 服：`gf_pc`，`gf_android_qihoo`，`gf_android_uc`，`gf_android_wandoujia`，`gf_android_xiaomi`
- **测试服**（需搭配测试专用客户端）
  - 安卓测试服：`beta`
  - iOS 测试服：`beta_ios`

## 附录3：「崩坏3」国服服务器的配置信息所在服务器 IP
 > 以下为获取各个国服服务器配置信息时，所访问的服务器 IP。

- **官服**
  - 安卓国服：`106.14.51.73`
  - iOS 国服：`139.224.7.27`
  - 全平台（桌面）服：`106.15.162.73`
- **渠道服**
  - Bilibili 服：`139.196.248.220`
  - 应用宝服：`115.159.20.29`
  - 渠道 1 服：`139.196.248.218`
  - 渠道 2 服：`139.196.248.219`
- **测试服**（需搭配测试专用客户端）
  - 安卓测试服（外部）：`139.196.1.196:5080`
  - iOS 测试服（外部）：`49.235.123.106:16000`

## 附录4：「崩坏3」服务器状态标识
- **推荐**：`"retcode": 0`、`"server_state": "Recommend"`
- **隐藏**：`"retcode": 0`、`"server_state": "HIDE"`
- **维护**：`"retcode": 2`
