FROM node:22.14.0

WORKDIR /app
 
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 5173

ENTRYPOINT [ "yarn", "run", "dev", "--host", "0.0.0.0"]
