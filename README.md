# lantern-front-end


* [Configuration](#configuration)
* [Development server](#development-server)
* [Nginx server](#nginx-server)
  * [First Time](#first-time)
  * [Every Time](#every-time)
  * [Stopping the Services](#stop-the-server)
* [Docker instructions](#docker-instructions)
  * [Starting Services Behind SSL-Inspecting Proxy](#starting-services-behind-ssl-inspecting-proxy)
  * [Pushing to the Docker Hub Repository](#pushing-to-the-docker-hub-repository)
* [License](#license)

## Configuration
This project reads the following environment variable:

* **LANTERN_GRAFANA_URL**: The grafana dashboard url that is being used for displaying visualizations.

  Default value: ""

## Development server

Run `ng serve` for the dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If you do not have Angular in your development environment you may have to run the folllowing:
```bash
yarn install -g @angular/cli
yarn install --save-dev @angular-devkit/build-angular
```

For more information on running and set-up, [visit the wiki](https://github.com/onc-healthit/lantern-front-end/wiki).

## Nginx server

To run with the nginx server (on a Mac):

### First Time
1. Install nginx: `brew install nginx`
2. Copy the local nginx config file `lantern.conf` to `/usr/local/etc/nginx/servers/`
3. Make `lantern` directory in the nginx file system: `mkdir /usr/local/var/www/lantern`

### Every Time
1. Make sure you have built the production version of this project: `ng build --prod`
2. Copy the `dist` directory so nginx can run it: `cp ./dist/lantern-app/* /usr/local/var/www/lantern/`
3. Start the server:
  - If you already have nginx running: `sudo nginx -s reload`
  - If nginx is not running: `sudo nginx`
  - Or, to be more specific: `sudo nginx -c /usr/local/etc/nginx/nginx.conf`
4. Go to `localhost:8090`

### Stop the Server
To stop the server:
  - Option 1: `sudo nginx -c /usr/local/etc/nginx/nginx.conf -s stop`
  - Option 2: `sudo nginx -s stop`

## Docker instructions

To run without using the docker-compose command:

First build the image:

```bash
docker build --build-arg cert_dir=./certs -t lantern_front_end .
```

Then run the container:

```bash
docker run --name lantern_front_end_container -d -p 8090:80 lantern_front_end
```

Then go to `localhost:8090`

### Starting Services Behind SSL-Inspecting Proxy
If you are operating behind a proxy that does SSL-Inspection, yarn needs to be configured with the certificates that are used by the proxy in the image. Currently, the `docker build` command requires a `certs` directory as an argument to the `Dockerfile`. If you are operating behind an SSL-Inspecting proxy **you will have to copy your certificates into this directory.** The `Dockerfile` also expects that the root certificate will exist as part of the file `ca-certificates.crt`.

### Pushing to the Docker Hub Repository
To push the front-end to our [Docker Hub public repository](https://hub.docker.com/repository/docker/onchealthit/lantern-front-end), run:

```
docker build -t <image name> .
docker tag <image name> onchealthit/lantern-front-end
docker push onchealthit/lantern-front-end
```

You can also combine steps one and two by running:
```
docker build -t onchealthit/lantern-front-end .
```

# License

Copyright 2019 The MITRE Corporation

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

```
http://www.apache.org/licenses/LICENSE-2.0
```

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
