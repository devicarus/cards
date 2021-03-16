FROM node:lts AS development

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN yarn install --frozen-lockfile

COPY . /usr/src/app

EXPOSE 3000

CMD [ "yarn", "start" ]

FROM development AS builder

RUN yarn run build

FROM nginx:1.13-alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
