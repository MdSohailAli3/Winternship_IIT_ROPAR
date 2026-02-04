import { Router } from "express";
import { doctorSignoffCheck } from "../middleware/doctorSignoff.middleware";
import { pharmacyReview } from "../middleware/pharmacyReview.middleware";
import { followupCheck } from "../middleware/followupCheck.middleware";
import { insuranceCheck } from "../middleware/insuranceCheck.middleware";

const router = Router();

router.post(
    "/discharge",
    doctorSignoffCheck,
    pharmacyReview,
    insuranceCheck,
    followupCheck,
    (req, res) => {
        req.dischargeLog?.push({
            step: "dischargeComplete",
            time: new Date().toISOString(),
        });

        res.json({
            status: "Discharge complete",
            patient: req.body.patientName,
            log: req.dischargeLog,
        });
    }
);

export default router;
