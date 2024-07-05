import express from "express";
import session from "express-session";
import routes from "./routes/index"; // 路由
import logger from "./utils/logger";
import { ServerPort } from "./utils/const";

const app = express();
app.use(express.json());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// 启动
app.listen(ServerPort, async () => {
  logger.info(`App is running at http://localhost:${ServerPort}`);
  routes(app);
});
