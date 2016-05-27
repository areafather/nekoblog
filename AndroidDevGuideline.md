# Android Development Guideline
**数库科技** Android 开发准则

## 总览

### 设计
- 定义好调色板，所有颜色 **只能** 从调色板中获取，任何地方都应该避免硬编码
- 图标可以考虑使用流行图标字体库（Fontawesome）
- 开发前对一遍设计稿，定好所有 Dimen，尽量使用 Dimen 板
- Multiple State（多状态） Drawable 命名规则：[android-selector-chapek](https://github.com/inmite/android-selector-chapek)
- 设计规范越完整，开发越容易工作

### 开发
- **必须写注释（行内注释，函数注释以及类注释等）**，Doc Gen 选用 [Dodoka](https://kotlinlang.org/docs/reference/kotlin-doc.html)
- 善用 `TODO`，`FIXME` 进行标注
- 必须写单元测试（V／M 层都需要）
- 使用 CI（持续集成）进行远程构建
- 使用 Lint 工具进行代码静态检查
- 收集各种常用 Lib （log, bugly, ...）
- 可以添加多一层 **Lib 层**，用来对大多数第三方库进行一层包裹（Wrap），方便日后更换
- 所有基于事件响应的场景尽量使用 Rx 来实现，包括 View 的事件响应（可参考 [ReactiveAndroid](https://github.com/kittinunf/ReactiveAndroid)）
- 所有调试用的 Log 请用使用 `Debug` 作为 Flag 进行输出，Release 环境下必须使用混淆去掉所有 Log 的代码
- 上架前必须进行 **混淆** 和 **签名**
- 使用 [Redex](https://github.com/facebook/redex) 等工具对 Dex 文件进行优化（也可使用 (redex-plugin)[https://github.com/timmutton/redex-plugin]）
- 使用 [Nimbledroid](https://nimbledroid.com/) 进行应用性能分析
- 适当使用依赖注入（常用的模块，需要单元测试的模块）
- **使用 Fragment 来构建页面内容，使用 Activity 来管理 Fragment**
- 尽量使用 Anko DSL 来创建视图


## 架构
MVP，Flux／Redux。请参考 **[Kotgo](https://github.com/nekocode/kotgo)**。

### 层次流程
- **`View` -> `Model` -> `Presenter`**：`View` 和高复用性的 `Model` 同时开发，`Presenter` 最后开发

- 前期 `View` 层开发需要用到的数据全部使用 `ViewObject`，需要什么属性就定义什么属性，以后在 `Presenter` 层进行 `DO` 到 `VO` 再到 `View` 的 **Convert**（转换）过程。（`VO` 中可以使用 `data: Any` 属性携带 `DO`）

- `DO` 到 `VO` 的转化过程请不要在 UI 线程进行操作。（可以在 Presenter 中使用 Rx 的 Map 操作在非主线程调度器上进行转换）

- **所有 `VO`，`DO` 只能保存在 Presenter 层内，View 层最多只能保存 `VO` 的引用！**（另外要注意，Adapter 应当放在 Presenter 层内）

- `View` 层不能接触 `Model` 层的任何数据和接口！

- **页面跳转** 放到 `Presenter` 层中。

- `View` 和 `Presenter` 之间是双向依赖，所以通过接口解藕，便于进行 UI Mock 测试，而 `Presenter` 和 `Model` 是单向依赖，可以直接编写单元测试来测试 `Model`。

### Flux 的一些思想
- **FP 的思想很适合前端**：Rx 在 Android 领域的火爆验证了这一点（对事件或数据的流加工）
- **Pure function**：Function 不影响外部变量（不产生副作用），且给定输入，输出不变。
- **Map，Reduce**：对数据的流处理，任意流都可以通过 `Map&Reduce` 加工成任意流。


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


# 代码守则
参考并修改自 [android-best-practices](https://github.com/futurice/android-best-practices) 和 [Android-Guideline](https://github.com/RxSmart/Link-Android-Guideline/blob/master/Android-Guideline.md)。

## Kotlin 源代码

对类文件使用 [驼峰命名法](https://en.wikipedia.org/wiki/CamelCase)。包名使用 [小写连写](http://docs.oracle.com/javase/tutorial/java/package/namingpkgs.html)，单词较多可以使用 `_` 分割符。

### Property 定义与命名规范

对 Property 的定义应该放在文件的首位，另外请注意 **[Kotlin 可视修饰符和 Java 的不同](http://kotlinlang.org/docs/reference/visibility-modifiers.html)**，并且遵守以下规范：

- 要注意 Kotlin 的默认可视修饰符为 `public`
- Kotlin 的 `internal` 修饰符，可以让目标对象只在同一 Module（IDE 下的 Module） 下可访问（例如创建一个插件 Module 的时候，可以使用 `internal` 对外隐藏一些实现细节）
- Android 下的组件以及控件尽量以 **类型** 的缩写小写字母作为前缀，例如以下一些可选的前缀
 - `act` (Activity), `frg` (Fragment)
 - `tv` (TextView), `et` (EditText), `btn` (Button),  `rv` (RecyclerView) 类推...
- 静态常量命名字母全部大写，单词之间用下划线分隔，且必须使用 `const val` 修饰符
- Android SDK中诸如 `SharedPreferences`，`Bundle` 和 `Intent` 等，都采用 **key-value** 的方式进行赋值，当使用这些组件的时候，**key** 必须被 `private const val` 所修饰，并以 `KEY_` 作为前缀。

示例：
```kotlin
internal class TestActivity: Activity() {
    compainion object {
        const val CONSTANT: Int = 0
        private const val KEY_ARG_TITLE = "title"
    }
    val title: String = "Title"
    var listSize: Int? = null
    private var frgHomepage: Fragment? = null
}
```

### Kotlin 语言相关

- 理解好 Kotlin 中的 **[Function 类型](https://kotlinlang.org/docs/reference/functions.html)**，理解 `inline` 和 `infix` 修饰符，掌握 Kotlin 中的 **[Extensions](https://kotlinlang.org/docs/reference/extensions.html)** 和 **[DSL 的定义](https://kotlinlang.org/docs/reference/type-safe-builders.html)**，领悟 Function 在 Kotlin 的地位（第一公民）。
- 看完并理解 **[stdlib](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/)**。
- `ByteArray`、`ShortArray`、`IntArray` 等并不继承于 `Array`，它们在 Jvm 中表现为 `byte[]`... ，所以应该更倾向于选择它们。
- 使用 `Any` 而不是 `Object`。（注意 Lint 的提示，也会建议使用 `Any`）
- 用好 `Pair` 和 `Triple` 来避免某些情况新建类。
- 使用好注解：`@Deprecated`（标注不推荐的对象）、`@ReplaceWith`（标注能进行替换的代码块）。
- 注意好 `Throwable`、`Exception` 和 `Error` 的区别，对于可捕捉的错误应该使用 `Exception` 而不是 `Throwable`。
- 理解好 `apply()`、`let()`、`with()`、`to()`、`repeat()` 的糖用法。
- 使用 `val localA = A!! // or checkNotNull(A)` 将 Nullable 变量转换为 NotNull 类型的 Local Scope 变量。

### Log 输出规范

使用 `Log` 类打印一些重要的信息对开发者而言是很重要的事情，切记不要使用 `Toast` 来做信息打印。

VERBOSE 和 DEBUG 类型的 Log 不应该出现在 Release 版本中，INFORMATION、WARNING 和 ERROR 类型的 Log 可以留下来，因为这些信息的输出能够帮助我们快速地定位问题所在，当然前提是，需要隐藏重要的信息输出，如，用户手机号，邮箱等。

只在 Debug 环境中输出日志的小技巧：

```kotlin
if (BuildConfig.DEBUG) Log.d(TAG, "The value of x is " + x)
```

### 类成员排序规范

关于这个并没有硬性要求，不过好的排序方式，能够提高可读性和易学性。这里给出一些排序建议：

1. 常量
2. 字段
3. 构造函数
4. 被重写的函数（不区分修饰符类型）
5. 被 `private` 修饰的函数
6. 被 `public` 修饰的函数
7. 被定义的内部类或者接口


## 资源文件 Resources

资源等`.xml`文件应该采用 **小写字母_下划线** 的组合形式，并遵循前缀表明类型的习惯，形如 `type_foo_bar.xml`。

### Lyout相关

- 布局（Layout）文件命名方式：

布局文件应该与Android组件的命名相匹配，以组件类型作为前缀，并且能够清晰的表达意图所在。例如：如果为`SignInActivity`创建一个布局文件，那么应该命名为`activity_sign_in.xml`。基本规则如下：

| Component        | Class Name             | Layout Name                   |
| ---------------- | ---------------------- | ----------------------------- |
| Activity         | `UserProfileActivity`  | `activity_user_profile.xml`   |
| Fragment         | `SignUpFragment`       | `fragment_sign_up.xml`        |
| Dialog           | `ChangePasswordDialog` | `dialog_change_password.xml`  |
| AdapterView item | ---                    | `item_person.xml`             |
| Partial layout   | ---                    | `partial_stats_bar.xml`       |

值得一提的是，一些布局文件需要通过`Adapter`填充，如`ListView`，`Recyclerview`等列表视图，这种场景下，布局的命名应该以`item_`作为前缀。另外还有一种比较常见的情况，一个布局文件作为另一个布局文件的一部分而存在，或者使用了`include`，`merge`等标签的布局，可以使用`partial_`、`include_`或者`merge_`作为前缀，这一类布局的命名同样应该清晰的表达其意图。

- Id命名方式：

控件Id的命名应该以该控件类型的缩写作为后缀，并且也应该是**小写字母_下划线**的组合形式，能够清晰表达意图是命名的前提：

| Element            | Suffix          |
| -----------------  | ----------------|
| `TextView`         | `_tv`           |
| `ImageView`        | `_iv`           |
| `Button`           | `_btn`          |
| `Menu`             | `_menu`         |

例如：

```xml
<ImageView
    android:id="@+id/profile_iv"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content" />
```

```xml
<menu>
	<item
        android:id="@+id/done_menu"
        android:title="Done" />
</menu>
```

对于如何排版一个布局文件，请尽量遵循以下规范：

- 每个属性独占一行，缩进四个空格
-  `android:id`作为第一个属性存在
- 如果存在`style`属性，则紧随`id`之后
- 如果不存在`style`属性，则`android:layout_****`紧随`id`之后
- 当布局中的一个元素不再包含子元素时，另起一行，使用自闭合标签`/>`，方便调整和添加新的属性

示例如下：

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    >

    <TextView
        android:id="@+id/name"
        style="@style/FancyText"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_alignParentRight="true"
        android:text="@string/name"
        />

    <include layout="@layout/reusable_part" />

</LinearLayout>
```

### Drawable相关

- 常规Drawable（图像）文件命名方式：

| Asset Type   | Prefix            |		Example              |
|--------------| ------------------|-----------------------------|
| Action bar   | `ab_`             | `ab_stacked.9.png`          |
| Button       | `btn_`	           | `btn_send_pressed.9.png`    |
| Dialog       | `dialog_`         | `dialog_top.9.png`          |
| Divider      | `divider_`        | `divider_horizontal.9.png`  | 
| Icon         | `ic_`	           | `ic_star.png`               |
| Menu         | `menu_	`          | `menu_submenu_bg.9.png`     |
| Notification | `notification_`   | `notification_bg.9.png`     |
| Tabs         | `tab_`            | `tab_pressed.9.png`         |


- 常规icon（图标）文件命名方式：

| Asset Type                      | Prefix             | Example                      |
| --------------------------------| ----------------   | ---------------------------- |
| Icons                           | `ic_`              | `ic_star.png`                |
| Launcher icons                  | `ic_launcher`      | `ic_launcher_calendar.png`   |
| Menu icons and Action Bar icons | `ic_menu`          | `ic_menu_archive.png`        |
| Status bar icons                | `ic_stat_notify`   | `ic_stat_notify_msg.png`     |
| Tab icons                       | `ic_tab`           | `ic_tab_recent.png`          |
| Dialog icons                    | `ic_dialog`        | `ic_dialog_info.png`         |


- 常规selector states（选中状态）文件命名方式：

| State	       | Suffix          | Example                     |
|--------------|-----------------|-----------------------------|
| Normal       | `_normal`       | `btn_order_normal.9.png`    |
| Pressed      | `_pressed`      | `btn_order_pressed.9.png`   |
| Focused      | `_focused`      | `btn_order_focused.9.png`   |
| Disabled     | `_disabled`     | `btn_order_disabled.9.png`  |
| Selected     | `_selected`     | `btn_order_selected.9.png`  |



### Color相关

`colors.xml`文件就像个“调色板”，只映射颜色的ARGB值，不应该存在其他类型的数值，更不要使用它为不同的按钮来定义ARGB值。

不建议使用以下命名规则：

```xml
<resources>
	<color name="button_foreground">#FFFFFF</color>
	<color name="button_background">#2A91BD</color>
	<color name="comment_background_inactive">#5F5F5F</color>
	<color name="comment_background_active">#939393</color>
	<color name="comment_foreground">#FFFFFF</color>
	<color name="comment_foreground_important">#FF9D2F</color>
	...
	<color name="comment_shadow">#323232</color>
```

使用这种定义方式，我们需要非常的谨慎，一不小心就会重复定义ARGB值，而且当改变基本色时，会造成很多冗余重复的操作。

相反地，我们应该根据颜色或者风格对ARGB赋值：

```xml
<resources>

	<!-- grayscale -->
	<color name="white"     >#FFFFFF</color>
	<color name="gray_light">#DBDBDB</color>
	<color name="gray"      >#939393</color>
	<color name="gray_dark" >#5F5F5F</color>
	<color name="black"     >#323232</color>

	<!-- basic colors -->
	<color name="green"     >#27D34D</color>
	<color name="blue"      >#2A91BD</color>
	<color name="orange"    >#FF9D2F</color>
	<color name="red"       >#FF432F</color>

</resources>
```

对同一色调，不同色域进行定义时，像"brand_primary"、"brand_secondary"、 "brand_negative"这样的命名也是不错的选择。

值得一提的是，这样规范的颜色很容易修改或重构，App一共使用了多少种不同的颜色变会得非常清晰。


### Dimen相关

我们应该像对待`colors.xml`一样对待`dimens.xml`文件，与定义颜色调色板无异，也应该定义一个规范字体大小的“字号板”。

一个很好的建议：

```xml
<resources>

	<!-- font sizes -->
	<dimen name="font_larger">22sp</dimen>
	<dimen name="font_large">18sp</dimen>
	<dimen name="font_normal">15sp</dimen>
	<dimen name="font_small">12sp</dimen>

	<!-- typical spacing between two views -->
	<dimen name="spacing_huge">40dp</dimen>
	<dimen name="spacing_large">24dp</dimen>
	<dimen name="spacing_normal">14dp</dimen>
	<dimen name="spacing_small">10dp</dimen>
	<dimen name="spacing_tiny">4dp</dimen>

	<!-- typical sizes of views -->
	<dimen name="button_height_tall">60dp</dimen>
	<dimen name="button_height_normal">40dp</dimen>
	<dimen name="button_height_short">32dp</dimen>

</resources>
```

同样的，在定义`margin`和`padding`时，可以使用`spacing_****`作为前缀对其命名，而不是像对待`String`字符串那样直接写值。

这样写的好处是，使组织结构和修改风格甚至布局变得非常容易。

### String相关

String命名的前缀应该能够清楚地表达它的功能职责，如，`registration_email_hint`，`registration_name_hint`。如果一个Sting不属于任何模块，这也就意味着它是通用的，应该遵循以下规范：


| Prefix             | Description                           |
| -----------------  | --------------------------------------|
| `error_`           | 错误提示                              |
| `msg_`             | 一般信息提示                          |
| `title_`           | 标题提示，如，Dialog标题              |
| `action_`          | 动作提示，如，“保存”，“取消”，“创建”  |

### Style与Theme相关

Style与Theme的命名统一使用[驼峰命名法](https://en.wikipedia.org/wiki/CamelCase)。应该谨慎使用`style`与`theme`，避免重复冗余的文件出现。可以有多个`styles.xml` 文件，如：`styles.xml`，`style_home.xml`，`style_item_details.xml`，`styles_forms.xml`等。
**`res/values`目录下的文件可以任意命名，但前提是该文件能够明确表达职责所属，因为起作用的并不是文件本身，而是内部的标签属性。**


### 使用 Designtime Attributes（tools 标签）

- 布局预览应使用`tools:****`相关属性，避免`android:text`等硬编码的出现，具体可参考[Designtime Attributes](http://tools.android.com/tips/layout-designtime-attributes)。
示例如下：

```xml
<TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    tools:text="Home Link" />
```

避免以下代码的出现：

```xml
<TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Home Link" />
```

### 通用 `style`

值得一提的是，`android:layout_****`属性应该在XML中定义，同时其它属性`android:****`应放在`style`中。核心准则是保证Layout属性(position, margin, size等)和content属性在布局文件中，同时将所有的外观细节属性（color, padding, font）放
在style文件中。

另外，在上面提到的准则中，有以下几点需要注意：

- `android:id`明显应该在layout文件中
- Layout文件中的`android:orientation`属性对于一个`LinearLayout`布局来说，更具有意义
- 由于使用`android:text`定义内容，所以这个属性应该放在Layout文件中
- 有时候将`android:layout_width`和`android:layout_height`属性放到一个`style.xml`中作为一个通用的风格更有意义，但是默认情况下把这些属性放到Layout文件中比放到`style.xml`文件中更加直观。

### 避免层级冗余的嵌套

Layout结构优化方面，应尽量避免深层次的布局嵌套，这不仅会引发性能瓶颈，还会带来项目维护上的麻烦。在书写布局之前应该对ViewTree充分的分析，善用[`<merge>`标签](http://stackoverflow.com/questions/8834898/what-is-the-purpose-of-androids-merge-tag-in-xml-layouts)减少层级嵌套，或者使用[Hierarchy Viewer](http://developer.android.com/intl/zh-cn/tools/help/hierarchy-viewer.html)等UI优化工具对Layout进行分析与优化。可参考[Optimizing Your UI](http://developer.android.com/intl/zh-cn/tools/debugging/debugging-ui.html)与[Optimizing Layout Hierarchies](http://developer.android.com/intl/zh-cn/training/improving-layouts/optimizing-layout.html)。

