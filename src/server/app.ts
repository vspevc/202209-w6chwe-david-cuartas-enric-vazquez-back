import express from "express";
import morgan from "morgan";
import getRobots from "./controllers/robotsControllers.js";
import handleNotFound from "./middleware/handleNotFound/handleNotFound.js";
import routes from "./routes.js";

const { getRobotsRoute } = routes;
const app = express();
app.disable("x-powered-by");

app.use(morgan("dev"));

app.get(getRobotsRoute, getRobots);

app.use(handleNotFound);

export default app;
