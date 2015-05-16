package com.onecampus.yi.utils;

import android.text.TextPaint;
import android.text.style.ClickableSpan;
import android.view.View;

/**
 * User: qii
 * Date: 12-8-20
 */
public class MyURLSpan extends ClickableSpan  {
    private Runnable onClick;
    private Runnable onLongClick;
    private boolean underLine = false;

    public MyURLSpan(Runnable onClick) {
        this.onClick = onClick;
    }

    public MyURLSpan(Runnable onClick, Runnable onLongClick) {
        this.onClick = onClick;
        this.onLongClick = onLongClick;
    }

    public MyURLSpan underLine() {
        underLine = true;
        return this;
    }

    public void onClick(View widget) {
        if(onClick != null)
            onClick.run();
    }


    public void onLongClick(View widget) {
        if(onLongClick != null)
            onLongClick.run();
    }

    @Override
    public void updateDrawState(TextPaint tp) {
        tp.setColor(tp.linkColor);
        if(underLine)
            tp.setUnderlineText(true);
    }
}
