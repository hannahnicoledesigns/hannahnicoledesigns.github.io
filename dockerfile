FROM nginx:alpine

# Copy the site into nginx's default web root
COPY index.html /usr/share/nginx/html/index.html
COPY images/ /usr/share/nginx/html/images/

EXPOSE 80