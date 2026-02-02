import { ApiError } from "./ApiError";

export class InsufficientPointsError extends ApiError {
  constructor() {
    super(400, "Insufficient points");
  }
}
