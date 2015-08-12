#kotlin

### 入门
- [kotlin在线编译器](http://try.kotlinlang.org/#/Examples)
- [Getting started with Android and Kotlin](http://kotlinlang.org/docs/tutorials/kotlin-android.html)
- [Working with Kotlin in Android Studio](http://blog.jetbrains.com/kotlin/2013/08/working-with-kotlin-in-android-studio/)
- [kotlin中文博客教程](http://my.oschina.net/yuanhonglong/blog?catalog=3333352)

###note

```java
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

- [android base framework some part with kotlin](http://git.oschina.net/nekocode/BaseFramework)

- [github.com/JetBrains/anko](https://github.com/JetBrains/anko)