# Android Development Guideline
**数库科技** Android 开发准则

## 总览

### 设计
- 定义好调色板，所有颜色 **只能** 从调色板中获取，不能使用硬编码
- 图标可以考虑使用流行图标字体库（Fontawesome）
- 开发前对一遍设计稿，定好所有 Dimen，尽量使用 Dimen 板
- Multiple State（多状态） Drawable 命名规则：https://github.com/inmite/android-selector-chapek
- 设计规范越完整，开发越容易工作

### 开发
- **必须写注释（行内注释，函数注释以及类注释等）**
- 善用 `TODO`，`FIXME` 进行标注
- 必须写单元测试（V／M 层都需要）
- 使用 CI（持续集成）进行远程构建
- 收集各种常用 Lib （log, bugly, ...）
- 添加 **Lib 层** 用来对大多数第三方库进行封装（Wrap），方便日后更换
- 上架前必须进行 **混淆** 和 **签名**
- 所有调试用的 Log 请用使用 `Debug` 作为 Flag 进行输出，Release 环境下必须使用混淆去掉所有 Log 的代码
- 适当使用依赖注入（常用的模块，需要单元测试的模块）
- 尽量使用 Anko DSL 来创建视图


## 架构
MVP，Flux／Redux

### 层次流程
- **`View` -> `Model` -> `Presenter`**
`View` 和高复用性的 `Model` 同时开发，`Presenter` 最后开发

- 前期 `View` 层开发需要用到的数据全部使用 `ViewObject`，需要什么属性就定义什么属性，以后在 `Presenter` 层进行 `DO` 到 `VO` 再到 `View` 的 **Transform**（转换）过程。（`VO` 中可以使用 `data: Any` 属性携带 `DO`）

- **所有 `VO` 只能保存在 Presenter 层内，View 层最多只能保存 `VO` 的引用！**（另外要注意，Adapter 应当放在 Presenter 层内）

- `View` 层不能接触 `Model` 层的任何数据和接口！

- 和 `DO` 是一对一转换关系的 `VO` 可以在内部定义转换方法。

- **页面跳转** 放到 `Presente` 层中。

### Flux 的一些思想
- **Pure function**
Function 不影响外部变量（不产生副作用），且给定输入，输出不变。
- **Map，Reduce**
数据的流处理，将指定流通过 `MapReduce`  加工成任意流。


## Git 协同守则

- 拉取 `dev` 分支到本地 `Liveneeq` 文件夹

```sh
mkdir Liveneeq
cd Liveneeq
git init
git remote add -t dev -f origin git@git.thecampus.cc:onecampus/liveneeq-android.git
git checkout -b dev origin/dev
```

- 每个人建立带下划线的自己全名的分支，例如 `_yangfan`

```sh
git checkout -b _yangfan
```

- 在该分支上进行开发，定期进行 Commit（可使用 tmp 前缀来表示临时提交），确保代码在云端

```sh
git add .
git commit -m "tmp 3/18 ***"
git push origin _yangfan

git add .
git commit -m "tmp 3/19 ***"
git push origin _yangfan
```

- 完成阶段性功能或页面后，使用 `rebase` 或者 `reset` 重建 Commit 历史，确保所有 tmp commit 被合并删除

```sh
git rebase -i <COMMIT_HASH>
# ...
git rebase --continue
```

- 需要提交到 `dev` 分支时，需要针对 `dev` 在个人分支上进行 Rebase 操作，并处理冲突

```sh
git fetch
git rebase origin/dev
# ...
```

- rebase 完成后 **在本机进行构建和测试**，测试通过后使用 -f 参数强制 Push 到远程分支

```sh
git push -f origin _yangfan
```

- 在 Gitlab 上提交 Merge Request(/Pull Request) 到 dev 分支，等待 Master 进行 Code Review

### Notice
- 每次 Commit 要保证粒度足够细，包含的更改和描述一致，且可编译运行
- 提交 PR 前如果确保当前分支在 dev 分支 HEAD 处的话可以不进行 Rebase
- dev 分支将处于 protected 状态，非不得已要执行 force push 的话，要提交通知所有开发成员

