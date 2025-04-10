import { Express, Request, Response, Router } from "express";
import { commonRes } from "../utils/response";
import { userRoutes } from "./user";

export interface RouterConf {
  path: string;
  router: Router;
  meta?: unknown;
}

// 路由配置
const routerConf: Array<RouterConf> = [
  {
    path: "/api",
    router: Router().get("/probe", async (req: Request, res: Response) => {
      const result = {
        status: "alive",
      };
      res.status(200).send(commonRes(result));
    }),
  },
  ...userRoutes
];

function routes(app: Express) {
  // 根目录
  app.get("/", (req: Request, res: Response) =>
    res.status(200).send("express server is running...")
  );

  routerConf.forEach((conf) => app.use(conf.path, conf.router));
}

export default routes;
