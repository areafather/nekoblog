#Git笔记
创建 git 仓库:
```
mkdir wxSniffer
cd wxSniffer
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://git.oschina.net/nekocode/xxx.git
git push -u origin master
```

已有项目?
```
cd existing_git_repo
git remote add origin https://git.oschina.net/nekocode/xxx.git
git push -u origin master
```