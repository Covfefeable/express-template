import { RequestHandler, Request, Response } from "express";
import { userService } from "../../service/user";
import { commonRes } from "../../utils/response";

class UserController {
  public login: RequestHandler = async (req: Request, res: Response) => {
    const serviceResponse = await userService.login(req);
    res.status(200).send(commonRes(serviceResponse));
  };

  public logout: RequestHandler = async (req: Request, res: Response) => {
    const serviceResponse = await userService.logout(req);
    res.status(200).send(commonRes(serviceResponse));
  };
}

export const userController = new UserController();
