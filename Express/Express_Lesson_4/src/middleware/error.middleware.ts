import { Request, Response, NextFunction } from "express";
import { ApiError } from "../errors/ApiError";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      status: "error",
      error: err.message,
      details: err.details,
    });
  }

  console.error(err);

  res.status(500).json({
    status: "error",
    error: "Internal server error",
  });
}
