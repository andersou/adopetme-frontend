FROM node:12

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .
RUN yarn

EXPOSE 8080
CMD yarn serve