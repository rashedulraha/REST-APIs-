import { config as conf } from "dotenv";

conf();

const _config = {
  port: process.env.PORT,
  dataBaseUrl: process.env.MONGO_CONNECTION_STRING,
  env: process.env.NODE_ENV,
  jwtSecret: process.env.JWT_SECRET,
};

export default Object.freeze(_config);
