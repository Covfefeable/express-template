import express from "express";
import session from "express-session";
import routes from "./routes/index";
import logger from "./utils/logger";
import helmet from "helmet";
import cors from "cors";
import { env } from "./utils/env";
import { commonError } from "./utils/response";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (env.isProd) {
  app.set("trust proxy", 1);
}

const corsOptions =
  env.CORS_ORIGIN === "*"
    ? { origin: "*", credentials: false }
    : { origin: env.CORS_ORIGIN, credentials: true };
app.use(cors(corsOptions));
app.use(helmet());

app.use(
  (req, res, next) => {
    const start = Date.now();
    res.on("finish", () => {
      logger.info({
        method: req.method,
        url: req.originalUrl,
        status: res.statusCode,
        duration: Date.now() - start,
      });
    });
    next();
  }
);

app.use(
  session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: env.isProd, httpOnly: true, sameSite: "lax" },
  })
);

routes(app);

app.use((req, res) => {
  res.status(404).send(commonError(404, "Not Found"));
});

app.use((err: unknown, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const status = (err as any)?.status || 500;
  const message = err instanceof Error ? err.message : "Internal Server Error";
  res.status(status).send(commonError(status, message));
});

const server = app.listen(env.PORT, () => {
  logger.info(`App is running at http://localhost:${env.PORT}`);
});
