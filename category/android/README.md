#android

###Todo
- kotlin、retrofit、ref:http://blog.jobbole.com/65170/
- android 3.0 后引入的数据异步加载工具：http://www.2cto.com/kf/201501/370570.html
- 聊天气泡动画：http://www.zcool.com.cn/work/ZNTMwMTkwMA==.html
- 图像清晰度算法（Image Quality Assessment）：http://nkwavelet.blog.163.com/blog/static/227756038201461532247117/

###Note
- [Fragment的一些讲解](http://blog.csdn.net/lmj623565791/article/details/42628537)
- http://blog.mohitkanwal.com/blog/2015/03/07/styling-material-toolbar-in-android/
- android 3.0 版本后 `AsyncTask` 改为默认串行执行：http://droidyue.com/blog/2014/11/08/bad-smell-of-asynctask-in-android/
- android 注意内存泄露问题：http://droidyue.com/blog/2015/04/12/avoid-memory-leaks-on-context-in-android/
- [androiddevtools](http://www.androiddevtools.cn/)
- rect2rect
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

- recyclerview adapter onitemclicklistener

```java
public class TestAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {

    // ...

    private AdapterView.OnItemClickListener onItemClickListener = null;
    private void setOnItemClickListener(AdapterView.OnItemClickListener onItemClickListener) {
        this.onItemClickListener = onItemClickListener;
    }

    // ...
    
    @Override
    public void onBindViewHolder(RecyclerView.ViewHolder holder, int position) {
        if (holder instanceof ItemViewHolder) {
            ItemViewHolder vh = (ItemViewHolder) holder;
            final int p = position;
            vh.onClickListener = new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    if(onItemClickListener != null) {
                        onItemClickListener.onItemClick(null, v, p, getItemId(p));
                    }
                }
            };
        }
    }

    static class ItemViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {
        View.OnClickListener onClickListener;

        ItemViewHolder(View view) {
            super(view);

            view.setOnClickListener(this);
        }

        @Override
        public void onClick(View v) {
            if(onClickListener != null)
                onClickListener.onClick(v);
        }
    }
}
```

- 设置ITALIC需要将字体的Typeface设置为MONOSPACE 

- 需要context的地方（非UI）尽量使用ApplicationContext，而不是传Activity : Context，这样有可能会导致activity无法被回收（内存泄露）
