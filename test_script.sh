#!/bin/bash
echo user $NPM_USER
npm adduser <<!
$NPM_USER
$NPM_PASSWORD
$NPM_EMAIL
!
#npm login << EOF
#$NPM_USER
#$NPM_PASSWORD
#$NPM_EMAIL
#EOF

#echo -e "$NPM_USER\n$NPM_PASSWORD\n$NPM_EMAIL" | npm login