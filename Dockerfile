FROM node:19 as builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

FROM node:19-slim

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 5174

CMD ["npm", "run", "dev"]
