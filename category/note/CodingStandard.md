#编码规范
##命名规范

- **包命名**：包名所有部分都用 `小写`，前缀是一个顶级域名，通常是 **com net org cc**，第二域是 `公司名`，第三域是 `项目名`。  
example： **cc.thecampus.xiaoxiao**
- **类命名**：使用 [大驼峰式命名法](http://baike.baidu.com/link?url=Sa5pW2KrG5v21runD8gvGgKC9CBM04X2EYIeA2mgFL9NCb-XamrsczUro5o0Xk3pW_jBnT8o-olFmENfdZibz_)  
example： **BaseActivity**
- **方法命名**：使用 [小驼峰式命名法](http://baike.baidu.com/link?url=Sa5pW2KrG5v21runD8gvGgKC9CBM04X2EYIeA2mgFL9NCb-XamrsczUro5o0Xk3pW_jBnT8o-olFmENfdZibz_)
 - 类的获取方法前置 `get`，设置方法前置 `set`，布尔型判断方法不用 `get`，用 `is` 或者 `equal`；  
 example： **getAge()  setAge(age)  isFemale()**
 -  方法的第一个单词尽可能采用动词  
 example： **addHandler()**
- **变量命名**：使用 `小驼峰式命名法`  
example： **imageLoader**
 - 成员变量：不带 **m** 字前缀！
 - **View命名**：种类 + 名字，`layout id`的命名保持和变量一直，方便使用 **ButterKnife** 注解  
 example： **textViewName  btnLoad  eidtTextAge**