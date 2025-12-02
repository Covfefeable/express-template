import { Router } from "express";
import { RouterConf } from ".";
import { userController } from "../controller/user";
import { requireLogin } from "./middleware/require-login";
import { validate } from "./middleware/validate";
import { LoginSchema } from "../model/user";
import { asyncHandler } from "../utils/async-handler";

export const userRoutes: Array<RouterConf> = [
  {
    path: "/api",
    router: Router().post("/login", validate(LoginSchema), asyncHandler(userController.login)),
  },
  {
    path: "/api",
    // 添加登录验证中间件
    router: Router().get("/logout", requireLogin, asyncHandler(userController.logout)),
  },
];
