FROM node:14.15.1-alpine
WORKDIR /usr/src/app
COPY . .
RUN apk add --no-cache --virtual python &> /dev/null 
RUN npm install -production  && npm run build 
EXPOSE 8000
CMD npm run start