# Express-Template

一个基于 Express + TypeScript 的服务端项目模板，集成了常用的中间件和工具，帮助你快速搭建安全、可靠的 Node.js 服务。

## 特性

- 🚀 基于 TypeScript，提供完整的类型支持
- 🛡️ 内置安全防护（Helmet 中间件）
- 🔒 CORS 跨域配置
- 📝 使用 Pino 进行日志记录
- ⚙️ 基于 dotenv 和 envalid 的环境变量管理
- 🔄 开发环境支持热重载
- 🎯 Session 支持

## 项目结构

```
src/
  ├── app.ts              # 应用入口
  ├── controler/          # 控制器层
  ├── modal/              # 数据模型
  ├── routes/             # 路由配置
  ├── service/            # 业务逻辑
  ├── types/              # 类型定义
  └── utils/              # 工具函数
```

## 环境变量配置

在项目根目录创建 `.env` 文件，支持以下配置项：

```bash
NODE_ENV=development     # 运行环境：development/production
HOST=localhost          # 服务主机地址
PORT=1337               # 服务端口
CORS_ORIGIN=http://localhost:1337  # CORS 配置
SESSION_SECRET=your-secret         # Session 密钥

DB_HOST=127.0.0.1       # 数据库主机地址
DB_PORT=3306            # 数据库端口
DB_USER=your-mariadb-user         # 数据库用户名
DB_PASSWORD=your-mariadb-password  # 数据库密码
```

## 本地开发

```bash
# 安装 pnpm（如未安装）
npm i -g pnpm

# 安装依赖
pnpm i

# 启动开发服务器
pnpm dev

# 测试服务是否正常运行
curl http://127.0.0.1:1337/api/alive
```

## 部署

```bash
# 安装 pm2（如未安装）
npm i -g pm2

# 构建生产版本
pnpm build

# 启动服务
pm2 start ./build/app.js
```

## 技术栈

- Express - Web 框架
- TypeScript - 类型支持
- Helmet - 安全中间件
- CORS - 跨域支持
- Pino - 日志系统
- dotenv & envalid - 环境变量管理
- express-session - 会话管理
- mariadb - 数据库