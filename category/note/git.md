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

向所有空文件夹添加 .gitignore 文件
- http://stackoverflow.com/questions/115983/how-can-i-add-an-empty-directory-to-a-git-repository
