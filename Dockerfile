FROM node:22-alpine

WORKDIR /app

COPY . .

ENV CI=true

ENV prod=true

RUN npm install -g pnpm pm2

RUN pnpm install && pnpm build

EXPOSE 1337

CMD ["pm2-runtime", "start", "./build/app.js", "--name", "express-server"]