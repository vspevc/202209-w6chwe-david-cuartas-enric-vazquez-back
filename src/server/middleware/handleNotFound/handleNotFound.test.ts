import type { Response } from "express";
import handleNotFound from "./handleNotFound";

describe("´Given a middleware handeleNotFOund", () => {
  describe("When it is invoked", () => {
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call the received response status with 404", () => {
      const expectedStatus = 404;

      handleNotFound(null, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the received respnse json with { error: 'endpoint not found' }", () => {
      const expectedJson = { error: "endpoint not found" };

      handleNotFound(null, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedJson);
    });
  });
});
