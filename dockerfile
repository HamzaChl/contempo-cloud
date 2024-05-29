FROM php:8.0-apache
WORKDIR /var/www/html

COPY index.php index.php
COPY src/ src
EXPOSE 80

#docker run -d -p 80:80 my-php-site:latest
