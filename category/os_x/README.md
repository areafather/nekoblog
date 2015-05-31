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