FROM nginx:alpine

#ENV HTPASSWD='foo:$apr1$odHl5EJN$KbxMfo86Qdve2FH4owePn.'

ENV FORWARD_PORT=80

WORKDIR /opt

RUN apk add --no-cache gettext

COPY nginx/auth.conf nginx/auth.htpasswd nginx/launch.sh ./

CMD ["sh", "./launch.sh"]