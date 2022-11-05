import "./loadEnvionment.js";
import express from "express";
import debugBuilder from "debug";
import chalk from "chalk";

const debug = debugBuilder("robots:server");
const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  debug(`server starter at: ${chalk.blueBright(`localhost:${port}`)}`);
});
