# 「崩坏3」跨服教程（Shadowrocket）（iOS 端 → 官服服务器）
 > By: [Mornwind](https://blog.mornwind.cc)
 > 
 > GitHub Link: [BH3_Region_Selector/Shadowrocket](https://github.com/Mornwind/BH3_Region_Selector/tree/master/Shadowrocket)

## 参考来源
 > ① 霞ヶ丘詩羽x：[B站专栏（cv3610324）](https://www.bilibili.com/read/cv3610324)
 > 
 > ② FlintyLemming：[QuanX 跨服规则](https://git.flinty.moe/root/BH3_Region_Selector)

---

## ⚠️ 注意事项 ⚠️
1. **非官方直接提供的“跨服”行为，本身就违反了 Mihoyo 的用户协议。如若担心自己被封号，请勿使用本方法跨服，买对应的设备去玩更安全放心。**
2. 目前在 iOS 端登录安卓国服，仍无法进行充值，还需要自备安卓设备或者用 PC 端进行充值。
3. 本项目内所提到的所有客户端与服务器，均为**国服**。
4. 目前跨服**只可在官服之间进行**。渠道服由于**账号系统**不同以及游戏包体中的**登录器**不同，现阶段没有找到方法跨服，只能通过在 PC 端上扫码进行登录这种方式，敬请见谅。本项目中关于渠道服的部分，仅作学习参考，尚起不到实际用途。
5. **若出现资源缺失，需先进 iOS 国服下载资源。**

## ⚠️ 特别说明 ⚠️
1. 一定要是 Shadowrocket 的 2.1.49 (964) 及以上 TF 或商店版本，因为旧版本中有一个“正则出错导致匹配结果越界”的 Bug，会使得 VPN 在触发规则时停止运行。
2. 新建的节点为本机地址（可以自行谷歌一下“localhost”及“127.0.0.1”的用途），并非自建服务器。

---

## 效果预览
![使用 Shadowrocket 跨服](/Shadowrocket/Shadowrocket_Preview.jpg)

---

## 前期准备
- 账号：安卓国服
- 系统：iOS 12+ / iPadOS 13+
- 工具：[Shadowrocket](https://apps.apple.com/app/id932747118) 
- GitHub 项目链接：[Mornwind/BH3_Region_Selector/Shadowrocket](/Shadowrocket)

## 配置方法（重定向法）
 > 默认全平台列表（本身就是完整列表，由官方云端控制，只不过账号密码登录方式中隐藏了渠道服入口）。
 > 
 > 仅使用 **URL 重定向（URL Rewrite）** 功能实现。

### 方法一：直接订阅简易跨服配置
 > 适合于：从未使用过 Shadowrocket 的新用户；曾用过 Shadowrocket 但目前没有上外网需求的老用户；折腾不来或不爱折腾的新、老用户。

1. **新建本机节点**：在首页，点击右上角“+”，添加一个类型为“HTTP”（或“HTTPS”）、地址为“localhost”（或“127.0.0.1”）、端口为“1080”（或其他在 1-65535 之间的端口）的节点，然后在首页的“服务器节点”中选中该节点。
2. **设置路由模式**：将“全局路由”设置为“直连”。
3. **设置远程订阅 URL**：在“配置文件”页面，点击右上角“+”，输入下面的远程订阅 URL，点击下载。

```
https://raw.githubusercontent.com/Mornwind/BH3_Region_Selector/master/Shadowrocket/bh3_region_selector.conf
```

4. **下载并应用简易跨服配置**：在“远程文件”中点击该 URL，选择“使用配置”，等待下载完毕后，即可看到“本地文件”中加载了本配置。
5. **安装 MitM 证书**：从“本地文件”中找到当前正在使用的配置，点击它，在弹出的列表中选择“编辑配置”，进入“HTTPS 解密”，点击“证书授权”部分的“密码”右侧的ⓘ，点击“安装根证书”，允许下载配置描述文件，前往系统的“设置”→“通用”→“描述文件与设备管理”中安装 MitM 所需证书。
6. **信任 MitM 证书**：在系统的“设置”→“通用”→“关于本机”→“证书信任设置”中信任该证书；保存“HTTPS 解密”设置，然后返回主页。
7. **启动 Shadowrocket**：打开 Shadowrocket 的连接开关，然后在清除了游戏后台的情况下进入游戏，即可实现跨服。
8. **停止 Shadowrocket**：不玩游戏时，别忘了停止 Shadowrocket 的连接。

### 方法二：手动写入当前使用中配置
 > 适合于：目前仍在使用 Shadowrocket 上外网的老用户；爱折腾的新、老用户。

1. **进入配置编辑界面**：在“配置文件”页面，从“本地文件”中找到当前正在使用的配置，点击它，在弹出的列表中选择“编辑纯文本”。
2. **添加跨服配置**：在弹出的编辑窗口中，将以下配置中 `[URL Rewrite]`、`[MITM]` 两处下方的代码，在配置文件中分别找到对应位置复制进去，然后点击右上角的“保存”。

```
[URL Rewrite]
# 崩坏3 跨服
# > 获取全平台服务器列表
^https:\/\/(.+?)\.bh3\.com\/query_dispatch\?version=(.+?)_gf_(.+?)&t=(\d+) https://$1.bh3.com/query_dispatch?version=$2_gf_pc&t=$4 HEADER
# > 改写连入服务器的客户端标识
# >> 安卓国服
^http:\/\/106\.14\.51\.73\/query_gameserver\?version=(.+?)_gf_(.+?)&t=(\d+)&uid=(\d+) http://106.14.51.73/query_gameserver?version=$1_gf_pc&t=$3&uid=$4 HEADER
# >> iOS国服
^http:\/\/139\.224\.7\.27\/query_gameserver\?version=(.+?)_gf_(.+?)&t=(\d+)&uid=(\d+) http://139.224.7.27/query_gameserver?version=$1_gf_pc&t=$3&uid=$4 HEADER
# >> 全平台（桌面）服
^http:\/\/106\.15\.162\.73\/query_gameserver\?version=(.+?)_gf_(.+?)&t=(\d+)&uid=(\d+) http://106.15.162.73/query_gameserver?version=$1_gf_pc&t=$3&uid=$4 HEADER

[MITM]
hostname = *.bh3.com
```

3. **启用 HTTPS 解密**：从“本地文件”中找到当前正在使用的配置，点击它，在弹出的列表中选择“编辑配置”，进入“HTTPS 解密”，打开最上面“HTTPS 解密”的开关。
4. **安装 MitM 证书**：在“HTTPS 解密”的“证书授权”部分，点击“密码”右侧的ⓘ，点击“生成新的 CA 证书”，成功生成证书后，再点击“安装根证书”，允许下载配置描述文件，前往系统的“设置”→“通用”→“描述文件与设备管理”中安装该证书。
5. **信任 MitM 证书**：在系统的“设置”→“通用”→“关于本机”→“证书信任设置”中信任该证书；保存“HTTPS 解密”设置，然后返回主页。
6. **重启 Shadowrocket**：为确保修改生效，可以开关一次 Shadowrocket 的连接开关，然后在清除了游戏后台的情况下进入游戏，即可实现跨服。
