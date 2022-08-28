FROM node:16.13-alpine3.15

WORKDIR /usr/app/template

ENV NODE_ENV=production

ENV TZ=America/Los_Angeles
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "start"]