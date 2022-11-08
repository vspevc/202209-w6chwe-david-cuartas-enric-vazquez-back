import "../../loadEnvionment.js";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";

const getUser = async (req: Request, res: Response) => {
  const token = jwt.sign({}, process.env.SECRET_TOKEN);

  res.status(200).json({ token });
};

export default getUser;
