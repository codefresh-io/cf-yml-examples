FROM node:latest

ARG argument

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install --silent
COPY . /usr/src/app
EXPOSE 3000

ENV PORT 3000

RUN echo $argument

CMD [ "npm", "start" ]