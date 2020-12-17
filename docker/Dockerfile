FROM node:14.15.1-alpine
WORKDIR /usr/src/app
COPY . .
RUN apk --no-cache add --virtual native-deps \
    g++ gcc libgcc libstdc++ linux-headers make python && \
    npm install --quiet node-gyp -g &&\
    npm install --quiet && \
    cp -r -f /usr/share/zoneinfo/Hongkong /etc/localtime &&\
    apk del native-deps
RUN npm install && npm run build 
EXPOSE 8000
CMD npm run start