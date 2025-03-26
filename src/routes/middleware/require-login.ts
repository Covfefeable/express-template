import { NextFunction, Request, Response } from "express";
import { commonError } from "../../utils/response";

export const requireLogin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // 通过检查用户的会话信息判断用户是否已登录，可以根据实际需求进行修改
  if (req.session.userId) {
    next();
  } else {
    // 用户未登录，重定向到登录页面或返回错误信息
    res.status(200).send(commonError(-100, "未登录"));
  }
};
