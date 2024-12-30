import { Request, Response } from "express";

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
  res.status(status).json({ error: message });
}
