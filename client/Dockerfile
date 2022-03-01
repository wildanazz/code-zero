FROM node:17.6.0-alpine
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
RUN chown -R node:node node_modules
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=0 /home/node/app/build /usr/share/nginx/html