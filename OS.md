## OS X
OS X 的生活

### Software
- [Homebrew](http://brew.sh)
- [Homebrew Cask](http://caskroom.io)
- [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)
- [Monokai Theme](https://github.com/stephenway/monokai.terminal)


### Notice
- 使用 brew 安装 Python3 时应该使用 `brew install python --framework`。因为 Framework 安装模式更加独立，不会冲突链接到系统原先版本的 Python。

- 安装 enjarify 时应该将脚本链接到 `/usr/local/bin/` 文件夹下，具体原因可查看 [stackexchange](http://apple.stackexchange.com/questions/196224/unix-ln-s-command-not-permitted-in-osx-el-capitan-beta3)
```
ln -s $PWD/enjarify.sh /usr/local/bin/enjarify
```


### Note
- 让 Finder 标题栏显示目录路径：
```
defaults write com.apple.finder _FXShowPosixPathInTitle -bool YES 
killall Finder
```

- 安装配置 MySQL
```
brew install mysql
mysql.server start
mysqladmin -u root -p password <密码>
```

- 安装 rvm
```sh
brew instal gpg
# http://www.rvm.io/
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
\curl -sSL https://get.rvm.io | bash -s stable

source ~/.rvm/scripts/rvm
rvm install ruby-2.3.0
rvm use ruby-2.3.0
```

- 安装 [dryrun](https://github.com/cesarferreira/dryrun)
```sh
# 更换 gem 源（也可以替换为山东理工大学的源 http://ruby.sdutlinux.org/）
gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org/
gem sources -u

# 安装 dryrun
gem install dryrun
```

- 将文件内容复制到剪贴板
``` sh
pbcopy < filepath
```

- 在 zsh 中使用 ss 提供的 proxy
``` sh
brew install proxychains-ng

vim /usr/local/etc/proxychains.conf
# Add proxy to the [ProxyList]
# socks5 127.0.0.1 1080

# Test
proxychains4 curl google.com
```


### Vim
- 使用官方最新版的 vim
```
brew install vim
```
在 `~/.zshrc` 中添加 `alias`
```
alias vim="/usr/local/Cellar/vim/7.4.1345/bin/vim"
```


## Linux

- [Linux工具快速教程](http://linuxtools-rst.readthedocs.org/zh_CN/latest/index.html)

- 双系统 Grub 引导
```
nano  /boot/grub/grub.cfg

# 添加以下菜单项：
menuentry 'Microsoft Windows 8' --class windows --class os {
	insmod ntfs
	insmod search_fs_uuid
	insmod chain
	# set root='hd0,gpt1'
	search --no-floppy --fs-uuid --set=root 67E3-17ED
	chainloader ($root)/EFI/Microsoft/Boot/bootmgfw.efi
}
```


- 默认打开小键盘   
```
yaourt -Ss numlockx
# 使用 systemd 方式开启执行脚本 http://my.oschina.net/osgit/blog/102567
```

- [Shadowsocks](https://lc4t.me/arch-ss/)
- [安装 Android Studio](http://alwayswithme.github.io/jekyll/update/2015/08/12/setup-android-in-archlinux.html)
- [Vim 学习](http://ju.outofmemory.cn/entry/79671)


## CentOS 运维相关

- grep 命令有问题时，使用 `yum update` 或 `yum update grep` 更新 grep 版本
- 
- 安装 Python3
```sh
# 安装 EPEL 源
yum install epel-release
yum install python34
yum install python34-setuptools
easy_install-3.4 pip
```

- 添加新用户，并禁用 root 用户登录
```sh
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

- 安装并配置 MariaDB
```sh
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

- 安装 MySQL-python (for python2.7) 和 PyMySQL (for python3.x)
```sh
yum install MySQL-python
pip3 install pymysql
```

- 安装 Redis
```sh
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

