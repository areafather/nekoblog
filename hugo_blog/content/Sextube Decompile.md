+++
Categories = ["Development", "Python"]
Description = ""
Tags = ["Development", "Nginx"]
date = "2016-04-15T13:05:23+08:00"
title = "老司机 APP 逆向"

+++

## 前言
本文对 ~~S**ube~~ 进行反编译工作，未使用 Fiddler 进行抓包，直接 Jadx 进行爆破。

## 一些爆破点

- au.com.stklab.minehd.e.a.class  
**密钥生成**

- au.com.stklab.minehd.b.a.class  
**视频链接生成**

## Kernel
代码做了反和谐处理，请勿用于非法用途！

```python
#!/usr/bin/env python
# coding:utf-8

import base64
import hashlib
import requests
from Crypto.Cipher import AES
b64decode = base64.b64decode


#
# 普通司机
#
class Dirver:
    # 车牌号
    plate_number = '13-954'

    # 后视镜
    door_mirror = {
        'UserAgent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9.2) Gecko/20100115 Firefox/3.6'
    }

    # 油量
    fuel = []


#
# 老司机
#
class OldDriver(Dirver):
    # 车牌号
    plate_number = 'abcdefgherpussyyyyyyyyyuserverion1cache2gohomewithfatherandmotherandsister3dif4cliff'

    hexie1 = 'aHR0cDovL2xpbmsuc3lkbmV5ZWxpdGUuY29tL3ZlcnNpb25jaGVja180LnBocD9jYXRlZ29yeT0zNSZwYWdlPQ=='
    hexie2 = 'aHR0cDovL3NleHR1YmUtaXBob25lLmNvbS92ZXJzaW9uY2hlY2tfNS5waHA/Y2hhbGxlbmdlPQ=='
    hexie3 = 'aHR0cDovL3ZpZGVvLnNleHZ4LmNvbS9saW5rL3ZpZGVvLw=='

    # 发车
    def start_drive(self, gear):
        s1 = requests.request(
            'GET', self.reverse_hexie(self.hexie1) + str(gear),
            headers=self.door_mirror
        ).content.decode('utf8')

        s4 = self.drift(s1)
        self.rotate(s4)
        self.explode()

    # 漂移
    def drift(self, s1):
        sub1 = self.plate_number[-5:]
        sub2 = self.plate_number[7:15]
        sub3 = self.plate_number[50:74]
        sub4 = self.plate_number[56:59]

        s2 = sub1 + sub4 + sub2
        s3 = 'f%s%sk%s%shaha' % ('u', 'c', sub1, sub3)

        key = hashlib.md5(s3.encode('utf8')).hexdigest()

        cryptor = AES.new(key, AES.MODE_CFB, s2)
        plain_text = cryptor.decrypt(b64decode(s1))

        return plain_text.decode('utf8')

    # 旋转
    def rotate(self, s4):
        oil = s4.split()

        # 油量凭空暴增, 准备爆炸
        o = {}
        for i in range(len(oil)):
            remainder = i % 3

            if remainder == 0:
                o['id'] = oil[i]

            elif remainder == 1:
                o['thumbnail'] = oil[i]

            else:
                o['title'] = oil[i]
                self.fuel.append(o)
                o = {}

    # 爆炸!
    def explode(self):
        for oil in self.fuel:
            st = requests.request(
                'GET', self.reverse_hexie(self.hexie2) + oil['id'],
                headers=self.door_mirror
            ).content.decode('utf8')

            oil['mp4link'] = '%s%s.mp4?st=%s' % (self.reverse_hexie(self.hexie3), oil['id'], st)

            print(oil)

    @staticmethod
    def reverse_hexie(hexie):
        return b64decode(hexie).decode('utf8')


if __name__ == '__main__':
    OldDriver().start_drive(77)

```


## DEMO

**Success!**

![](/sextube_decompile.jpg)

