# 「崩坏3」跨服方式一览（iOS 端 → 安卓国服）
 > By: [Mornwind](https://blog.mornwind.cc)
 > 
 > GitHub Link: [BH3_Region_Selector](https://github.com/Mornwind/BH3_Region_Selector)

## 参考来源
 > ① 霞ヶ丘詩羽x：[B站专栏（cv3610324）](https://www.bilibili.com/read/cv3610324)
 > 
 > ② FlintyLemming：[QuanX 跨服规则](https://git.flinty.moe/root/BH3_Region_Selector)
 > 
 > ③ KorenKrita

## 前言
作为一个晚登录两三天没能拿到“登录纪念勋章”的安卓国服的甲板老清洁工，自从嫌弃安卓机的卡慢（以及当年月光的光翼特效显示不出来），咬咬牙入了 iPod touch 和 iPad Pro 之后，便开始发愁：安卓端甲板上的老婆们，要怎么打包带到 iOS 端？

奈何，米忽悠一直不为 iOS 客户端加上安卓国服的登录入口（反过来也没有）。后来 ME 社跨服包的出现，为我带来了一线光明。找“Msk包子”大佬购入了无需自签的 iOS 端跨服客户端以后，连续用了好几个版本，省去了每周重新自签的麻烦，倒也还算舒服（只不过得每隔三四个版本付一次分发平台的证书费）。

最近在 TG 上研究 Surge 4 上可用的签到脚本的时候，偶然结识了一位在用 Quantumult X 的大佬“FlintyLemming”，而他的为崩坏3跨服的方法为我指明了另一条道路，也就促使了本项目的诞生。

在跟“FlintyLemming”大佬进行沟通交流的过程中，我也了解到，他在 Quantumult X 上实现的跨服方法，是借鉴B站一位大佬“霞ヶ丘詩羽x”提供的方案而完成的。而本项目，则是同时借鉴了两位大佬的方法，在 Surge 4 上实现了跨服，同时也为 Quantumult X 用户提供了另一种自定义方案。

此项目的初衷，就是为了能让常挂代理工具（如：Surge 4、Quantumult X）的玩家，无需频繁开关代理工具，就能在忘掉有这么一回事的情况下，在 iOS 端直接登入安卓国服，玩到自己的老婆们，哦不，陪自己的老婆们玩。

---

## ⚠️ 注意事项 ⚠️
1. **非官方直接提供的“跨服”行为，本身就违反了 Mihoyo 的用户协议。如若担心自己被封号，请勿使用本方法跨服，买对应的设备去玩更安全放心。**
2. 目前在 iOS 端登录安卓国服，仍无法进行充值，还需要自备安卓设备或者用 PC 端进行充值。
3. 本项目内所提到的所有客户端与服务器，均为**国服**。
4. 目前跨服**只可在官服之间进行**。渠道服由于**账号系统**不同以及游戏包体中的**登录器**不同，现阶段没有找到方法跨服，只能通过在 PC 端上扫码进行登录这种方式，敬请见谅。本项目中关于渠道服的部分，仅作学习参考，尚起不到实际用途。
5. **若出现资源缺失，需先进 iOS 国服下载资源。**

---

## 效果预览
![崩坏3 跨服预览](/BH3_Region_Selector_Preview.jpg)

---

## iOS 端跨服方式一览

| 跨服工具 | 别名 | 跨服教程 | 跨服配置 |
| :-: | :-: | :-: | :-: |
| [HTTP Catcher](/HTTP_Catcher) | 网球 | [图文教程](/HTTP_Catcher/README.md) | [.hcc 重写列表文件 v3.9.0](/HTTP_Catcher/bh3_region_selector_v3.9.0.hcc) |
| [iHTTP Tracker](/iHTTP_Tracker) | 猫头鹰 | [图文教程](/iHTTP_Tracker/README.md) | [.iRW 重写列表文件 v3.9.0](/iHTTP_Tracker/bh3_region_selector_v3.9.0.iRW) |
| [Thor](/Thor) | 锤子 | [图文教程](/Thor/README.md) | [.f4thor 过滤器文件](/Thor/bh3_region_selector.f4thor) |
| [Shadowrocket](/Shadowrocket) | 小火箭 | [图文教程](/Shadowrocket/README.md) | [配置内容](/Shadowrocket/README.md) |
| [Pepi](/Pepi) | - | [图文教程](/Pepi/README.md) | [配置内容](/Pepi/README.md) |
| [Quantumult](/Quantumult) | 圈 | [图文教程](/Quantumult/README.md) | [配置内容](/Quantumult/README.md) |
| [Quantumult X](/Quantumult_X) | 圈叉 | [图文教程（FlintyLemming）](https://git.flinty.moe/root/BH3_Region_Selector/-/blob/master/README.md) | [配置内容](/Quantumult_X/README.md) |
| [Surge 4](/Surge_4) | - | [图文教程](/Surge_4/README.md) | [配置内容](/Surge_4/README.md) |
| [Loon](/Loon) | 气球 | 参考 Surge 4 | 参考 Surge 4 |
| ME 社跨服包 | - | 见 ME 社公众号 | 见 ME 社公众号 |

| 跨服工具 | 国区商店<br/>购买与下载 | 正规渠道价格 | 工具入门<br/>容易程度 | 跨服操作<br/>方便程度 | 可自定义<br/>服务器列表 | 设备上同时<br/>挂梯与跨服 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| HTTP Catcher<br/>（网球） | ✅ | ¥28.00（内购）<br/>\$3.99（内购） | ★★★ | ★★★★ | ✅ | ❌ |
| iHTTP Tracker<br/>（猫头鹰） | ✅ | ¥12.00<br/>\$1.99 | ★★★ | ★★★★ | ✅ | ❌ |
| Thor<br/>（锤子） | ✅ | ¥88.00<br/>\$12.99 | ★ | ★★★★ | ✅ | ❌ |
| Shadowrocket<br/>（小火箭） | ❌ | \$2.99 | ★★★★ | ★★★ | ❌ | ✅ |
| Pepi | ❌ | \$1.99 | ★★ | ★★ | ❌ | ✅ |
| Quantumult<br/>（圈） | ❌ | \$4.99 | ★★ | ★★ | ❌ | ✅ |
| Quantumult X<br/>（圈叉） | ❌ | \$7.99 | ★ | ★★ | ✅ | ✅ |
| Surge 4 | ❌ | \$49.99（首次内购）<br/>+ \$14.99/y（订阅） | ★ | ★★ | ✅ | ✅ |
| Loon<br/>（气球） | ❌ | \$2.99 | ★ | ★★ | ✅ | ✅ |
| ME 社跨服包<br/>（自签） | - | 免费 | ★★★ | ★ | ❌ | ✅ |
| ME 社跨服包<br/>（免签） | - | ¥60.00/三个大版本 | ★★★★★ | ★★★★★ | ❌ | ✅ |

注：

[1] 世界蛇⟡崩3少前跨服群：[`915089623`](https://jq.qq.com/?_wv=1027&k=5rnvPAT)

[2] ME 社公众号：

  - 主：`me_shebao`
  - 备：`me_dby`

---

## 附录1：App 商店链接
- **游戏本体**
  - [崩坏3](https://apps.apple.com/app/id1143402987)

- **抓包工具**
  - [HTTP Catcher](https://apps.apple.com/app/id1445874902)
  - [iHTTP Tracker](https://apps.apple.com/app/id1463315864)
  - [Thor](https://apps.apple.com/app/id1210562295)
- **代理&抓包工具**
  - [Shadowrocket](https://apps.apple.com/app/id932747118)
  - [Pepi](https://apps.apple.com/app/id1283082051)
  - [Quantumult](https://apps.apple.com/app/id1252015438)
  - [Quantumult X](https://apps.apple.com/app/id1443988620)
  - [Surge 4](https://apps.apple.com/app/id1442620678)
  - [Loon](https://apps.apple.com/app/id1373567447)

## 附录2：崩坏3国服客户端标识
 > 以下为分别连接不同的国服服务器时，有效的客户端标识。

- **官服**
  - 安卓国服：`gf_android`，`gf_pc`
  - iOS国服：`gf_ios`，`gf_pc`
  - 全平台（桌面）服：`gf_pc`，`gf_android`，`gf_ios`
- **渠道服**
  - Bilibili服：`gf_pc`，`gf_android_bilibili`
  - 应用宝服：`gf_pc`，`gf_android_tencent`
  - 渠道1服：`gf_pc`，`gf_android_coolpad`，`gf_android_gionee`，`gf_android_huawei`，`gf_android_lenovo`，`gf_android_oppo`，`gf_android_vivo`
  - 渠道2服：`gf_pc`，`gf_android_qihoo`，`gf_android_uc`，`gf_android_wandoujia`，`gf_android_xiaomi`
- **测试服**（需搭配测试专用客户端）
  - 安卓测试服：`beta`
  - iOS测试服：`beta_ios`

## 附录3：崩坏3国服服务器的配置信息所在服务器 IP
 > 以下为获取各个国服服务器配置信息时，所访问的服务器 IP。

- **官服**
  - 安卓国服：`106.14.51.73`
  - iOS国服：`139.224.7.27`
  - 全平台（桌面）服：`106.15.162.73`
- **渠道服**
  - Bilibili服：`139.196.248.220`
  - 应用宝服：`115.159.20.29`
  - 渠道1服：`139.196.248.218`
  - 渠道2服：`139.196.248.219`
- **测试服**（需搭配测试专用客户端）
  - 安卓测试服（外部）：`139.196.1.196:5080`
  - iOS测试服（外部）：`49.235.123.106:16000`

## 附录4：崩坏3服务器状态标识
- **推荐**：`"retcode": 0`、`"server_state": "Recommend"`
- **隐藏**：`"retcode": 0`、`"server_state": "HIDE"`
- **维护**：`"retcode": 2`
