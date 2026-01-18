import app from "./src/app.js";
import config from "./src/config/config.js";
import connectDb from "./src/config/db.js";

const startServer = async () => {
  // connect database
  await connectDb();

  const port = config.port || 5000;

  app.listen(port, () => {
    console.log(`Listening in port :${port}`);
  });
};

startServer();
