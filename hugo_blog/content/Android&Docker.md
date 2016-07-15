+++
Categories = ["Development", "Docker"]
Description = ""
Tags = ["Development", "Docker"]
date = "2016-07-15T11:30:00+08:00"
title = "Android 与 Docker"
+++

## 前言

如今最火的 Docker 技术怎能不尝试一下呢？

## 持续集成

我在公司内部 Gitlab 集成的 CI 上使用自己构建的一个 **[Docker Image](https://github.com/nekocode/docker-android)** 进行集成测试。Gitlab 的 CI 配置文件遵循 **YAML** 语法：

```
image: daocloud.io/nekocode/docker-android:1.5

before_script:
    - export GRADLE_USER_HOME=`pwd`/.gradle
    - echo -e "KEYSTORE_PASSWORD=${KEYSTORE_PASSWORD}\nKEY_PASSWORD=${KEY_PASSWORD}\nKEY_ALIAS=${KEY_ALIAS}" > `pwd`/keystore.properties
    - cat `pwd`/keystore.properties

cache:
    untracked: true
    paths:
        - .gralde

build:
    stage: build
    script:
        - gradle clean --stacktrace
        - gradle app:assembleProdRelease -PdisablePreDex=true --stacktrace
    only:
        - dev
```

我在 Image 中预安装了 Gradle 2.13，所以在 CI 环境中可以直接使用 `gradle` 而非 `gradlew`(Wrapper) 进行编译。此外，为了避免每次编译时下载依赖库，我将 `GRADLE_USER_HOME` 设立在了工程目录下，并将该目录添加进 CI 的 Cache 目录列表。

持续集成还能实现更多的增益功能，例如自动打包、自动部署等。

## 内网 Maven 仓库

[我们内网中需要部署一个 Maven 仓库。](https://zhuanlan.zhihu.com/p/21320023)一个不错的选择是 [sonatype/nexus3](https://hub.docker.com/r/sonatype/nexus3/)。

一个很 Nice 的教程: [拥抱 Android Studio 之四：Maven 仓库使用与私有仓库搭建](http://blog.bugtags.com/2016/01/27/embrace-android-studio-maven-deploy/)