FROM node:lts AS base
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .

FROM base AS development
EXPOSE 3000
CMD [ "yarn", "start" ]

FROM base AS builder
RUN yarn run build

FROM nginx:1.13-alpine as production
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80