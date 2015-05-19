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
##--
sudo apt-get install libjpeg62-dev
sudo apt-get install zlib1g-dev
sudo apt-get install libfreetype6-dev
sudo apt-get install liblcms1-dev
#setup.py 214 line
#add_directory(library_dirs, "/usr/lib/x86_64-linux-gnu")
sudo rm -rf /usr/lib/python2.7/dist-packages/PIL
sudo rm /usr/lib/python2.7/dist-packages/PIL.pth
sudo rm -rf /usr/local/lib/python2.7/dist-packages/PIL
sudo rm /usr/local/lib/python2.7/dist-packages/PIL.pth
##--
sudo pip install PIL --allow-external PIL --allow-unverified PIL
```