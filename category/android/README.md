#android

###Todo
- android 3.0 后引入的数据异步加载工具：http://www.2cto.com/kf/201501/370570.html
- 聊天气泡动画：http://www.zcool.com.cn/work/ZNTMwMTkwMA==.html
- 图像清晰度算法（Image Quality Assessment）：http://nkwavelet.blog.163.com/blog/static/227756038201461532247117/

###Note
- android 3.0 版本后 `AsyncTask` 改为默认串行执行：http://droidyue.com/blog/2014/11/08/bad-smell-of-asynctask-in-android/
- android 注意内存泄露问题：http://droidyue.com/blog/2015/04/12/avoid-memory-leaks-on-context-in-android/
- rect2rect

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

//rect范围空间不能为0
if(minY == maxY) maxY++;
if(minX == maxX) maxX++;

RectF mTempSrc = new RectF(minX, minY, maxX, maxY);
RectF mTempDst = new RectF(0, 0, imageView.getWidth(), imageView.getHeight());
matrix.setRectToRect(mTempSrc, mTempDst, Matrix.ScaleToFit.CENTER);
imageView.setImageMatrix(matrix);
imageView.invalidate();

eyeAdjustView.setFeatures(matrix, eyesInfo, imageView);
```