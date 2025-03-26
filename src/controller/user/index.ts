import { RequestHandler, Request, Response } from "express";
import { userService } from "../../service/user";
import { commonError, commonRes } from "../../utils/response";
import { LoginSchema } from "../../model/user";

class UserController {
  public login: RequestHandler = async (req: Request, res: Response) => {
    try {
      LoginSchema.parse(req.body);
      // 或者使用以下方式进行类型检查
      // const validatedData = LoginSchema.parse(req.body);
      // const { username, password } = validatedData;
    } catch (error) {
      res.status(200).send(commonError(400, error as string));
      return;
    }
    const serviceResponse = await userService.login(req);
    res.status(200).send(commonRes(serviceResponse));
  };

  public logout: RequestHandler = async (req: Request, res: Response) => {
    const serviceResponse = await userService.logout(req);
    res.status(200).send(commonRes(serviceResponse));
  };
}

export const userController = new UserController();
