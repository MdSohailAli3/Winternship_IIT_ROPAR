import { Request, Response } from "express";
import { validationResult } from "express-validator";

export const submitApplication = (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: "validation_failed",
            errors: errors.array(),
        });
    }

    // Business logic would go here (DB save, email, etc.)

    return res.status(200).json({
        status: "success",
        message: "Application received and validated successfully",
    });
};
