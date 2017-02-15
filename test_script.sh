echo user $NPM_USER
echo user $NPM_PASSWORD

#npm login << MULTILINE
#$NPM_USER
#$NPM_PASSWORD
#$NPM_EMAIL
#MULTILINE

echo -e "$NPM_USER\n$NPM_PASSWORD\n$NPM_EMAIL" | npm login