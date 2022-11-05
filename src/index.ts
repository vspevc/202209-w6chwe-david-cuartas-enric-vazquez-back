import "./loadEnvionment.js";
import express from "express";
import debugBuilder from "debug";
import chalk from "chalk";
import morgan from "morgan";

const debug = debugBuilder("robots:server");
const app = express();
const port = process.env.PORT;

app.use(morgan("dev"));

app.use((req, res) => {
  res.status(404).json({ error: "endpoint not found" });
});

app.listen(port, () => {
  debug(`server starter at: ${chalk.blueBright(`localhost:${port}`)}`);
});
