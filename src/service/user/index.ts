import { Request } from "express";

class UserService {
  async login(req: Request): Promise<{ userId: string }> {
    if (!req.session.userId) {
      // here to insert user login logic
      // for example, query user from database
      // if user exists, then set session
      return await new Promise((resolve, reject) => {
        req.session.regenerate((err) => {
          if (err) {
            reject(err);
          } else {
            req.session.userId = `user_${req.body.username}`;
            req.session.save(() => {
              resolve({
                userId: req.session.userId || "",
              });
            });
          }
        });
      });
    } else {
      return {
        userId: req.session.userId,
      };
    }
  }

  async logout(req: Request): Promise<{ logout: boolean }> {
    if (req.session.userId) {
      return await new Promise((resolve, reject) => {
        req.session.destroy((err) => {
          if (err) {
            reject(err);
          } else {
            resolve({
              logout: true,
            });
          }
        });
      });
    } else {
      return {
        logout: true,
      };
    }
  }
}

export const userService = new UserService();
