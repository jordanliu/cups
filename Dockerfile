FROM node:alpine

LABEL gitlab=https://gitlab.com/jordanxliu/cups

COPY / /nodejs/src
COPY package.json /nodejs/package.json

WORKDIR /nodejs

RUN npm install

EXPOSE 5000:5000
