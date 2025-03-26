import express from "express";
import session from "express-session";
import routes from "./routes/index"; // 路由
import logger from "./utils/logger";
import helmet from "helmet";
import cors from "cors";
import { env } from "./utils/env";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(helmet());
app.use(
  session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: env.isProd ? true : false },
  })
);

// 启动
app.listen(env.PORT, async () => {
  logger.info(`App is running at http://localhost:${env.PORT}`);
  routes(app);
});
