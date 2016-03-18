## OS X
OS X 的生活

### Software
- [Homebrew](http://brew.sh)
- [Homebrew Cask](http://caskroom.io)
- [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)
- [Monokai Theme](https://github.com/stephenway/monokai.terminal)


### Notice
- 使用 brew 安装 Python3 时应该使用 `brew install python --framework`。因为 Framework 安装模式更加独立，不会冲突链接到系统原先版本的 Python。


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