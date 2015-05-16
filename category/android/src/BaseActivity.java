package com.onecampus.yi;

import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.support.v7.app.ActionBarActivity;
import android.util.Log;
import android.view.MenuItem;

import com.android.volley.RequestQueue;
import com.android.volley.toolbox.ImageLoader;
import com.android.volley.toolbox.Volley;
import com.onecampus.yi.utils.LruImageCache;

import java.lang.ref.WeakReference;
import java.util.ArrayList;

/**
 * Created by nekocode on 2015/3/23 0023.
 */
public class BaseActivity extends ActionBarActivity {
    private static ArrayList<Handler> handlers = new ArrayList<Handler>();
    protected MyHandler handler = new MyHandler(this);
    protected RequestQueue queue;
    protected ImageLoader imageLoader;

    public BaseActivity _this;

    public static void addHandler(Handler handler) {
        handlers.add(handler);
    }

    public static void deleteHandler(Handler handler) {
        handlers.remove(handler);
    }

    public static void removeAll() {
        handlers.clear();
    }

    public static void broadcast(Message message) {
        for (Handler handler : handlers) {
            Message send = new Message();
            send.copyFrom(message);
            handler.sendMessage(send);
        }
    }

    public void sendMsg(Message message) {
        Message send = new Message();
        send.copyFrom(message);
        handler.sendMessage(send);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        _this = this;
        queue = Volley.newRequestQueue(this);
        imageLoader = new ImageLoader(queue, LruImageCache.getLruImageCache());
        addHandler(handler);
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch(item.getItemId()) {
            case android.R.id.home:
                this.finish();
                break;
        }
        return super.onOptionsItemSelected(item);
    }

    @Override
    public void onResume() {
        super.onResume();
    }

    @Override
    public void onPause() {
        super.onPause();
    }

    @Override
    public void finish() {
        deleteHandler(handler);
        super.finish();
    }

    static class MyHandler extends Handler {
        private WeakReference<BaseActivity> mOuter;

        public MyHandler(BaseActivity activity) {
            mOuter = new WeakReference<BaseActivity>(activity);
        }

        @Override
        public void handleMessage(Message msg) {
            final BaseActivity outer = mOuter.get();
            if (outer == null) {
                return;
            }

            outer.handler(msg);
        }
    }

    public void handler(Message msg) {

    }
}
