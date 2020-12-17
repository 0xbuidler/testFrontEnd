FROM node:14.15.1-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN apk add --no-cache --virtual python &> /dev/null 
RUN npm install -production &> /dev/null 
COPY . .
EXPOSE 8000
CMD npm run start