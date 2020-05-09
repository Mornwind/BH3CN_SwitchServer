# 「崩坏3」跨服教程（iHTTP Tracker）（iOS 端 → 安卓国服）
 > By: [Mornwind](https://blog.mornwind.cc)
 > 
 > GitHub Link: [BH3CN_SwitchServer/iHTTP_Tracker](https://github.com/Mornwind/BH3CN_SwitchServer/tree/master/iHTTP_Tracker)

## 参考来源
 > ① 霞ヶ丘詩羽x：[B站专栏（cv3610324）](https://www.bilibili.com/read/cv3610324)

---

## ⚠️ 注意事项 ⚠️
1. **非官方直接提供的“跨服”行为，本身就违反了 Mihoyo 的用户协议。如若担心自己被封号，请勿使用本方法跨服，买对应的设备去玩更安全放心。**
2. 目前在 iOS 端登录安卓国服，仍无法进行充值，还需要自备安卓设备或者用 PC 端进行充值。
3. 本项目内所提到的所有客户端与服务器，均为**国服**。
4. 目前跨服**只可在官服之间进行**。渠道服由于**账号系统**不同以及游戏包体中的**登录器**不同，现阶段没有找到方法跨服，只能通过在 PC 端上扫码进行登录这种方式，敬请见谅。本项目中关于渠道服的部分，仅作学习参考，尚起不到实际用途。
5. **若出现资源缺失，需先进 iOS 国服下载资源。**

## ⚠️ 特别说明 ⚠️
1. 需 iHTTP Tracker 的 2.0 (32) 及以上 TF 或商店版本。

---

## 效果预览
![使用 iHTTP Tracker 跨服](/iHTTP_Tracker/iHTTP_Tracker_Preview.jpg)

---

## 前期准备
- 账号：安卓国服
- 系统：iOS 12+ / iPadOS 13+
- 工具：[iHTTP Tracker](https://apps.apple.com/app/id1463315864)
- GitHub 项目链接：[Mornwind/BH3CN_SwitchServer/iHTTP_Tracker](/iHTTP_Tracker)

## 配置方法
1. **下载并导入跨服配置文件**：找到并下载“.iRW”类型的跨服配置文件，通过“共享”或“在其他应用中打开”调出系统分享菜单，然后选择“拷贝到‘iHTTP Tracker’”；在 iHTTP Tracker 中弹出的“检测到导入重写规则”对话框中选择“导入”，即可成功导入。
2. **启用跨服配置**：进入“设置”→“规则列表”，在“重写”页面中，确保刚刚导入的跨服配置的开关已打开；然后返回“设置”页面。
3. **安装 MitM 证书**：进入“设置”→“HTTPS 证书管理”，在“HTTPS 证书管理”页面中点击“前往安装证书”，在跳转的浏览器页面中点击“rootCA.pem”按钮，允许下载配置描述文件，前往系统的“设置”→“通用”→“描述文件与设备管理”中安装 MitM 所需证书。
4. **信任 MitM 证书**：在系统的“设置”→“通用”→“关于本机”→“证书信任设置”中信任该证书；然后回到 Thor 的“设置”页面。
5. **启用 HTTPS 解析**：在“设置”页面中，打开“开启 HTTPS”开关；然后返回首页。
6. **启动 iHTTP Tracker**：点击下方蓝色的启动按钮，然后在清除了游戏后台的情况下进入游戏，即可完成跨服。（不玩游戏时，别忘了停止 iHTTP Tracker。）
