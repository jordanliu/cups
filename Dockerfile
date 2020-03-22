FROM node:alpine

LABEL cups.api.version="0.0.1-beta"

COPY package.json /nodejs/package.json
COPY package-lock.json /nodejs/package-lock.json
COPY . /nodejs/

WORKDIR /nodejs

RUN npm install

EXPOSE 3000:3000
