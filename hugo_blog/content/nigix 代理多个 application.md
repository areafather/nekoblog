+++
Categories = ["Development", "Nginx"]
Description = ""
Tags = ["Development", "Nginx"]
date = "2015-11-25T21:47:23+08:00"
title = "使用 nigix 代理多个 application"

+++

最近在使用 tornado 开发 web 应用，打算使用 nginx 来反向代理多个 tornado application，vote 应用监听 8081 端口，testing 应用监听 8080 端口（路由为 /test/ ），然后 nginx 监听 80 端口并反向代理转发请求给两个应用，配置如下：

```
worker_processes  1;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;

    keepalive_timeout  65;

    gzip  on;
    
    upstream vote {
        server 127.0.0.1:8081;
    }
		
    upstream testing {
        server 127.0.0.1:8080;
    }

    server {
        listen       80;
        server_name  localhost;
        
        location / {
            proxy_pass http://vote;
        }

        location /test/ {
            proxy_pass http://testing;
        }
    }
}

```

