# lantern-front-end

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
  
## Using docker-compose

### Starting the Front-end

**If you have no containers** in your environment from a previous run of docker-compose, run: 

```bash
docker-compose up
```

To start the service in the background, add `-d` to your `docker-compose up` command.

**If you already have containers** in your environment from a previous run of docker-compose, run: 

```bash
docker-compose start
```

### Stopping the Services

To stop the service and retain the container, run:

```bash
docker-compose stop
```

To stop the service and remove the container, run:

```bash
docker-compose down
```

To stop the service, remove the container and image, run:

```bash
docker-compose down --rmi all -v
```

### Starting Services Behind SSL-Inspecting Proxy
If you are operating behind a proxy that does SSL-Inspection, yarn needs to be configured with the certificates that are used by the proxy in the image. Currently, `docker-compose.yml` includes the location of a `certs` directory as an argument to the `Dockerfile`. If you are operating behind an SSL-Inspecting proxy **you will have to copy your certificates into this directory.**

### Docker instructions

To run without using the docker-compose command:

First build the image:

```bash
docker build --build-arg cert_dir=./certs -t angular-nginx .`
```

Then run the container:

```bash
`docker run --name angular-nginx-container -d -p 8090:80 angular-nginx`
```

Then go to `localhost:8090`

# License

Copyright 2019 The MITRE Corporation

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

```
http://www.apache.org/licenses/LICENSE-2.0
```

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
