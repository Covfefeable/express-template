import { Request, Response, Router } from "express";
import { RouterConf } from ".";
import { commonRes } from "../utils/response";
import { login, logout } from "../implements/login";

export const loginRoutes: Array<RouterConf> = [
  {
    path: "/api",
    router: Router().get("/login", async (req: Request, res: Response) => {
      const result = await login(req.session);
      res.status(200).send(commonRes(result));
    }),
  },
  {
    path: "/api",
    router: Router().get("/logout", async (req: Request, res: Response) => {
      const result = await logout(req.session);
      res.status(200).send(commonRes(result));
    }),
  },
];
