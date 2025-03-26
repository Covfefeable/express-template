import dotenv from "dotenv";
import { cleanEnv, port, str } from "envalid";

dotenv.config();

export const env = cleanEnv(process.env, {
	NODE_ENV: str({ devDefault: "development", choices: ["development", "production"] }),
	PORT: port({ devDefault: 1337 }),
	CORS_ORIGIN: str({ devDefault: "*" }),
    SESSION_SECRET: str({ devDefault: Math.random().toString() }),
});