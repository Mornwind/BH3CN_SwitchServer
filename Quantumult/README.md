# 「崩坏3」跨服教程（Quantumult）（iOS客户端 → 官服服务器）
 > By: [Mornwind](https://blog.mornwind.cc)
 > 
 > GitHub Link: [BH3_Region_Selector/Quantumult](https://github.com/Mornwind/BH3_Region_Selector/tree/master/Quantumult) 

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
1. 每个版本更新后，需先进 iOS 国服下载资源并打一把联机。

---

## 效果预览
![使用 Quantumult 跨服](/Quantumult/quantumult_preview.jpg)

---

## 前期准备
- 账号：安卓国服
- 系统：iOS 12+ / iPadOS 13+
- 工具：[Quantumult](https://apps.apple.com/app/id1252015438) 
- GitHub 项目链接：[Mornwind/BH3_Region_Selector/Quantumult](/Quantumult)

## 配置方法（重定向法）
 > 默认全平台列表（本身就是完整列表，由官方云端控制，只不过账号密码登录方式中隐藏了渠道服入口）。
 > 
 > 仅使用 **URL 重定向（URL Rewrite）** 功能实现。

### 方法一：直接下载简易跨服配置
 > 适合于：从未使用过 Quantumult 的新用户；曾用过 Quantumult 但目前没有上外网需求的老用户；折腾不来或不爱折腾的新、老用户。

1. **下载简易跨服配置**：在“设置”页面的“配置文件”部分，点击“下载配置文件”，在弹出的窗口中输入下面的配置文件下载 URL，点击“好”来下载配置文件，然后在弹出的配置编辑窗口中点击右上角“保存”。

```
https://raw.githubusercontent.com/Mornwind/BH3_Region_Selector/master/Quantumult/bh3_region_selector.conf
```

2. **启用 HTTPS 解密**：在“设置”页面的“TCP”部分，找到“HTTPS 解密”点击进入，然后打开“HTTPS 解密”的开关。
3. **配置 MitM 证书**：点击下方“密钥及证书”部分中的“生成密钥及证书”，成功生成证书后，点击右上角“保存”，允许下载配置描述文件，前往系统的“设置”→“通用”→“描述文件与设备管理”中安装该证书，并在系统的“设置”→“通用”→“关于本机”→“证书信任设置”中信任该证书；保存“HTTPS 解密”设置，然后返回“主页”。
4. **启动 Quantumult**：打开“主页”右上角的连接开关，然后在清除了游戏后台的情况下进入游戏，即可实现跨服。
5. **停止 Quantumult**：不玩游戏时，别忘了停止 Quantumult 的连接。

### 方法二：手动写入当前使用中配置
 > 适合于：目前仍在使用 Quantumult 上外网的老用户；爱折腾的新、老用户。

1. **进入配置编辑界面**：在“设置”页面的“配置文件”部分，点击“编辑配置文件”。
2. **添加跨服配置**：在弹出的编辑窗口中，将以下配置中 `[REWRITE]`、`[MITM]` 两处下方的代码，在配置文件中分别找到对应位置复制进去，然后点击右上角的“保存”。

```
[REWRITE]
# 获取全平台服务器列表
^https:\/\/global(.+?)\.bh3\.com\/query_dispatch\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*) url 302 https://global$1.bh3.com/query_dispatch?version=$2_gf_pc&t=$4
# 改写连入服务器的客户端标识
# > 官服
# >> 安卓国服
^http:\/\/106\.14\.51\.73\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) url 302 http://106.14.51.73/query_gameserver?version=$1_gf_android&t=$3&uid=$4
# >> iOS国服
^http:\/\/139\.224\.7\.27\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) url 302 http://139.224.7.27/query_gameserver?version=$1_gf_ios&t=$3&uid=$4
# >> 全平台（桌面）服
^http:\/\/106\.15\.162\.73\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) url 302 http://106.15.162.73/query_gameserver?version=$1_gf_pc&t=$3&uid=$4

[MITM]
hostname = *.bh3.com
```

3. **启用 HTTPS 解密**：在“设置”页面的“TCP”部分，找到“HTTPS 解密”点击进入，然后打开“HTTPS 解密”的开关。
4. **配置 MitM 证书**：点击下方“密钥及证书”部分中的“生成密钥及证书”，成功生成证书后，点击右上角“保存”，允许下载配置描述文件，前往系统的“设置”→“通用”→“描述文件与设备管理”中安装该证书，并在系统的“设置”→“通用”→“关于本机”→“证书信任设置”中信任该证书；保存“HTTPS 解密”设置，然后返回“主页”。
5. **重启 Quantumult**：为确保修改生效，可以开关一次 Quantumult 的连接开关，然后在清除了游戏后台的情况下进入游戏，即可实现跨服。
