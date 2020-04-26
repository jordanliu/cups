# Production Build

# Stage 1: Build react client
FROM node:10.16-alpine as client

# Working directory be app
WORKDIR /usr/app/client/

COPY client/package*.json ./

# Install dependencies
RUN npm install
RUN  echo "http://138.197.77.172:8080/" > .env
# copy local files to app folder
COPY client/ ./
RUN ls

RUN npm run-script build

# Stage 2 : Build Server

FROM node:alpine

WORKDIR /usr/src/app/
COPY --from=client /usr/app/client/build/ ./client/build/
RUN ls

WORKDIR /usr/src/app/
COPY package*.json ./
RUN npm install -qy
COPY . ./

ENV PORT 8080

EXPOSE 8080

CMD ["npm", "start"]