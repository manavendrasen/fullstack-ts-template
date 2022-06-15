FROM node:alpine as builder
WORKDIR /backend

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .
RUN yarn build

FROM node
WORKDIR /backend
COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /backend/dist ./dist

EXPOSE 5000
CMD node dist/src/index.js