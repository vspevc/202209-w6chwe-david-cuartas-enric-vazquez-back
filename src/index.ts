import "./loadEnvionment.js";
import express from "express";

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server starter at: localhost:${port}`);
});
