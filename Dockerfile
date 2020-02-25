FROM node:10 as build-deps

WORKDIR /usr/src/app

COPY ./package*.json .
COPY ./yarn.lock .

RUN yarn install

COPY ./ ./

RUN yarn run build

FROM nginx:1.12-alpine

COPY --from=build-deps /usr/src/app/build /etc/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80