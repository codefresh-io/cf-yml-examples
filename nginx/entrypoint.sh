#!/bin/bash
echo nginx pre-configure

cp /basic-auth.conf /etc/nginx/conf.d/default.conf
sed -e "s/Admin/$TITLE/" -i /etc/nginx/conf.d/default.conf
#sed -e "s/app/$HOST/" -i /etc/nginx/conf.d/default.conf
sed -e "s/80/$PORT/" -i /etc/nginx/conf.d/default.conf

htpasswd -c -b /etc/nginx/.htpasswd $USER $PASS

nginx -g "daemon off;"
