# 构建阶段
FROM node:20-bookworm AS builder

WORKDIR /app

# 只复制依赖文件
COPY package.json pnpm-lock.yaml ./

ENV CI=true
ENV prod=true

RUN npm install -g pnpm
RUN pnpm install

# 复制源码并构建
COPY src/ ./src/
COPY tsconfig.json ./
COPY .env ./

RUN pnpm build

# 生产阶段
FROM node:20-bookworm AS production

WORKDIR /app

# 只复制构建产物和必要文件
COPY --from=builder /app/build ./
COPY --from=builder /app/node_modules ./node_modules

RUN npm install -g pm2

EXPOSE 1337

CMD ["pm2-runtime", "start", "./app.js", "--name", "express-server"]