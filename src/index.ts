import "./loadEnvionment.js";
import express from "express";
import debugBuilder from "debug";
import chalk from "chalk";
import morgan from "morgan";
import mongoose from "mongoose";

const debug = debugBuilder("robots:server");
const app = express();
app.disable("x-powered-by");
const port = process.env.PORT;

await mongoose.connect(process.env.MONGO_URL);

app.use(morgan("dev"));

app.use((req, res) => {
  res.status(404).json({ error: "endpoint not found" });
});

app.listen(port, () => {
  debug(`server starter at: ${chalk.blueBright("localhost:", port)}`);
});
