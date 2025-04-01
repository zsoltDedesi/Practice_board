# Build
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve
FROM node:20
RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/dist .
ENV PORT=3000
CMD ["serve", "-l", "3000", "."]
