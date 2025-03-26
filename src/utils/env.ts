import dotenv from "dotenv";
import { cleanEnv, host, port, str } from "envalid";

dotenv.config();

export const env = cleanEnv(process.env, {
	NODE_ENV: str({ devDefault: "development", choices: ["development", "production"] }),
	PORT: port({ devDefault: 1337 }),
	CORS_ORIGIN: str({ devDefault: "*" }),
    SESSION_SECRET: str({ devDefault: Math.random().toString() }),

    // 数据库
	DB_HOST: host({ devDefault: "127.0.0.1" }),
	DB_PORT: port({ devDefault: 3306 }),
	DB_USER: str(),
	DB_PASSWORD: str(),
	DB_NAME: str(),
});