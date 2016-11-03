FROM node:latest

RUN npm install -g snyk

ENV ENV_SNYK_TOKEN=$SNYK_TOKEN

COPY snyk/launch.sh ./

CMD ["./launch.sh"]