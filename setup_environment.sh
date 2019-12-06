#!/bin/bash

until ls /usr/local/share/ca-certificates/ca-certificates.crt
do
    echo "Waiting for /usr/local/share/ca-certificates/ca-certificates.crt to be available"
    echo "Did you mount a volume to this location containing your root certificates?"
done
update-ca-certificates
yarn config set cafile /usr/local/share/ca-certificates/ca-certificates.crt

yarn install
yarn global add @angular/cli@8.3.12

ng build