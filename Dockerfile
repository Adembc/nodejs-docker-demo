FROM node:16-alpine

WORKDIR /app

COPY package*.json .

RUN npm i 

COPY . .

RUN npm run build

EXPOSE 8001

CMD  ["npm" ,"start"]