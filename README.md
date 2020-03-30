# 「崩坏3」跨服方式一览（iOS 端 → 官服服务器）
 > By: [Mornwind](https://blog.mornwind.cc)
 > 
 > GitHub Link: [BH3_Region_Selector](https://github.com/Mornwind/BH3_Region_Selector) 

## 参考来源
 > ① 霞ヶ丘詩羽x：[B站专栏（cv3610324）](https://www.bilibili.com/read/cv3610324)
 > 
 > ② FlintyLemming：[QX规则订阅](https://git.flinty.moe/root/BH3_Region_Selector)

## 前言
作为一个晚登录两三天没能拿到“登录纪念勋章”的安卓国服的甲板老清洁工，自从嫌弃安卓机的卡慢（以及当年月光的光翼特效显示不出来），咬咬牙入了 iPod 和 iPad 之后，便开始发愁：安卓端甲板上的老婆们，要怎么打包带到 iOS 端？

奈何，米忽悠一直不为 iOS 客户端加上安卓国服的登录入口（反过来也没有）。后来 ME 社跨服包的出现，为我带来了一线光明。找“Msk包子”大佬购入了无需自签的 iOS 端跨服客户端以后，连续用了好几个版本，省去了每周重新自签的麻烦，倒也还算舒服（只不过得每隔三四个版本付一次分发平台的证书费）。

最近在 TG 上研究 Surge 4 上可用的签到脚本的时候，偶然结识了一位在用 Quantumult X 的大佬“FlintyLemming”，而他的为崩坏3跨服的方法为我指明了另一条道路，也就促使了本项目的诞生。

在跟“FlintyLemming”大佬进行沟通交流的过程中，我也了解到，他在 Quantumult X 上实现的跨服方法，是借鉴B站一位大佬“霞ヶ丘詩羽x”提供的方案而完成的。而本项目，则是同时借鉴了两位大佬的方法，在 Surge 4 上实现了跨服，同时也为 Quantumult X 用户提供了另一种自定义方案。

此项目的初衷，就是为了能让常挂代理工具（如：Surge 4、Quantumult X）的玩家，无需频繁开关代理工具，就能在忘掉有这么一回事的情况下，在 iOS 端直接登入安卓国服，玩到自己的老婆们，哦不，陪自己的老婆们玩。

---

## ⚠️ 注意事项 ⚠️
1. 本项目内所提到的所有客户端与服务器，均为**国服**。
2. 目前跨服只可在官服之间跨。渠道服由于**账号系统**不同以及游戏包体中的**登录器**不同，现阶段没有找到方法跨服，只能通过在 PC 端上扫码进行登录这种方式，敬请见谅。
3. **本项目中关于渠道服的部分，仅作学习参考，尚起不到实际用途。** 目前在 PC 端账号密码登录方式的服务器列表中，实际上是包含四个渠道服的，但是全都被官方隐藏了，目前应该是还没准备好（第2点里面已经说了原因）。所以就算手动解除了隐藏状态，也是登录不进去的。

---

## 效果预览
![国服服务器列表预览](/bh3_region_list_preview.gif)

---

## iOS 端跨服方式一览

| 跨服方式 | 跨服教程 | 跨服配置<br/>（重定向法） | 跨服配置<br/>（脚本法） |
| :-: | :-: | :-: | :-: |
| [HTTP Catcher](/HTTP_Catcher) | [一图流](/HTTP_Catcher/BH3_SwitchServer_Guide_HTTP_Catcher.jpg) | [.hcc 重写列表文件 v3.8.0](/HTTP_Catcher/bh3_region_selector_v3.8.0.hcc) | - |
| [Thor](/Thor) | [一图流](/Thor/BH3_SwitchServer_Guide_Thor.jpg) | [.f4thor 过滤器文件](/Thor/bh3_region_selector.f4thor) | - |
| [Shadowrocket](/Shadowrocket) | [Markdown 文档](/Shadowrocket/README.md) | [Markdown 文档](/Shadowrocket/README.md) | - |
| [Pepi](/Pepi) | [Markdown 文档](/Pepi/README.md) | [Markdown 文档](/Pepi/README.md) | - |
| [Quantumult](/Quantumult) | [Markdown 文档](/Quantumult/README.md) | [Markdown 文档](/Quantumult/README.md) | - |
| [Quantumult X](/Quantumult_X) | [FlintyLemming](https://git.flinty.moe/root/BH3_Region_Selector/-/blob/master/README.md) | [Markdown 文档](/Quantumult_X/README.md) | [Markdown 文档](/Quantumult_X/README.md) |
| [Surge 4](/Surge_4) | [Markdown 文档](/Surge_4/README.md) | [Markdown 文档](/Surge_4/README.md) | [Markdown 文档](/Surge_4/README.md) |
| [Loon](/Loon) | 参考 Surge 4 | 参考 Surge 4 | 参考 Surge 4 |
| ME 社跨服包 | 见 ME 社公众号 | - | - |

| 跨服方式 | 国区商店<br/>购买与下载 | 正规渠道价格<br/>接受程度 | App 入门<br/>容易程度 | 首次跨服操作<br/>方便程度 | 可自定义<br/>服务器列表 | 设备上同时<br/>挂梯与跨服 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| HTTP Catcher | ✅ | ★★★ | ★★★ | ★★★★ | ✅ | ❌ |
| Thor | ✅ | ★ | ★★ | ★★★★ | ✅ | ❌ |
| Shadowrocket | ❌ | ★★★ | ★★★★ | ★★★ | ❌ | ✅ |
| Pepi | ❌ | ★★★★ | ★★ | ★ | ❌ | ✅ |
| Quantumult | ❌ | ★★ | ★★ | ★ | ❌ | ✅ |
| Quantumult X | ❌ | ★ | ★ | ★ | ✅ | ✅ |
| Surge 4 | ❌ | ☆ | ★ | ★ | ✅ | ✅ |
| Loon | ❌ | ★★★ | ★ | ★ | ✅ | ✅ |
| ME 社跨服包<br/>（自签） | - | ★★★★★ | ★★★ | ★★ | ❌ | ✅ |
| ME 社跨服包<br/>（免签） | - | ★ | ★★★★★ | ★★★★★ | ❌ | ✅ |

注：

[1] 崩坏3/少女前线跨服群：[`915089623`](https://jq.qq.com/?_wv=1027&k=5rnvPAT)

[2] ME 社公众号：

  - 主：`me_shebao`
  - 备：`me_dby`

---

## 附录1：App 商店链接
- **游戏本体**
  - [崩坏3](https://apps.apple.com/app/id1143402987)

- **抓包工具**
  - [HTTP Catcher](https://apps.apple.com/app/id1445874902)
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

## 附录4：崩坏3服务器状态标识
- **推荐**：`"retcode": 0`、`"server_state": "Recommend"`
- **隐藏**：`"retcode": 0`、`"server_state": "HIDE"`
- **维护**：`"retcode": 2`
