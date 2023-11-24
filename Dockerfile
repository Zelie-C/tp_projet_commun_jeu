FROM node:20-alpine
WORKDIR /tp_projet_commun_jeu
RUN npm i -g serve
COPY package.json .
RUN npm install
EXPOSE 3000
COPY . .
RUN npm run build
CMD serve dist -p 3000