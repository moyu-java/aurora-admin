FROM nginx

MAINTAINER James

COPY dist/ /usr/share/nginx/html/

COPY nginx/nginx.conf /etc/nginx/nginx.conf

RUN echo 'echo nginx init success.'