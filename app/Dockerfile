FROM ubuntu
MAINTAINER Renato Urajnar

RUN apt-get -qq update
RUN apt-get install -qq -y curl
RUN apt-get install -y git
RUN apt-get install -y nginx

RUN curl -sL https://deb.nodesource.com/setup_5.x | bash && \
    apt-get install -y nodejs build-essential

RUN rm -rf /etc/nginx/sites-available/default
RUN rm -rf /etc/nginx/sites-enabled/default
ADD nodeapp /etc/nginx/sites-available/nodeapp

RUN ["ln", "-s", "/etc/nginx/sites-available/nodeapp", "/etc/nginx/sites-enabled/nodeapp"]

WORKDIR /var/www/html
COPY . .
RUN npm install
RUN npm install -g gulp
RUN gulp build

# Define default command.
CMD ["nginx", "-g", "daemon off;"]