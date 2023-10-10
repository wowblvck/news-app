FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

ENV SERVER_PORT 3001

CMD ["npm", "start"]
