FROM node:9-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./server/package.json .
RUN npm i
COPY ./server .
CMD ["npm", "start"]