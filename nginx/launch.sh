#!/bin/sh

htpasswd -c -b auth.htpasswd $USER $PASS

envsubst < auth.conf > /etc/nginx/conf.d/auth.conf
envsubst < auth.htpasswd > /etc/nginx/auth.htpasswd

echo basic-auth-pwd
cat auth.htpasswd

nginx -g "daemon off;"