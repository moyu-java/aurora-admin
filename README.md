# aurora-admin

> Aurora 后台管理项目

## 项目构建步骤

``` bash
# 安装依赖
npm install

# 开发模式部署，热更新。localhost:8080
npm run dev

# 项目构建
npm run build

# 带报告的项目构建
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 项目部署

在本地配置 Nginx 与 Docker，然后生成一个镜像，上传到 docker hub 中，在服务器端拉取项目并运行即可。

> Dockerfile

```
FROM nginx
COPY dist/ /usr/share/nginx/html/
COPY nginx/nginx.conf /etc/nginx/nginx.conf
```

> nginx/nginx.conf

```
# user  root;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    # 设置连接超时
    keepalive_timeout  65;
    # 设置请求缓冲
    client_header_buffer_size 2k;

    #gzip  on;

    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root    /usr/share/nginx/html;
            index   index.html index.htm;
            try_files $uri $uri/ /index.html;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   /usr/share/nginx/html;
        }
    }
}

```

创建镜像并上传

``` bash

# 貌似是删除 None 镜像
docker image prune -f

# 创建镜像，注意后面有一个点
docker build -t aurora-admin:1.0.0.

# 添加标记
docker tag aurora-admin:1.0.0 jemgeek/aurora-admin:1.0.0

# 添加标记 latest
docker tag aurora-admin:1.0.0 jemgeek/aurora-admin:latest

# 上传 最新版本
docker push jemgeek/aurora-admin:1.0.0

# 上传 更新 latest 版本
docker push jemgeek/aurora-admin:latest

```

上传完毕之后，在服务器端使用下面的命令运行

``` bash
# 拉取镜像, 不加标签自动拉取latest版本
docker pull jemgeek/aurora-admin:latest

# 运行镜像
docker run --name aurora-admin -p 8080:80 -d jemgeek/aurora-admin

# 当镜像更新之后，需要先删除之前创建的容器，然后拉取新的镜像，然后重新创建容器
# 停止容器
docker stop aurora-admin
# 删除容器
docker rm aurora-admin
# 重新拉取镜像
docker pull jemgeek/aurora-admin
# 重新创建容器
docker run --name aurora-admin -p 8080:80 -d jemgeek/aurora-admin
```