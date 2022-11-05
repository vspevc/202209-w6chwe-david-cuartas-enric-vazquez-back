import express from "express";
import morgan from "morgan";

const app = express();
app.disable("x-powered-by");

app.use(morgan("dev"));

app.use((req, res) => {
  res.status(404).json({ error: "endpoint not found" });
});

export default app;
