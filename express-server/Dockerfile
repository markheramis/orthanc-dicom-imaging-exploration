FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY ./start-container /usr/local/bin/start-container
RUN chmod +x /usr/local/bin/start-container

EXPOSE 8080
ENTRYPOINT ["start-container"]