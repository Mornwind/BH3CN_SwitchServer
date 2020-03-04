# 「崩坏3」跨服方式一览（iOS客户端 → 官服服务器）
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
3. **本项目中关于渠道服的部分，仅作学习参考，尚起不到实际用途。** 目前在PC端账号密码登录方式的服务器列表中，实际上是包含四个渠道服的，但是全都被官方隐藏了，目前应该是还没准备好（第2点里面已经说了原因）。所以就算手动解除了隐藏状态，也是登录不进去的。

---

## 效果预览
![国服服务器列表预览](/bh3_region_list_preview.gif)

## iOS 端跨服方式一览

| 跨服方式 | 跨服教程 | 跨服配置<br/>（重定向法） | 跨服配置<br/>（脚本法） |
| :-: | :-: | :-: | :-: |
| [Shadowrocket](https://apps.apple.com/app/id932747118) | [PDF 文档](/Shadowrocket/Shadowrocket_Guide.pdf) | [Markdown 文档](/Shadowrocket/README.md) | - |
| [Surge 4](https://apps.apple.com/app/id1442620678) | [PDF 文档](/Surge_4/Surge_4_Guide.pdf) | [Markdown 文档](/Surge_4/README.md) | [Markdown 文档](/Surge_4/README.md) |
| [Quantumult X](https://apps.apple.com/app/id1443988620) | - | [Markdown 文档](/Quantumult_X/README.md) | [Markdown 文档](/Quantumult_X/README.md) |
| [Loon](https://apps.apple.com/app/id1373567447) | - | [Markdown 文档](/Surge_4/README.md) | [Markdown 文档](/Surge_4/README.md) |
| [Thor HTTP](https://apps.apple.com/app/id1210562295) | 略（见跨服群<sup>[1]</sup>群公告） | 略（见跨服群群文件） | - |
| [HTTP Catcher](https://apps.apple.com/app/id1445874902) | 略（见跨服群群公告） | 略（见跨服群群文件） | - |
| 跨服包 | 略（见 ME 社公众号<sup>[2]</sup>） | - | - |

注：

[1] 崩坏3/少女前线跨服群：

  - ①群：`915089623` （已满）
  - ②群：`703492563`

[2] ME 社公众号：

  - 主：`me_shebao`
  - 备：`me_dby`

---

## 附录1：App 商店链接
- **游戏本体**
  - [崩坏3](https://apps.apple.com/app/id1143402987)

- **代理工具**
  - [Shadowrocket](https://apps.apple.com/app/id932747118)
- **代理&抓包工具**
  - [Surge 4](https://apps.apple.com/app/id1442620678)
  - [Quantumult X](https://apps.apple.com/app/id1443988620)
  - [Loon](https://apps.apple.com/app/id1373567447)
- **抓包工具**
  - [Thor HTTP](https://apps.apple.com/app/id1210562295)
  - [HTTP Catcher](https://apps.apple.com/app/id1445874902)

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

## 附录3：崩坏3服务器状态标识
- **推荐**：`"server_state": "Recommend"`
- **隐藏**：`"server_state": "HIDE"`
