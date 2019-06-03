# use fixed version (probably LTS)
FROM node:alpine

WORKDIR /app

# use npm or yarn lock
COPY ./package.json ./package-lock.json ./
RUN npm install

# keep as close as possible to the bottom to get
# as much as possible from intermediate images
COPY . .

# you probably should use pm2
CMD ["node", "app.js"]
