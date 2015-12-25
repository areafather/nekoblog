+++
Categories = ["Development", "Decompile"]
Description = ""
Tags = ["Development", "Nginx"]
date = "2015-12-25T15:29:23+08:00"
title = "微票儿 APP 接口逆向"

+++

## 抓包

使用 Fiddler 进行抓包，分析出获取电影的 API 请求包它的结构如下：
```
POST http://androidcgi.wepiao.com/movie/list HTTP/1.1
channelId: 9
token: 
Content-Length: 198
Content-Type: application/x-www-form-urlencoded
Host: androidcgi.wepiao.com
Connection: Keep-Alive
User-Agent: 

sign=31988D406D64DF28A27502591004BBB8&uid=&v=2015110401&t=1450945308&status=2&cityId=210&imei=89860114245102549313&appkey=9&from=0123456789&appver=5.3.0&deviceid=ffffffff-f5cf-efcc-ffff-ffff868b5e5e
```


需要关注的参数有 sigin，t，status，cityId 几个，其余参数按照上面设置，无需变更。
- t：时间戳
- status：为 1 时表示获取 正在热映 的电影，为 2 时表示获取 即将上映 的电影
- cityId：当前城市 ID
- sign：MD5 签名值

## 反编译

使用 dex2jar 以及 jd-gui 进行反编译，分析 sign（签名值） 的生成过程。

## 测试

```python
# -*- coding: utf-8 -*-
import httplib2
import hashlib
import time


sign_sercet = "zJwaQBQ553lHr6DfnX02WcJtZF"

t = str(int(time.time()))
status = "2"    # 热门电影=1，即将上映=2
cityId = "210"

params = {
    "uid": "",
    "v": "2015110401",
    "t": t,
    "status": status,
    "cityId": cityId,
    "imei": "89860114245102549313",
    "appkey": "9",
    "from": "0123456789",
    "appver": "5.3.0",
    "deviceid": "ffffffff-f5cf-efcc-ffff-ffff868b5e5e"
}

# 对 KV 进行按头字母排序
params_str = ""
keys = params.keys()
keys.sort(reverse=False)
for key in keys:
    params_str += key + "=" + params[key] + "&"
params_str = params_str[:-1]

# 取 sign 值
h = hashlib.md5()
h.update(sign_sercet + params_str)
sign = h.hexdigest().upper()

post_body = "sign=" + sign + "&" + params_str

# 输出添加签名后的 Http Post Body
print post_body

headers = {
    "channelId": "9",
    "token": "",
    "Content-Type": "application/x-www-form-urlencoded",
    "Connection": "Keep-Alive",
    "User-Agent": ""}

httpclent = httplib2.Http()
content = httpclent.request("http://androidcgi.wepiao.com/movie/list", 'POST', headers=headers, body=post_body)[1]
print content
```

## 结果

**Success!**