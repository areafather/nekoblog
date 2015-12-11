## Android

- [Android gradle tasks](http://tools.android.com/tech-docs/new-build-system/user-guide#TOC-Android-tasks)
- [gradle plugin user guide chinese](https://avatarqing.gitbooks.io/gradlepluginuserguidechineseverision/content/introduction/README.html)
- [Fragment 的一些讲解](http://blog.csdn.net/lmj623565791/article/details/42628537)
- http://blog.mohitkanwal.com/blog/2015/03/07/styling-material-toolbar-in-android/
- android 3.0 版本后 `AsyncTask` 改为默认串行执行：http://droidyue.com/blog/2014/11/08/bad-smell-of-asynctask-in-android/
- android 注意内存泄露问题：http://droidyue.com/blog/2015/04/12/avoid-memory-leaks-on-context-in-android/
- [androiddevtools](http://www.androiddevtools.cn/)
- [react native](http://blog.csdn.net/zhe13/article/details/48439967?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)

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
- 需要 context 的地方（非 UI）尽量使用 ApplicationContext ，而不是传 Activity:Context，因为有可能会导致 activity 无法被回收（内存泄露）



## Java

- [Grails：约定优于配置](http://www.infoq.com/cn/articles/case-study-grails-partii/)   
举个简单的例子。在 Django 1.3 之后引入了「Class-based view」，有「ListView」和「DetailView」。Django 的「ListView.as_view(model=Publisher,)」不需要指定去 render 哪个template，而是自动去使用了「/path/to/project/books/templates/books/publisher_list.html」这个模板。这即是 **convention over configuration** 的一个典型示范。优先使用默认的约定，而不是非要明确的指定要 render 的 template。


- kotlin：**`限制优于约定`**   
nullable 和 notnullable、var 和 val 等。语法上限制比口头约定更不易造成潜在 bug。


- Java 线程锁：http://blog.csdn.net/ghsau/article/details/7461369/
- [Java 内部类会隐式持有外部类实例的引用](http://droidyue.com/blog/2014/10/02/the-private-modifier-in-java/)

####泛型
- 与 C# 中的泛型相比，Java 的泛型可以算是 **"伪泛型"** 了。在 C# 中，不论是在程序源码中、在编译后的中间语言，还是在运行期泛型都是真实存在的。**Java则不同，Java的泛型只在源代码存在** ，只供编辑器检查使用，编译后的字节码文件已擦除了泛型类型，同时在必要的地方插入了强制转型的代码。   

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



## Linux

- 双系统 Grub 引导   
```
nano  /boot/grub/grub.cfg

# 添加以下菜单项：
menuentry 'Microsoft Windows 8' {
        insmod ntfs
        set root='hd0,2'
        chainloader /efi/Microsoft/Boot/bootmgfw.efi
}
```


- 默认打开小键盘   
```
yaourt -Ss numlockx
# 使用 systemd 方式开启执行脚本 http://my.oschina.net/osgit/blog/102567
```


- [Shadowsocks](https://lc4t.me/arch-ss/)
- [安装 Android Studio](http://alwayswithme.github.io/jekyll/update/2015/08/12/setup-android-in-archlinux.html)
- [Vim 学习](http://ju.outofmemory.cn/entry/79671)



## Python

###教程
- [廖雪峰的官方博客](http://www.liaoxuefeng.com/wiki/001374738125095c955c1e6d8bb493182103fac9270762a000)
- [简明 Python 教程](http://itlab.idcquan.com/linux/manual/Python_chinese/)
- [iPython 的一些用法](http://blog.sina.com.cn/s/blog_6fb8aa0d0101r5o1.html)

###IDE
- [Sublime text x64](http://www.cr173.com/soft/121149.html)
- [PyCharm](http://www.jetbrains.com/pycharm/)


###GUI
- [Python GUI编程（Tkinter）](http://www.yiibai.com/python/python_gui_programming.html)
- [pygame](http://eyehere.net/2011/python-pygame-novice-professional-index/)

###note
- Python 没有规定缩进是几个空格还是Tab。按照约定俗成的管理，应该始终坚持使用 4 个空格的缩进。  
- Python 程序是大小写敏感的，如果写错了大小写，程序会报错。 

- 以下几个值转换成布尔值为 `False`  
```python
bool(None)
bool('')
bool(0)
```

- 从 raw_input() 读取的内容永远以字符串的形式返回，把字符串和整数比较就不会得到期待的结果，必须先用 int()把字符串转换为我们想要的整型：  
```java
birth = int(raw_input('birth: '))
```

- 函数多重返回值默认用 tuple 来构造  
```python
def fuc();
    return 123,456
print fuc2()[0]
```  


- 定义默认参数要牢记一点：默认参数必须指向不变对象！  
```python
 #bad
def add_end(L=[]):
    L.append('END')
    return L

 #right
def add_end(L=None):
    if L is None:
        L = []
    L.append('END')
    return L
```  

- 为什么要设计 str、None 这样的不变对象呢？因为不变对象一旦创建，对象内部的数据就不能修改，这样就减少了由于修改数据导致的错误。此外，由于对象不变，多任务环境下同时读取对象不需要加锁，同时读一点问题都没有。我们在编写程序时，如果可以设计一个不变对象，那就尽量设计成不变对象。

- Python 允许你在 list 或 tuple 前面加一个 * 号，把 list 或 tuple 的元素变成可变参数传进去  
```python
 #函数内 numbers 接收到的是一个 tuple，可以使用 calc(1,2,3) 的写法
def calc(*numbers):
    sum = 0
    for n in numbers:
        sum = sum + n * n
    return sum
nums = [1, 2, 3]
calc(*nums)
```  


-  
```python
def person(name, age, **kw):
    print 'name:', name, 'age:', age, 'other:', kw
person('Adam', 45, gender='M', job='Engineer')
 #同样可以采用上一条的简化做法，但是是两个**
kw = {'city': 'Beijing', 'job': 'Engineer'}
>>> person('Jack', 24, **kw)
```

-  
```python
def func(a, b, c=0, *args, **kw):
    print 'a =', a, 'b =', b, 'c =', c, 'args =', args, 'kw =', kw
args = (1, 2, 3, 4)
kw = {'x': 99}
func(*args, **kw)
 #输出：a = 1 b = 2 c = 3 args = (4,) kw = {'x': 99}
```
- \*args 是可变参数，args 接收的是一个 tuple；  
\*\*kw 是关键字参数，kw 接收的是一个 dict。  
以及调用函数时如何传入可变参数和关键字参数的语法：  
可变参数既可以直接传入：func(1, 2, 3)，又可以先组装 list 或 tuple，再通过 \*args 传入：func(\*(1, 2, 3))；  
关键字参数既可以直接传入：func(a=1, b=2)，又可以先组装 dict，再通过 \*\*kw 传入：func(\*\*{'a': 1, 'b': 2})。  
使用 **`*args`** 和 *`**kw`* 是 Python 的习惯写法，当然也可以用其他参数名，但最好使用习惯用法。


- **列表生成式**
```python
>>> [m + n for m in 'ABC' for n in 'XYZ']
['AX', 'AY', 'AZ', 'BX', 'BY', 'BZ', 'CX', 'CY', 'CZ']
```

- 遍历字典的键，值
```python
d = {'a':0, 'b':1, 'c':2}
for k,v in d.iteritems():
    print k,':',v
```
- abs 函数实际上是定义在 __builtin__ 模块中的，所以要让修改 abs 变量的指向在其它模块也生效，要用  
```python
__builtin__.abs = my_abs
```

- **map/reduce** & `lambda`
```python
def fn(x, y):
    return x * 10 + y
def char2num(s):
    return {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}[s]
reduce(fn, map(char2num, '13579'))
 #输出(int)：13579
 #下面可以用lambda函数进行代码缩减
def str2int(s):
    return reduce(lambda x,y:x*10+y, map(lambda x:{'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}[x], s))
```
- **Python 内建的 `filter()` 函数用于过滤序列。**  
和 map() 类似，filter() 也接收一个函数和一个序列。和 map() 不同的时，filter() 把传入的函数依次作用于每个元素，然后根据返回值是 True 还是 False 决定保留还是丢弃该元素。

- **闭包（Closure）**：内部函数可以 `访问` 外部函数的参数和局部变量 (**可读不可写**)  
```python
def fuc1(num):
    def fuc2():
        num2 = num + 1
        return num2
    return fuc2
f = fuc1(10)
f()
 #输出 11
```

- **装饰器（Decorator）**：增强函数的功能  
`wrapper() 函数的参数定义是 (*args, **kw)，因此， wrapper() 函数可以接受任意参数的调用！！`  
[三层嵌套 Decorator](http://www.liaoxuefeng.com/wiki/001374738125095c955c1e6d8bb493182103fac9270762a000/001386819879946007bbf6ad052463ab18034f0254bf355000)  
```python
import functools
def mylog(func):
    @functools.wraps(func)
    def wrapper(*args, **kw):
        print 'call %s:'%func.__name__
        return func(*args,**kw)
    return wrapper
@mylog
def now():
    print '2015'
now()
 #输出 2015
```  
这里的 functools 是为了将 wrapper 的 `__name__` 变为 func 的 `__name__`

- **偏函数**：当函数的参数个数太多，需要简化时，使用 functools.partial 可以创建一个新的函数，这个新函数可以固定住原函数的部分参数，从而在调用时更简单。  
```java
import functools
int2 = functools.partial(int, base=2)
int2('1000000')
#输出64
```

- 每一个包目录下面都会有一个 `__init__.py` 的文件，这个文件是必须存在的，否则，Python 就把这个目录当成普通目录，而不是一个包。`__init__.py` 可以是空文件，也可以有 Python 代码，因为 `__init__.py` 本身就是一个模块，而它的模块名就是包目录命名
- **如果要获得一个对象的所有属性和方法，可以使用 dir() 函数，它返回一个包含字符串的 list**
- 类的静态变量里面，使用 `类名.` 访问的是单例的类静态变量，使用 `self.` 访问的是类实例化时深度复制（**值传递**）的变量

- [ ] yield 的用法



## Note

###工具
- [so.chongbuluo.com](http://so.chongbuluo.com/)：虫部落快搜（翻墙搜索）
- [it.chongbuluo.com](http://it.chongbuluo.com/)：虫部落工具
- [osc tools](http://tool.oschina.net/)：开源中国在线工具箱
- [mockplus](https://www.mockplus.cn)：在线原型制作工具

###图像设计，处理
- [processon.com](https://www.processon.com/)：强大的在线作图工具(流程图、思维导图、UI、UML)
- [infogr.am](https://infogr.am/app/#/home)：图表制作
- [cutmypic.com](http://www.cutmypic.com/)：在线添加圆角、阴影
- [naotu.baidu.com](http://naotu.baidu.com/)：百度脑图制作
- [patorjk.com](http://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20)：ascii art 在线生成器

###设计灵感
- [pinterest.com](https://www.pinterest.com/categories/design/)：Pinterest
- [huaban.com](http://huaban.com/cc)：花瓣网

###软件下载
- [portablesoft.org](http://www.portablesoft.org/)：精品绿色便携软件
- [appinn.com](http://www.appinn.com/)：小软件

###系统安全
- [weigongkai.com](http://www.weigongkai.com/)：社工库~
- [weigongkai.com/shell](http://www.weigongkai.com/shell/)：webshell 生成
- [http://www.tingmima.com/](http://www.tingmima.com/)

###其他
- [http://www.jianshu.com/](http://www.jianshu.com/p/3efbbf265f15?utm_campaign=haruki&utm_content=note&utm_medium=reader_share&utm_source=weixin)：创业可以用到的一些第三方服务
- [nydus2015.info](http://www.nydus2015.info/)：VPN
- [btku.me](http://btku.me/)：bt 库
