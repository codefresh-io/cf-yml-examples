FROM nginx

#ENV HTPASSWD='foo:$apr1$odHl5EJN$KbxMfo86Qdve2FH4owePn.'

RUN apt-get update -y \
    && apt-get install -y \
        apache2-utils \
    && rm -rf /var/lib/apt/lists/*

ENV FORWARD_PORT=80

WORKDIR /opt

RUN apk add --no-cache gettext

COPY nginx/auth.conf nginx/auth.htpasswd nginx/launch.sh ./

RUN chmod 0755 ./launch.sh

CMD ["./launch.sh"]