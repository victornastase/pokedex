# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:10-alpine as build-step

LABEL description="Angular App \
                  A collection of Pokemons!"

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/pokedex /usr/share/nginx/html
#Copy default nginx configuration
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
