# Android Development Workflow
Android 团队开发工作流

## 总览

#### Git
- 使用 Pull Request
- 保证经常从 dev 对本分支进行 rebase
- dev 分支发生强制推送后需要及时通知所有组员
- 每次 Pull Request 的粒度尽量细分

#### 设计
- 定义好调色板，所有颜色只能从调色板中获取
- 图标可以考虑使用流行图标字体库（Fontawesome）
- 开发前对一遍设计稿，定好所有 Dimen
- 设计规范越完整，开发越容易工作

#### 开发
- 收集各种常用 lib （log, bugly, ...）
- **必须写注释（行内注释，函数注释以及类注释等）**
- 所有调试用的 Log 请用使用 Debug 作为 Flag 进行输出
- TODO: 使用单 Activity 多 Fragment 还是多 Activity
- 如果要支持横屏的话，务必每个根布局添加 ScrollView
- 适当使用依赖注入（常用的模块，需要单元测试的模块）
- TODO: 资源文件命名要遵守一套守则，例如：fragment_{包逻辑路径}_{页面名}.xml
- 尽量使用 Anko DSL 来创建视图
- Dip(), Sp() 等包裹一下，使用 ApplicationContext
- 接口用于解耦模块，继承用于整合功能
- 必需进行单元测试（V／M 层都需要）
- TODO: 考虑 Launcher 的前期测试处理
- TODO: 收集 Intellij 的 Plugin（例如 Style 抽离，Anko DSL Preview 等）
- TODO: 使用统一一套 Code Live Template（规范 TODO，FIXME 和 Comment）

- ~~更强大的 layout？可以拦截 onDraw 函数，支持画分割线，阴影~~


## 架构
MVP，Flux／Redux

### 层次流程
- **`View` -> `Model` -> `Presenter`**
`View` 和高复用性的 `Model` 同时开发，`Presenter` 最后开发（适配作用）

- 前期 `View` 层开发需要用到的数据全部使用 `ViewObject`，需要什么属性就定义什么属性，以后在 `Presenter` 层进行 `DO` 到 `VO` 再到 `View` 的 **Adapt**（适配）过程。

- `View` 层不能接触 `Model` 层的任何数据和接口！

- 和 `DO` 是一对一转换关系的 `VO` 可以在内部定义转换方法。

- **页面跳转** 应当是 `View` 层的操作（可以类比成点击某个 View 会产生特效，那变化成另一个 `View` 也应该在 `View` 内实现）。`View` 之间的跳转逻辑应当都封装在一起（放到 `Navigator` 中）。跳转数据使用 `VO`，`Presenter` 可以提供 `VO` 转换的接口转换成其它页面需要的 `VO`。（另外，把跳转放在 `View` 的好处是：我单看 `View` 层的所有类，也能知道它们之间的跳转逻辑）

### Flux 的一些思想
- **Pure function**
Function 不影响外部变量（不产生副作用），且给定输入，输出不变。
- **Map，Reduce**
数据的流处理，将指定流通过 `MapReduce`  加工成任意流。


## 产品流程

### 原则
- 每周进行项目审查，方便组员直接确定进度
- **出现问题后上一级承担主要责任，所以上一级在把东西传递给下一级时必需足够详细，出了差错就是上一级的问题**

鉴于程序员的项目人天消耗预估不靠谱，整个项目的开发时间应该分段进行预估，而不是一次预估出总时间。
- 第一段：`功能还原期`
- 第二段：`设计稿还原期`

### 具体流程
0. 输出 `产品原型`
0. 输出 `设计稿 `
0. **预估 `功能还原期` 所需时间**
0. 进行功能还原
0. 穿插阶段性的项目评审
0. 功能全部还原后获得 `Aplha 版`，此阶段可以进行功能测试，并且可以上架不推广
0. **预估 `设计稿还原期` 所需时间**
0. 进行设计稿精细还原
0. 穿插阶段性的项目评审
0. 获得 `Release 版` ，更新到已上架市场

**核心思想在于把项目预估进行分段，提高精确性**


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

- 需要提交到 `dev` 分支时，需要针对 `dev` 在个人分支上进行 rebase 操作，并处理冲突

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
- 提交 PR 前如果确保当前分支在 dev 分支 HEAD 处的话可以不进行 Rebase
- dev 分支将处于 protected 状态，非不得已要执行 force push 的话，要提交通知所有开发成员

