import mariadb from "mariadb";
import { env } from "./env";

const createMariaDBConnection = () => {
  const conn = mariadb.createConnection({
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    connectTimeout: 5000
  });
  return conn;
};

export { createMariaDBConnection };
