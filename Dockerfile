# Oficial image for nginx alpine
FROM nginx:1.16.1

CMD /bin/sh

# Working directory
WORKDIR /usr/src/adrielsite

# Update linux and install nginx, add user and create directories and make a nginx conf backup
RUN apk update -y && apk add nginx -y && adduser -D -g 'www' wwww -y && mkdir /www && chown -R www:www /var/lib/nginx && chown -R www:www /www && mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak

# Copy essential files from your host to the project
COPY ./projetos/ /projetos

# Run the command inside your image filesystem 
#&& rc-service nginx start && nginx -t

# Copy your nginx configuration file from your host to the project
COPY ./nginxconf/default.conf /etc/nginx/nginx.conf

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 80

# Run the specified command within the container.