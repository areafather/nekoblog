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

- Unity Editor 的 Android、iOS Support 安装失败的话，可以尝试使用 `brew cask` 进行安装：
```sh
brew cask install unity-android-support-for-editor
brew cask install unity-ios-support-for-editor
```

#### C# Script 注意事项
- 类名必须与文件名完全相同，这一点和传统的 C# 保持一致。
- 所有新建的 C# 脚本必须全部继承自 `MonoBehaviour`。
- 协同程序一定是 `Ienumerator` 的返回类型,并且 `yield` 用 `yield return` 替代。
- 避免使用面向对象编程语言里面惯用的构造函数，初始化放在 `Awake()` 或 `Start ()` 函数中。
- C# 定义的私有的和受保护的变量或对象不会作为接口出现在 Inspector 面板中，那怕你将它放置到该脚本的开始处。

#### Other
- Camera Size 值对应屏幕**'高度'**的一半：http://blog.csdn.net/n5/article/details/50083205
- 按住 `option` 键可以快速拖动当前画布
