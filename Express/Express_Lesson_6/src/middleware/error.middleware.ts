import { Request, Response, NextFunction } from "express";

export function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error("Discharge Log:", req.dischargeLog);
    res.status(500).json({
        error: err.message || "Internal server error",
    });
}
