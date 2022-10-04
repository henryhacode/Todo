FROM node:lts AS development

WORKDIR /backend

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

ENV PORT=8080
EXPOSE 8080
CMD [ "node", "app.js" ]