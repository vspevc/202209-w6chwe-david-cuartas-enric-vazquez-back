import type { Response } from "express";
import Robot from "../../database/models/Robot.js";
import mocksRobots from "../../mocks/mocksRobots.js";
import { getRobots } from "./robotsControllers.js";

const res: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

describe("Given a getRobots controllers", () => {
  describe("When it receives a response return list of robots", () => {
    test("Then it should  call its method status with 200", async () => {
      const expectedStatus = 200;

      Robot.find = jest.fn();

      await getRobots(null, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call its method json with", async () => {
      Robot.find = jest.fn().mockReturnValue(mocksRobots);

      await getRobots(null, res as Response);

      expect(res.json).toHaveBeenCalledWith(mocksRobots);
    });
  });
});
