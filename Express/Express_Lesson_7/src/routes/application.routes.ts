import { Router } from "express";
import { applicationValidation } from "../validators/application.validator";
import { submitApplication } from "../controllers/application.controller";

const router = Router();

router.post("/apply", applicationValidation, submitApplication);

export default router;
