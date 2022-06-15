FROM node:alpine
WORKDIR /backend
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
COPY .env .env
RUN yarn build
ENV NODE_ENV production
EXPOSE 5000
CMD [ "yarn", "start" ]
