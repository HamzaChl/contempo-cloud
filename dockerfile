FROM php:8.0-apache
WORKDIR /var/www/html

EXPOSE 80

COPY ./Project-opdracht-6/ /usr/local/apache2/htdocs/

RUN docker-php-ext-install mysqli && apt-get update
RUN cp -r /usr/local/apache2/htdocs/* /var/www/html/
#docker run -d -p 80:80 my-php-site:latest
