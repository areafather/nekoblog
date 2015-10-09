#kotlin

### 入门
- [kotlin在线编译器](http://try.kotlinlang.org/#/Examples)
- [Getting started with Android and Kotlin](http://kotlinlang.org/docs/tutorials/kotlin-android.html)
- [Working with Kotlin in Android Studio](http://blog.jetbrains.com/kotlin/2013/08/working-with-kotlin-in-android-studio/)
- [kotlin中文博客教程](http://my.oschina.net/yuanhonglong/blog?catalog=3333352)
- https://docs.google.com/document/d/1ReS3ep-hjxWA8kZi0YqDbEhCqTt29hG8P44aA9W0DM8/preview?hl=en&forcehl=1&sle=true

###note

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
