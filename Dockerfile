FROM node:10-alpine as build-step

LABEL org.opencontainers.image.title="pokedex"\
      org.opencontainers.image.description="Pokemon catalog. Build with Angular!"\
      org.opencontainers.image.authors="@victornastase"

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/pokedex /usr/share/nginx/html
