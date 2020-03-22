# 「崩坏3」跨服配置（Pepi）（iOS客户端 → 官服服务器）
 > By: [Mornwind](https://blog.mornwind.cc)
 > 
 > GitHub Link: [BH3_Region_Selector/Shadowrocket](https://github.com/Mornwind/BH3_Region_Selector/tree/master/Pepi) 

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
1. 新建的节点为本机地址（可以自行谷歌一下“localhost”及“127.0.0.1”的用途），并非自建服务器。

---

## 效果预览
![使用 Pepi 跨服](/Pepi/pepi_preview.jpg)

## 配置信息（重定向法）
 > 默认全平台列表（本身就是完整列表，由官方云端控制，只不过账号密码登录方式中隐藏了渠道服入口）。
 > 
 > 仅使用 **URL 重定向（URL Rewrite）** 功能实现。

### 方法一：直接下载简易跨服配置
 > 适合于：从未使用过 Pepi 的新用户；曾用过 Pepi 但目前没有上外网需求的老用户；折腾不来或不爱折腾的新、老用户。

从 URL 下载规则文件：

```
https://raw.githubusercontent.com/Mornwind/BH3_Region_Selector/master/Pepi/bh3_region_selector.conf
```

在 HTTPS 中设置域名：

```
*.bh3.com
```

### 方法二：手动写入当前使用中配置
 > 适合于：目前仍在使用 Pepi 上外网的老用户；爱折腾的新、老用户。

手动编辑规则文件，在对应位置加入以下内容：

```
[URL REWRITE]
# 获取全平台服务器列表
^https:\/\/global(.+?)\.bh3\.com\/query_dispatch\?version=(\d*\.\d*\.\d*)_gf_(.*) https://global$1.bh3.com/query_dispatch?version=$2_gf_pc HEADER
# 改写连入服务器的客户端标识
# > 官服
# >> 安卓国服
^http:\/\/106\.14\.51\.73\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*) http://106.14.51.73/query_gameserver?version=$1_gf_android HEADER
# >> iOS国服
^http:\/\/139\.224\.7\.27\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*) http://139.224.7.27/query_gameserver?version=$1_gf_ios HEADER
# >> 全平台（桌面）服
^http:\/\/106\.15\.162\.73\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*) http://106.15.162.73/query_gameserver?version=$1_gf_pc HEADER
```

在 HTTPS 中设置域名：

```
*.bh3.com
```