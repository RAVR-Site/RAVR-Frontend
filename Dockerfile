FROM node:22.14.0

WORKDIR /app
 
COPY . .

RUN npm install
RUN npm run build

EXPOSE 5173

ENTRYPOINT [ "npm", "run", "dev" ]