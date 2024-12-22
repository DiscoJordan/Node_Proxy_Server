import { Request, Response } from "express";
import * as Sentry from "@sentry/node";
interface HttpError extends Error {
  statusCode: number;
}

export default function errorHandler(
  err: HttpError,
  req: Request,
  res: Response,
) {
  const status = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  Sentry.captureException(err);
  res.status(status).json({ error: message });
}
