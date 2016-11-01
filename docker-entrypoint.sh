#!/bin/bash
set -e

if [ "$1" = 'cron' ]; then
    if [ -n "$CRON_JOB" ]; then
        echo "$CRON_JOB" > ~/crontab
        echo "" >> ~/crontab
        crontab ~/crontab
        rm -f ~/crontab
    fi

    /usr/bin/env |
        grep -E '^[0-9A-Z_]{1,}=' |
        sed 's/^/export /' |
        sed -r 's/=(.*)$/="\1"/' > ~/.env-vars

    /usr/sbin/rsyslogd

    /usr/sbin/cron -f
fi

exec "$@"