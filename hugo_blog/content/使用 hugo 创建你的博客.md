+++
Categories = ["Hugo"]
Description = ""
Tags = ["Hugo"]
date = "2015-08-31T15:25:06+08:00"
title = "使用 hugo 创建你的博客"
+++

```shell
hugo new site hugo_blog
cd hugo_blog

hugo new first.md
hugo undraft content/first.md

mkdir themes
cd themes
git clone https://github.com/spf13/hyde.git
cd hyde
rm /s .git

cd ..
cd ..
hugo server -t hyde --watch
```