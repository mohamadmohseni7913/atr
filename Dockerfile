FROM m.docker-registry.ir/node:16-alpine
RUN mkdir -p /src/
WORKDIR  /src
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]