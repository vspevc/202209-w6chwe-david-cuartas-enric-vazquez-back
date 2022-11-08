import type { Request, Response } from "express";
import Robot from "../../database/models/Robot.js";

export const getRobots = async (req: Request, res: Response) => {
  const robots = await Robot.find();

  res.status(200).json(robots);
};

export const deleteRobot = async (req: Request, res: Response) => {
  const { robotId } = req.params;

  await Robot.findByIdAndDelete(robotId);

  res.status(204).send();
};
