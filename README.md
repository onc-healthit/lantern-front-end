# lantern-front-end

## Development server

Run `ng serve` for the dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If you do not have Angular in your development environment you may have to run the folllowing:
```bash
npm install -g @angular/cli
npm install --save-dev @angular-devkit/build-angular
```

For more information on running and set-up, [visit the wiki](https://github.com/onc-healthit/lantern-front-end/wiki).

## Nginx server

To run with the nginx server (on a Mac):

### First Time
1. Install nginx: `brew install nginx`
2. Copy the local nginx config file `lantern.conf` to `/usr/local/etc/nginx/servers/`
3. Make `lantern` directory in the nginx file system:
    - `cd /usr/local/var/www`
    - `mkdir lantern`

### Every Time
1. Build the production version of this project: `ng build --prod`
2. Move the `dist` directory so nginx can run it: `mv ./dist/lantern-app/ /usr/local/var/www/lantern/`
3. Start the server: `sudo nginx -c /usr/local/etc/nginx/servers/lantern.conf`
4. Go to `localhost:8090`

### Stop the Server
- To stop the server: `sudo nginx -c /usr/local/etc/nginx/servers/lantern.conf -s stop`
- To stop nginx completely: `sudo nginx -s stop`