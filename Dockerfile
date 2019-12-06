FROM node:12 AS builder

# Set working directory
WORKDIR /app

COPY . /app

RUN chmod +x /app/setup_environment.sh
ENTRYPOINT ["/app/setup_environment.sh"]

FROM nginx

# Copy build and configuration file for nginx
COPY --from=builder /app/dist/lantern-app/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf