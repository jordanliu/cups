FROM node:alpine

LABEL https://gitlab.com/jordanxliu/cups

COPY package.json /nodejs/package.json
COPY package-lock.json /nodejs/package-lock.json
COPY . /nodejs/

WORKDIR /nodejs

RUN npm install

EXPOSE 3000:3000
