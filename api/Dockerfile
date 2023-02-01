FROM node:alpine
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
ENV MONGO_URL = mongodb+srv://team6:1234@ecommerce.cquauiy.mongodb.net/test
ENV PASS_SECRET = qwerty
ENV JWT_SECRET = qwerty
ENV STRIPE_KEY=sk_test_51MUCW0EjN5G5xCDtt06Wd2feH8bXNVBF8JW8iASUvteoFuJauo2pFykLBFaOPCnjzbbN0RZukv2VZb6VQYrMRP1C00fgw3sK6B
EXPOSE 5000
CMD ["node", "index.js"]