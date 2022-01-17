FROM node:14-alpine

RUN mkdir app

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . ./

EXPOSE 3000:3000

CMD ["yarn", "start"]