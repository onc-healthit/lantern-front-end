FROM node:12
ARG cert_dir

# Set working directory
WORKDIR /app

# Add certs and configure yarn
COPY ${cert_dir}/ /app/certs/
RUN yarn config set strict-ssl true
RUN yarn config set cafile /app/certs/MITRE\ BA\ Root.crt

# Install app dependencies
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn install
RUN yarn global add @angular/cli@7.3.9

# Add App and build
COPY . /app
RUN ng build

FROM nginx

# Copy build and configuration file for nginx
COPY --from=0 /app/dist/lantern-app/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf