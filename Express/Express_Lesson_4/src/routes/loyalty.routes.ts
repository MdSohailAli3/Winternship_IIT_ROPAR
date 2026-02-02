import { Router, Request, Response } from "express";
import { validate } from "../middleware/validate";
import { TransferSchema, TransferRequest } from "../schemas/transfer.schema";
import { ApiResponse } from "../types/api.types";
import { ApiError } from "../errors/ApiError";
import { InsufficientPointsError } from "../errors/InsufficientPointsError";
import { db } from "../db/mock.db";

const router = Router();

/**
 * POST /transfer
 * Transfer loyalty points between two customers
 */
router.post(
  "/transfer",
  validate(TransferSchema),
  async (
    req: Request<{}, {}, TransferRequest>,
    res: Response<ApiResponse>
  ) => {
    const { fromCustomerId, toCustomerId, points } = req.body;

    if (fromCustomerId === toCustomerId) {
      throw new ApiError(400, "Cannot transfer points to the same account");
    }

    const sender = await db.findMember(fromCustomerId);
    const receiver = await db.findMember(toCustomerId);

    if (!sender) {
      throw new ApiError(404, "Sender not found");
    }

    if (!receiver) {
      throw new ApiError(404, "Receiver not found");
    }

    if (sender.points < points) {
      throw new InsufficientPointsError();
    }

    // Atomic-style operation (simplified)
    await db.updatePoints(fromCustomerId, -points);
    await db.updatePoints(toCustomerId, points);

    res.status(200).json({
      status: "success",
      data: {
        fromCustomerId,
        toCustomerId,
        transferredPoints: points,
        remainingPoints: sender.points - points,
      },
    });
  }
);

export default router;
