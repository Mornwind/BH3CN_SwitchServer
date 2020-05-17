# 「崩坏3」跨服教程（HTTP Catcher）（iOS 端 → 安卓国服）
 > By: [Mornwind](https://blog.mornwind.cc)
 > 
 > GitHub Link: [Mornwind/BH3CN_SwitchServer/HTTP_Catcher](https://github.com/Mornwind/BH3CN_SwitchServer/tree/master/HTTP_Catcher)

## 致谢
- **参考&协助**
  - 霞ヶ丘詩羽x：[B站专栏（cv3610324）](https://www.bilibili.com/read/cv3610324)

---

## ⚠️ 注意事项 ⚠️
1. **非官方直接提供的“跨服”行为，本身就违反了 Mihoyo 的用户协议。如若担心自己被封号，请勿使用本方法跨服，买对应的设备去玩更安全放心。**
2. 目前在 iOS 端登录安卓国服，仍无法进行充值，还需要自备安卓设备或者用 PC 端进行充值。
3. 本项目内所提到的所有客户端与服务器，均为**国服**。
4. 目前跨服**只可在官服之间进行**。渠道服由于**账号系统**不同以及游戏包体中的**登录器**不同，现阶段没有找到方法跨服，只能通过在 PC 端上扫码进行登录这种方式，敬请见谅。本项目中关于渠道服的部分，仅作学习参考，尚起不到实际用途。
5. **若出现资源缺失，需先进 iOS 国服下载资源。**

## ⚠️ 特别说明 ⚠️
1. 需定时清理抓包记录，避免长时间使用后，占用太多存储空间。

---

## 效果预览
![使用 HTTP Catcher 跨服](/HTTP_Catcher/HTTP_Catcher_Preview.jpg)

---

## 前期准备
- 账号：安卓国服
- 系统：iOS 12+ / iPadOS 13+
- 工具：![](/HTTP_Catcher/HTTP_Catcher_Icon.png) [HTTP Catcher](https://apps.apple.com/app/id1445874902)
- GitHub 项目链接：[Mornwind/BH3CN_SwitchServer/HTTP_Catcher](/HTTP_Catcher)

## 配置方法
1. **下载并导入跨服配置文件**：下载下面的“.hcc”类型的跨服配置文件，通过“共享”或“在其他应用中打开”调出系统分享菜单，然后选择“拷贝到‘HTTP Catcher’”；在 HTTP Catcher 中弹出的“导入”对话框中选择“好的”，即可成功导入。

```
https://raw.githubusercontent.com/Mornwind/BH3CN_SwitchServer/master/HTTP_Catcher/bh3cn_switchserver_v3.9.0.hcc
```

2. **启用跨服配置**：进入“更多”→“重写”，在弹出的“重写列表”界面中，点击下面的跨服配置使其前面出现“✓”。
3. **启用重写功能**：在“重写列表”界面中，打开上面的“重写列表”开关；然后回到“更多”页面。
4. **启用 HTTPS 解密功能**：在“更多”页面，打开最上面的“解密 HTTPS 流量”开关。
5. **安装 MitM 证书**：在上一步中弹出的“安装证书描述文件”对话框中选择“安装”，允许下载配置描述文件，前往系统的“设置”→“通用”→“描述文件与设备管理”中安装 MitM 所需证书。
6. **信任 MitM 证书**：在系统的“设置”→“通用”→“关于本机”→“证书信任设置”中信任该证书；然后回到 HTTP Catcher 的“更多”页面。
7. **启用仅记录消息头**：进入“高级设置”，打开“仅记录消息头”开关；然后回到“历史”页面。
8. **启动 HTTP Catcher**：点击“历史”页面右上角的“启动”，然后在清除了游戏后台的情况下进入游戏，即可完成跨服。（不玩游戏时，别忘了停止 HTTP Catcher。）
