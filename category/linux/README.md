#linux

- [Vim基本命令](http://linux.chinaunix.net/techdoc/beginner/2009/12/20/1150108.shtml)

- 开机时默认打开小键盘  
```
sudo apt-get install numlockx
 #完成后打开rc.local进行修改
sudo vim /etc/rc.local
 #在最后一行添加内容
if [ -x /usr/bin/numlockx ]; then
numlockx on
fi
```

- 安装PIL(Python Imaging Library)  
```
sudo apt-get install python-dev
sudo apt-get install pip
#下载编译zlib : http://www.tuicool.com/articles/QjEvm2
sudo pip install PIL --allow-external PIL --allow-unverified PIL
```