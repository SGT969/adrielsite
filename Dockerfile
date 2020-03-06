# Oficial image for nginx alpine
FROM nginx:1.16.1

# Working directory
WORKDIR /usr/src/adrielsite

#Copy essential files from your host the project
COPY projetos/ projetos

# Update linux, install nginx, add user, permissions and create directories and make a nginx conf backup
RUN chown -R nginx:nginx /usr/src/adrielsite

# Copy your nginx configuration file from your host to the project
COPY nginxconf/default.conf /etc/nginx/conf.d/default.conf

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 80

RUN nginx -t

CMD nginx -g 'daemon off;'