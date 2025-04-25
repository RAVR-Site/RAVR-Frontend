FROM node:22.14.0

WORKDIR /app
 
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

ENTRYPOINT [ "yarn", "run", "dev" ]