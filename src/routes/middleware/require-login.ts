import { NextFunction, Request, Response } from "express";
import { commonError } from "../../utils/response";

export const requireLogin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.session.userId) {
    next();
  } else {
    res.status(401).send(commonError(401, "未登录"));
  }
};
