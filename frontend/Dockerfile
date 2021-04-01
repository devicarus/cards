FROM node:lts AS development

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]

FROM development AS builder

RUN yarn run build

FROM nginx:1.13-alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
