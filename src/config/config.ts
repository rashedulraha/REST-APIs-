import { config as conf } from "dotenv";

conf();

const _config = {
  port: process.env.PORT,
  dataBaseUrl: process.env.MONGO_CONNECTION_STRING,
};

export default Object.freeze(_config);
