# 「崩坏3」跨服配置（Shadowrocket）（iOS客户端 → 官服服务器）
 > By: [Mornwind](https://github.com/Mornwind)
 > 
 > GitHub Link: [BH3_Region_Selector](https://github.com/Mornwind/BH3_Region_Selector/Shadowrocket) 

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
1. 一定要是 Shadowrocket 的 2.1.49 (964) 及以上 TF 或商店版本，因为旧版本中有一个“正则出错导致匹配结果越界”的 Bug，会使得 VPN 在触发规则时停止运行。
2. 新建的节点为本机地址（可以自行谷歌一下“localhost”及“127.0.0.1”的用途），并非自建服务器。

---

## 效果预览
![使用 Shadowrocket 跨服](/Shadowrocket/shadowrocket_preview.jpg)

## 配置信息（重定向法）
 > 默认全平台列表（本身就是完整列表，由官方云端控制，只不过账号密码登录方式中隐藏了渠道服入口）。
 > 
 > 仅使用 **URL 重定向（URL Rewrite）** 功能实现。

### 方法一：直接订阅简易跨服配置
1. 在首页，点击右上角“+”，添加一个类型为“HTTPS”、地址为“localhost”或“127.0.0.1”、端口为“1080”的节点，然后在首页的“服务器节点”中选中该节点；
2. 将“全局路由”改为“直连”；
3. 在"配置文件"页面，点击右上角“+”，输入以下 URL，下载简易跨服配置文件；

```
https://raw.githubusercontent.com/Mornwind/BH3_Region_Selector/master/Shadowrocket/bh3_region_selector.conf
```

4. 然后在“远程文件”中点击该 URL，选择“使用配置”；
5. 等待下载完毕后，即可看到“本地文件”中加载了本配置；
6. 到系统中安装并信任 MitM 所需证书；
7. 开启 Shadowrocket 的 VPN 开关，进入游戏；
8. 不用时记得关闭 VPN 开关。

### 方法二：手动添加进当前配置
```
[URL Rewrite]
# 获取全平台服务器列表
^https:\/\/global(.+?)\.bh3\.com\/query_dispatch\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*) https://global$1.bh3.com/query_dispatch?version=$2_gf_pc&t=$4 HEADER

# 改写连入服务器的客户端标识
# > 官服
# >> 安卓国服
^http:\/\/106\.14\.51\.73\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://106.14.51.73/query_gameserver?version=$1_gf_android&t=$3&uid=$4 HEADER
# >> iOS国服
^http:\/\/139\.224\.7\.27\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.224.7.27/query_gameserver?version=$1_gf_ios&t=$3&uid=$4 HEADER
# >> 全平台（桌面）服
^http:\/\/106\.15\.162\.73\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://106.15.162.73/query_gameserver?version=$1_gf_pc&t=$3&uid=$4 HEADER

[MITM]
hostname = *.bh3.com
```