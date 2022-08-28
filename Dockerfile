FROM node:16.13-alpine3.15

WORKDIR /usr/app/template

ENV TZ=America/Los_Angeles
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY package.json .

RUN yarn install

COPY . .

ENV NODE_ENV=production

RUN yarn build

CMD ["yarn", "start"]