#python
###教程
- [廖雪峰的官方博客](http://www.liaoxuefeng.com/wiki/001374738125095c955c1e6d8bb493182103fac9270762a000)
- [简明 Python 教程](http://itlab.idcquan.com/linux/manual/Python_chinese/)

###IDE
- [Sublime text x64](http://www.cr173.com/soft/121149.html)


###GUI
- [Python GUI编程(Tkinter)](http://www.yiibai.com/python/python_gui_programming.html)
- [pygame](http://eyehere.net/2011/python-pygame-novice-professional-index/)

###note
- Python 没有规定缩进是几个空格还是Tab。按照约定俗成的管理，应该始终坚持使用4个空格的缩进。  

- Python 程序是大小写敏感的，如果写错了大小写，程序会报错。 

- 从raw_input()读取的内容永远以字符串的形式返回，把字符串和整数比较就不会得到期待的结果，必须先用int()把字符串转换为我们想要的整型：  
```java
birth = int(raw_input('birth: '))
```

- 函数多重返回值默认用tuple来构造  
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

- 为什么要设计str、None这样的不变对象呢？因为不变对象一旦创建，对象内部的数据就不能修改，这样就减少了由于修改数据导致的错误。此外，由于对象不变，多任务环境下同时读取对象不需要加锁，同时读一点问题都没有。我们在编写程序时，如果可以设计一个不变对象，那就尽量设计成不变对象。

- Python允许你在list或tuple前面加一个*号，把list或tuple的元素变成可变参数传进去  
```python
 #函数内numbers接收到的是一个tuple，可以使用calc(1,2,3)的写法
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
- \*args 是可变参数，args接收的是一个tuple；  
\*\*kw 是关键字参数，kw接收的是一个dict。  
以及调用函数时如何传入可变参数和关键字参数的语法：  
可变参数既可以直接传入：func(1, 2, 3)，又可以先组装list或tuple，再通过 \*args 传入：func(\*(1, 2, 3))；  
关键字参数既可以直接传入：func(a=1, b=2)，又可以先组装dict，再通过 \*\*kw 传入：func(\*\*{'a': 1, 'b': 2})。  
使用 **`*args`** 和 *`**kw`* 是Python的习惯写法，当然也可以用其他参数名，但最好使用习惯用法。




