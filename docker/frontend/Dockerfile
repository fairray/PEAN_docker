FROM node:9-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./frontend/package.json .
RUN npm i
COPY ./frontend .
CMD ["npm", "start"]