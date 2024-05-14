# syntax = docker/dockerfile:1

ARG NODE_VERSION=20.9.0

FROM node:${NODE_VERSION}-slim as base

ENV NODE_ENV=development

WORKDIR /src

# Build
FROM base as build

COPY --link package.json package-lock.json .
RUN npm install

# Run
FROM base

COPY --from=build /src/node_modules /src/node_modules

CMD [ "npm", "run", "dev" ]



# FROM node:20-alpine as build

# WORKDIR /usr/src/app

# COPY ./package*.json /usr/src/app

# RUN npm install

# COPY . .

# COPY ./.docker/envs/.env.dev .env

# RUN npm run build

# FROM node:20-alpine

# COPY --from=build /usr/src/app/.output/ /usr/src/app/

# WORKDIR /usr/src/app

# EXPOSE 3000

# ENTRYPOINT [ "node", "./server/index.mjs" ]
