#java


- [Grails：约定优于配置](http://www.infoq.com/cn/articles/case-study-grails-partii/)  

```
举个简单的例子。在Django 1.3之后引入了「Class-based view」，有「ListView」和「DetailView」。
Django的「ListView.as_view(model=Publisher,)」不需要指定去render哪个template，
而是自动去使用了「/path/to/project/books/templates/books/publisher_list.html」这个模板。
这即是convention over configuration的一个典型示范。
优先使用默认的约定，而不是非要明确的指定要render的template。
```

- kotlin：**`限制优于约定`**  

```
nullable 和 notnullable、var 和 val 等。语法上限制比口头约定更不易造成潜在 bug。
```

- java线程锁：http://blog.csdn.net/ghsau/article/details/7461369/

- [java内部类会隐式持有外部类实例的引用](http://droidyue.com/blog/2014/10/02/the-private-modifier-in-java/)

####泛型
- 与C#中的泛型相比，Java的泛型可以算是“伪泛型”了。在C#中，不论是在程序源码中、在编译后的中间语言，还是在运行期泛型都是真实存在的。 **Java则不同，Java的泛型只在源代码存在** ，只供编辑器检查使用，编译后的字节码文件已擦除了泛型类型，同时在必要的地方插入了强制转型的代码。   

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