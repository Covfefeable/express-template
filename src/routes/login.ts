import { Router } from "express";
import { RouterConf } from ".";
import { userController } from "../controler/user";

export const userRoutes: Array<RouterConf> = [
  {
    path: "/api",
    router: Router().post("/login", userController.login),
  },
  {
    path: "/api",
    router: Router().get("/logout", userController.logout),
  },
];
