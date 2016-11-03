#!/bin/sh

echo snyk token=$ENV_SNYK_TOKEN

snyk auth $ENV_SNYK_TOKEN