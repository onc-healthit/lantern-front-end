FROM node:10

COPY ./certs/ /etc/ssl/certs/
RUN yarn config set strict-ssl true
RUN yarn config set cafile /etc/ssl/certs/MITRE\ BA\ Root.crt

# set working directory
WORKDIR /app

RUN pwd

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn install
RUN yarn global add @angular/cli@7.3.9

# add app
COPY . /app

RUN ls

RUN ng build

FROM nginx

RUN pwd
RUN ls

COPY --from=0 /app/dist/lantern-app/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf