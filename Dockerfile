FROM node:12 as vue-build
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM nginx:alpine
COPY --from=vue-build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]