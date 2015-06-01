- 显示Mac隐藏文件的命令:  

``` 
defaults write com.apple.finder AppleShowAllFiles -bool true 
```  

隐藏显示Mac隐藏文件的命令： 

``` 
defaults write com.apple.finder AppleShowAllFiles -bool false  
```  

-  `.gitignore` OS generated files 

```  
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
Icon?
ehthumbs.db
Thumbs.db
```  

- 指定文件拥有者为当前用户。**`-r`** 通常代表递归  

```  
sudo chown -R $USER /usr/local
```  

- 终端中使用textmate打开文件 
Textmate安装时有选项：是否建立命令行的连接。如果当时没有选的话，可以执行如下命令：  

```  
sudo ln -s /Applications/TextMate.app/Contents/Resources/mate /usr/bin 
这样，平时在终端里，也可以用”mate your_file”来打开textmate编辑文件了。
```