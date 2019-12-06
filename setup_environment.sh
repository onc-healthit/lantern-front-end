#!/bin/bash

# Set custom ca-cert if it was passed in via volume
if test -f /usr/local/share/ca-certificates/ca-certificates.crt then
    update-ca-certificates
    echo "Setting cafile in yarn to /usr/local/share/ca-certificates/ca-certificates.crt"
    yarn config set cafile /usr/local/share/ca-certificates/ca-certificates.crt
fi

yarn install
yarn global add @angular/cli@8.3.12

ng build