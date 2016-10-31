FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install --silent
RUN npm install -g pm2

COPY . /usr/src/app

ADD nginx.conf /etc/nginx/
ADD default /etc/nginx/sites-available/

EXPOSE 8080

ENV PORT 8080

CMD pm2 start app.js
#CMD npm start