+++
date = "2016-09-10T01:01:22+08:00"
title = "在 Unity 中导进 Cocos2d-x 的精灵集"
+++

## 正文

当然我不是说纯粹的纹理，我指的是导入 SpriteSheet 的切片信息。

Cocos2d-x 是用 plist 文件来储存 SpriteSheet 的切片信息，需要注意的是信息字段在几个不同版本下有差异，需要做兼容处理。

我制作了一个插件来解析 plist 文件，并在 Unity 中切割 SpriteSheet。

**[Unity3D-TextureAtlasSlicer-Cocos2d-x](https://github.com/nekocode/Unity3D-TextureAtlasSlicer-Cocos2d-x)**
