import { Router } from "express";
import { RouterConf } from ".";
import { userController } from "../controller/user";
import { requireLogin } from "./middleware/require-login";

export const userRoutes: Array<RouterConf> = [
  {
    path: "/api",
    router: Router().post("/login", userController.login),
  },
  {
    path: "/api",
    // 添加登录验证中间件
    router: Router().get("/logout", requireLogin, userController.logout),
  },
];
