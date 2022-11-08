import express from "express";
import { getRobots, deleteRobot } from "../controllers/robotsControllers.js";

// eslint-disable-next-line new-cap
const robotRouter = express.Router();

robotRouter.get("/", getRobots);

robotRouter.delete("/delete/:robotId", deleteRobot);

export default robotRouter;
