import { config as conf } from "dotenv";

conf();

const _config = {
  port: process.env.PORT,
};

export default Object.freeze(_config);
