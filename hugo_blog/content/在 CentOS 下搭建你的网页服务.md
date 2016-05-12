+++
Categories = ["Development", "Backend"]
Description = ""
Tags = ["Development", "Backend"]
date = "2016-05-12T23:45:18+08:00"
title = "在 CentOS 下搭建你的网页服务"

+++

## 前言
本文大部分内容来自我的 **[GitBlog 中的 OS.md 一节](https://github.com/nekocode/nekoblog/blob/master/OS.md#centos-运维相关)**。本文在阿里云一台 `ESC 服务器` 上测试通过。

## Start
安装 EPEL 源

```
yum install epel-release
```

发现 grep 命令有问题，更新系统命令

```
yum update
```

安装 Python3

```
yum install python34
yum install python34-setuptools
easy_install-3.4 pip
```

安装 Python2 的 pip

```
yum install python-setuptools
easy_install pip
```

添加新用户，并禁用 root 用户登录

```
# 添加新用户并更改密码
useradd <username>
passwd <username>

# 修改 sshd 配置，禁止 root 用户登录
vim /etc/ssh/sshd_config
# 将 PermitRootLogin 的 yes 改成 no

# 添加用户进 sudoers（可以使用 sudo 命令）
cd /etc
chmod 777 sudoers
vim sudoers
# 在原先的 root ALL=(ALL) ALL 下添加
# <username> ALL=(ALL) ALL
chmod 440 sudoers
```

安装并配置 MariaDB

```
yum install mariadb mariadb-server
# 启动mariadb
systemctl start mariadb
# 开机自启动
systemctl enable mariadb
# 设置 root密码等相关
mysql_secure_installation
# 测试登录
mysql -uroot -p<password>
```

安装 MySQL-python (for python2.7) 和 PyMySQL (for python3.x)

```
yum install MySQL-python
pip3 install pymysql
```

安装 Redis

```
yum install redis
cd /etc
chmod 777 redis.conf
vim redis.conf
# 修改配置：
# daemonize yes  # Redis 将以守护进程的方式运行
# timeout 300    # 当客户端闲置 300 秒后中断链接
chmod 644 redis.conf

# 开启服务
systemctl start redis.service
# Test
redis-cli
```

安装并配置 Supervisor

```
pip install supervisor

# 在当前目录创建默认配置
echo_supervisord_conf  >supervisord.conf
# 创建 log 目录来储存输出
mkdir log
```

修改配置：vim supervisord.conf

```
[unix_http_server]
file = /tmp/supervisor.sock

[supervisord]
logfile = %(here)s/log/supervisord.log
pidfile = /tmp/supervisord.pid
directory = %(here)s

[supervisorctl]
serverurl = unix:///tmp/supervisor.sock

[rpcinterface:supervisor]
supervisor.rpcinterface_factory = supervisor.rpcinterface:make_main_rpcinterface

[program:myapp]
user = nc
command = python3 index.py
directory = %(here)s
stdout_logfile = %(here)s/log/myapp.log
stderr_logfile = %(here)s/log/myapp_err.log
```

启动服务

```
# 启动所有应用
supervisorctl -c supervisord.conf start all
# 重启所有应用
supervisorctl -c supervisord.conf restart all
# 停止所有应用
supervisorctl -c supervisord.conf stop all
# 修改配之后需要重载
supervisorctl -c supervisord.conf reload
```

### 测试用 index.py

```
import tornado.ioloop
import tornado.web
 
class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, I'm nekocode!")
 
application = tornado.web.Application([
    (r"/", MainHandler),
])
 
if __name__ == "__main__":
    application.listen(8888)
    tornado.ioloop.IOLoop.instance().start()
```