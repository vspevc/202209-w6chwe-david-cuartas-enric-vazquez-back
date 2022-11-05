import "../loadEnvionment.js";
import chalk from "chalk";
import debugBuilder from "debug";
import app from "./app.js";

const port = process.env.PORT;
const debug = debugBuilder("robots:server");

const serverStart = () =>
  app.listen(port, () => {
    debug(`server starter at: ${chalk.blueBright("localhost:", port)}`);
  });

export default serverStart;
