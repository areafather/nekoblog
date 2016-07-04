## Android

- [Android gradle tasks](http://tools.android.com/tech-docs/new-build-system/user-guide#TOC-Android-tasks)
- [gradle plugin user guide chinese](https://avatarqing.gitbooks.io/gradlepluginuserguidechineseverision/content/introduction/README.html)
- [Fragment 的一些讲解](http://blog.csdn.net/lmj623565791/article/details/42628537)
- http://blog.mohitkanwal.com/blog/2015/03/07/styling-material-toolbar-in-android/
- android 3.0 版本后 `AsyncTask` 改为默认串行执行：http://droidyue.com/blog/2014/11/08/bad-smell-of-asynctask-in-android/
- android 注意内存泄露问题：http://droidyue.com/blog/2015/04/12/avoid-memory-leaks-on-context-in-android/
- [androiddevtools](http://www.androiddevtools.cn/)
- [react native](http://blog.csdn.net/zhe13/article/details/48439967?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
- [RxJava 操作符动态图解](http://rxmarbles.com/#debounceWithSelector) 
- Activity 生命周期相关：
 - [Activity生命周期详解一](http://stormzhang.com/android/2014/09/14/activity-lifecycle1)
 - [Activity生命周期详解二](http://stormzhang.com/android/2014/09/17/android-lifecycle2/)
 - [onSaveInstanceState & onRestoreInstanceState](http://stormzhang.com/android/2014/09/22/onsaveinstancestate-and-onrestoreinstancestate/)
 - [Android Activity/Fragment Lifecycle](http://stormzhang.com/android/2014/08/08/activity-fragment-lifecycle/)
- [Android Studio 的一些使用技巧](http://qiita.com/takahirom/items/a211b1fcc4304c487c4b#_reference-b274ebea0a18ddb1e0dc)
 - shift + shift：全局搜索
 - command + p：查看参数类型
 - ctrl + alt + h：查看变量或函数的调用链
- [创建一个 RecyclerView LayoutManager](https://github.com/hehonghui/android-tech-frontier/blob/master/issue-9/%E5%88%9B%E5%BB%BA-RecyclerView-LayoutManager-Part-1.md)

- [与 so 有关的一个常年大坑](https://zhuanlan.zhihu.com/p/21359984)

```java
//TODO 放缩处理、显示操作层
eyeAdjustView.setVisibility(View.VISIBLE);
btnViewAdjust.setTag(true);

Matrix matrix = new Matrix();
float minY = Math.min(eyesInfo.p[0].y, eyesInfo.p[5].y);
float maxY = Math.max(eyesInfo.p[0].y, eyesInfo.p[5].y);
float w = eyesInfo.p[5].x - eyesInfo.p[0].x;
float minX = eyesInfo.p[0].x - w * 0.25f;
float maxX = eyesInfo.p[0].x + w * 1.25f;

//rect 范围空间不能为 0
if(minY == maxY) maxY++;
if(minX == maxX) maxX++;

RectF mTempSrc = new RectF(minX, minY, maxX, maxY);
RectF mTempDst = new RectF(0, 0, imageView.getWidth(), imageView.getHeight());
matrix.setRectToRect(mTempSrc, mTempDst, Matrix.ScaleToFit.CENTER);
imageView.setImageMatrix(matrix);
imageView.invalidate();

eyeAdjustView.setFeatures(matrix, eyesInfo, imageView);
```

- 设置 ITALIC 需要将字体的 Typeface 设置为 MONOSPACE 
- 非 GUI 的地方需要用到 Context 的地方尽量使用 ApplicationContext ，而不是传 Activity:Context，因为有可能会导致 activity 无法被回收（内存泄露）。另外要用 LayoutInflation 和 Dialog 的地方必须使用 Activity:Context。
```
// 在开发第三方工具时要用到 ApplicationContext 最好这样做
public void init(Context context) {
    context = context.getApplicationContext()
    
    // ...
}
```

- 拼接 SpannableString
```
TextUtils.concat(spanStr1, " " , spanStr2)
```


- **ViewPager 不应该使用 getScrollX() 获取当前滑动的 X 坐标**，因为在 ViewPager 所在 Fragment 进行 Resume/Recreate 的时候（例如屏幕旋转），无论 currentItem 为多少，scrollX 都会被置零，所以应该通过 **OnPageChangeListener** 来计算出真实的 scrollX：
```
// ...
@Override
public void onPageScrolled(int position, float positionOffset,
        int positionOffsetPixels) {
    scrollX = position * mViewpager.getWidth() + positionOffsetPixels;
    invalidate();

    Log.e("TAG", String.format("onPageScrolled: %d, %f, %d", position, positionOffset, positionOffsetPixels));
        
    if (mViewPagerOnPageChangeListener != null) {
        mViewPagerOnPageChangeListener.onPageScrolled(position, positionOffset,
                positionOffsetPixels);
    }
}
// ...
```

- 对 NestedFragment 的 `findFragmentByTag()` **必需在 ParentFragment 的 `onViewCreated()`（视图创建后）中进行，否则将返回空。** [Check about this.](https://www.google.com/?gws_rd=ssl#safe=off&q=getChildFragmentManager()+findFragmentByTag)

- 使用 selectable（可长按复制） 的 TextView 时需要注意，它有一定几率会消耗触摸事件，如果父控件需要响应相关事件的话（例如父控件是个按钮），请把 TextView 的 **textIsSelectable** 属性设置为 false

#### 现场还原

- 自定义 View 时，使用 `onSaveInstanceState()` 和 `onRestoreInstanceState()` 处理视图状态的储存和恢复，以应付屏幕旋转等状况后视图的现场还原

- Fragment 在发生屏幕旋转等状况后，系统会持久化它的一些视图以及数据状态。旋转后 `FragmentManager` 会反系列化旋转前持久化的信息，新建实例，并在新实例的 `onCreate()` 中返回之前储存的各种 State（`Fragment.onSaveInstanceState()` 中插入的）。而 View State 会自动传递到各个 View 的 `View.onRestoreInstanceState()` 函数中。

- 如果在 Fragment 中使用了 `setRetainInstance(true)`，则 Fragment 的实例会被保留下来，不重新创建，这意味着实例内的所有属性也会被保存下来（不会被重置），但是依然会重新触发 Fragment 的生命周期事件。所以通常这种状况仅适用于进行持续性后台任务的 Fragment（例如没有视图的单纯进行下载操作的 Fragment），在屏幕旋转后也不会打断正在进行的任务。要注意的是，这种情况下如果有视图的话，视图会被重新创建。

#### 视图事件传递

**[事件分发](http://blog.csdn.net/guolin_blog/article/details/9097463)：**
- 首先你需要知道一点，只要你触摸到了任何一个控件，就一定会调用该控件的dispatchTouchEvent方法。
- dispatchTouchEvent()`（来自父控件调用）` -> onTouchEvent() -> onClick()
- 父控件的 onInterceptTouchEvent 返回 true 的话，直接拦截该事件，不尝试分发给子控件。
- 子控件中如果将传递的事件消费掉，父控件将无法在 onTouchEvent() 接收到任何事件。
- 父控件分发事件中，如果调用点击所在子控件的 dispatchTouchEvent() 返回 false 则说明子控件不消费该事件，则事件最终还是会回流到父控件的 onTouchEvent() 中。

**[ViewGroup](http://blog.csdn.net/guolin_blog/article/details/12921889)**

## Java

- [Grails：约定优于配置](http://www.infoq.com/cn/articles/case-study-grails-partii/)   
举个简单的例子。在 Django 1.3 之后引入了「Class-based view」，有「ListView」和「DetailView」。Django 的「ListView.as_view(model=Publisher,)」不需要指定去 render 哪个template，而是自动去使用了「/path/to/project/books/templates/books/publisher_list.html」这个模板。这即是 **convention over configuration** 的一个典型示范。优先使用默认的约定，而不是非要明确的指定要 render 的 template。


- kotlin：**`限制优于约定`**   
nullable 和 notnullable、var 和 val 等。语法上限制比口头约定更不易造成潜在 bug。


- Java 线程锁：http://blog.csdn.net/ghsau/article/details/7461369/
- [Java 内部类会隐式持有外部类实例的引用](http://droidyue.com/blog/2014/10/02/the-private-modifier-in-java/)

####泛型
- Java 实现泛型的方法是 **类型擦除**。使用这种实现最主要的原因是为了向前兼容，这种实现方式有很多缺陷。与 C# 中的泛型相比，Java 的泛型可以算是 **"伪泛型"** 了。在 C# 中，不论是在程序源码中、在编译后的中间语言，还是在运行期泛型都是真实存在的。**Java则不同，Java的泛型只在源代码存在** ，只供编辑器检查使用，编译后的字节码文件已擦除了泛型类型，同时在必要的地方插入了强制转型的代码。   

```java
//泛型代码：
public static void main(String[] args) {  
    List<String> stringList = new ArrayList<String>();  
    stringList.add("oliver");  
    System.out.println(stringList.get(0));  
}  

//将上面的代码的字节码反编译后：
public static void main(String args[])  
{  
    List stringList = new ArrayList();  
    stringList.add("oliver");  
    System.out.println((String)stringList.get(0));  
}
```

- 推荐用于处理二进制数据：https://github.com/square/okio
- 单例模式探索：http://www.tekbroaden.com/singleton-java.html?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io

```java
public enum Singleton {
    INSTANCE;
    private String name;
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }
}
```


## Kotlin


### 入门
- [Kotlin 在线编译器](http://try.kotlinlang.org/#/Examples)
- [Getting started with Android and Kotlin](http://kotlinlang.org/docs/tutorials/kotlin-android.html)
- [Working with Kotlin in Android Studio](http://blog.jetbrains.com/kotlin/2013/08/working-with-kotlin-in-android-studio/)
- [Kotlin 中文博客教程](http://my.oschina.net/yuanhonglong/blog?catalog=3333352)
- https://docs.google.com/document/d/1ReS3ep-hjxWA8kZi0YqDbEhCqTt29hG8P44aA9W0DM8/preview?hl=en&forcehl=1&sle=true

### Note

```kotlin
val a: Int = 10000
print(a === a) // Prints 'true'
val boxedA: Int? = a
val anotherBoxedA: Int? = a
print(boxedA === anotherBoxedA) // !!!Prints 'false'!!!

// ====

val a: Int = 10000
print(a == a) // Prints 'true'
val boxedA: Int? = a
val anotherBoxedA: Int? = a
print(boxedA == anotherBoxedA) // Prints 'true'

// ====

val a: Int = 10000
val boxedA: Int = a
val anotherBoxedA: Int = a
print(boxedA === anotherBoxedA) // Prints 'true'
```

- [kotlin_android_base_framework](https://github.com/nekocode/kotlin_android_base_framework)
- [github.com/JetBrains/anko](https://github.com/JetBrains/anko)
- [kotlinAndroidLib (android studio plugin)](https://github.com/vladlichonos/kotlinAndroidLib)


```kotlin
public var heightScale: Float = 0.8f
    set(value) {
        $heightScale = value
        this.requestLayout()
    }
// backing filed syntax is deprecated, user 'field' instead
public var heightScale: Float = 0.8f
    set(value) {
        field = value
        this.requestLayout()
    }
```

- lateinit 是 Kotlin 语法级的，它比 Delegates.notNull() 更轻量（编译后不产生 Stub 代码）
- Kotlin 中封装的 Int、Float 等基础类型真实实现依然为 Java 中的原子类型（int、float），所以在传参和赋值中依然是值传递（复制）。但是也可以看看这篇 **[Java 有 Value Type 吗？](http://www.yinwang.org/blog-cn/2016/06/08/java-value-type?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)**
- Data Class 的 copy() 只对基础类型 or Data Class 进行深复制，Collection／非基础类型（List, Map...）是浅复制，需要自己处理

- 慎用 Lazy 代理／慎用 `kotterknife`，在 Fragment Detach 导致 View 被销毁时（Fragment 实例并未被回收），当 Fragment 重新 Attach 时不会重新执行 FindView。


## Others
- [IoC 的通俗解释](http://www.jianshu.com/p/3968ffabdf9d)
- [ButterKnife VS AndroidAnnotations](http://stackoverflow.com/questions/24351817/dagger-and-butter-knife-vs-android-annotations)
- [APT:Compile-Time Annotation Processing with Java](http://www.javalobby.org/java/forums/t17876.html)：在 compile-time 处理 Annotation
- RxJava 中的 `.repeatWhen()` 和 `.retryWhen()` 应用
 - [对 RxJava 中 .repeatWhen() 和 .retryWhen() 操作符的思考](http://www.qingpingshan.com/rjbc/java/49285.html)
 - [缓存 Token，失效时使用 Retry 进行再授权](https://github.com/rengwuxian/RxJavaSamples/blob/master/app%2Fsrc%2Fmain%2Fjava%2Fcom%2Frengwuxian%2Frxjavasamples%2Fmodule%2Ftoken_advanced_5%2FTokenAdvancedFragment.java)

#### [Reddit 上关于 Rx 的一些建议](https://www.reddit.com/r/androiddev/comments/4kqzot/starting_a_new_rx_library_remember_to_respect_the/)
- 能不用 `Observable.create()`（只调用一次）的话尽量不用，可以考虑使用 `Observable.fromCallable()` 或者 `Observable.deffer()` 内置操作符（每次调用） 。（http://www.jianshu.com/p/c83996149f5b）
- 只返回一个结果的话使用 `Single`，不返回结果的话使用 `Completable`。
- 在任何时候（创建或者流传递途中）都应该记得进行 `isUnsubscribed()` 判断。
- `Observable<Boolean>` 用来传递运行结果不是一种好的设计，应该使用 `Completable` 来代替，出错的话应该抛出错误。
