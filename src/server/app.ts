import express from "express";
import morgan from "morgan";
import cors from "cors";
import handleNotFound from "./middleware/handleNotFound/handleNotFound.js";
import routes from "./routers/routes.js";
import robotRouter from "./routers/robotsRouter.js";
import getUser from "./controllers/userControllers.js";

const { getRobotsRoute } = routes;
const app = express();
app.disable("x-powered-by");

app.use(cors());
app.use(morgan("dev"));

app.get("/login", getUser);
app.use(getRobotsRoute, robotRouter);

app.use(handleNotFound);

export default app;
