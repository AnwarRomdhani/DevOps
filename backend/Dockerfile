
FROM node:lts-alpine

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm Install

COPY . .

EXPOSE 9000

ENV MONGO_URI=mongodb://mongo:27017/mydatabase

CMD ["npm", "start"]
