+++
date = "2016-09-17T11:16:27+08:00"
title = "豆瓣 FM 逆向"
+++

## 起源

开源项目 Murmur 使用的 豆瓣 FM 的 API 已经失效一段时间了（具体情况可查看该 [Issue](https://github.com/nekocode/murmur/issues/6)）。为了让 Murmur 重新正常运作，我逆向了最新版的 豆瓣 FM。

## 收获

豆瓣 FM 的代码基本上没有混淆，所有 API 都使用 Https 协议。推送使用 MQTT 协议实现，而知乎使用的是 Websocket。MQTT 整体更优，而 Websocket 的话能兼顾 Web 端，各有优势。

豆瓣 FM 使用的 MQTT 客户端库为 Eclipse 的 [Paho](https://github.com/eclipse/paho.mqtt.android)，但是代码明显不是官方最新的。

相较于知乎，豆瓣 FM 的技术栈明显旧很多。