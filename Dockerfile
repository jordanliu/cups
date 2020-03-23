FROM node:alpine

LABEL cups.api.version="0.0.1-beta"

COPY package.json /nodejs/package.json
COPY package-lock.json /nodejs/package-lock.json
COPY . /nodejs/


RUN npm install

EXPOSE 5000:5000
