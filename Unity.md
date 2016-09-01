# Unity

- 使用 `VSCode` 替代 `MonoDevelop` 编辑器需先安装 `mono` 库
```sh
# 需要安装 mono 后才能启动 Intellisense
brew install mono
brew tap aspnet/dnx
brew install dnvm
```

- [移植 `Intellij` 的快捷键给 `VSCode`](https://github.com/k--kato/vscode-intellij-idea-keybindings)

- [Exclude .meta files in folder view](http://stackoverflow.com/questions/30140112/how-do-i-hide-certain-files-from-the-sidebar-in-visual-studio-code)
```json
{
     "files.exclude": {
         "**/*.meta": true
     }
}
```
