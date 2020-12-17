FROM node:14.15.1-alpine
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
WORKDIR /usr/src/app
COPY . .
RUN apk add --no-cache --virtual python &> /dev/null 
RUN npm install -production &> /dev/null 
EXPOSE 8000
CMD npm run build && npm run start