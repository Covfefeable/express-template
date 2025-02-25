import { Session, SessionData } from "express-session";

export const login = async (
  session: Session & Partial<SessionData>
): Promise<{ userId: string }> => {
  if (!session.userId) {
    // here to insert user login logic
    // for example, query user from database
    // if user exists, then set session
    return await new Promise((resolve, reject) => {
      session.regenerate((err) => {
        if (err) {
          reject(err);
        } else {
          session.userId = `user_${Date.now()}`;
          resolve({
            userId: session.userId,
          });
        }
      });
    });
  } else {
    return {
      userId: session.userId,
    };
  }
};

export const logout = async (
  session: Session & Partial<SessionData>
): Promise<{ logout: boolean }> => {
  if (session.userId) {
    return await new Promise((resolve, reject) => {
      session.destroy((err) => {
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
      logout: false,
    };
  }
};
