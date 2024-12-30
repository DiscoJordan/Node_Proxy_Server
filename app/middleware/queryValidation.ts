import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

type RequestType = "query" | "body";
export default function queryValidation(schema: Schema, type: RequestType) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req[type]);

    if (validation.error) {
      res
        .status(400)
        .send(validation.error.details.map((error) => error.message));
    } else {
      next();
    }
  };
}
