FROM node:alpine

LABEL gitlab=https://gitlab.com/jordanxliu/cups

COPY / /nodejs
COPY package.json /nodejs/package.json

WORKDIR /nodejs
RUN sudo rm -rf node_modules
RUN npm install

EXPOSE 5000:5000
