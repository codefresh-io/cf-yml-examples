echo user $NPM_USER
echo user $NPM_PASSWORD

#npm login << MULTILINE
#$NPM_USER
#$NPM_PASSWORD
#$NPM_EMAIL
#MULTILINE

#echo -e "$NPM_USER\n$NPM_PASSWORD\n$NPM_EMAIL" | npm login

npm config set //registry.npmjs.org/:_authToken $NPM_AUTH_TOKEN