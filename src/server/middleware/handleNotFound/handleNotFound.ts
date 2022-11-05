import type { Request, Response } from "express";

const handleNotFound = (req: Request, res: Response) => {
  res.status(404).json({ error: "endpoint not found" });
};

export default handleNotFound;
