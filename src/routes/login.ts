import { Request, Response, Router } from "express";
import { RouterConf } from ".";
import { commonRes } from "../utils/response";

export const loginRoutes: Array<RouterConf> = [
  {
    path: "/api",
    router: Router().get("/login", async (req: Request, res: Response) => {
      if (!req.session.userId) {
        // here to insert user login logic
        // for example, query user from database
        // if user exists, then set session
        req.session.regenerate((err) => {
          req.session.userId = `user_${Date.now()}`;
          res.status(200).send(
            commonRes({
              userId: req.session.userId,
            })
          );
        });
      } else {
        res.status(200).send(
          commonRes({
            userId: req.session.userId,
          })
        );
      }
    }),
  },
  {
    path: "/api",
    router: Router().get("/logout", async (req: Request, res: Response) => {
      if (req.session.userId) {
        req.session.destroy((err) => {
          res.status(200).send(commonRes("logout success"));
        });
      } else {
        res.status(200).send(commonRes("not login yet"));
      }
    }),
  },
];
