FROM node:12.18.3
WORKDIR /usr/src/chatmanager
COPY backend/package*.json ./
COPY Project-chatmanagerlibrary ../Project-chatmanagerlibrary
RUN npm install
COPY backend/. ./
EXPOSE 3030
CMD [ "npm", "start" ]
