FROM node:alpine 
WORKDIR /app
COPY package*.json .
RUN npm config set legacy-peer-deps true
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "start"]