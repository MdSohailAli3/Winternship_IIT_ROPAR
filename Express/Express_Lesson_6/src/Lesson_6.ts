import "./types/express";
import express from "express";
import dischargeRoutes from "./routes/discharge.routes";
import { logDischargeRequest } from "./middleware/logDischargeRequest";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

app.use(express.json());
app.use(logDischargeRequest);

app.use("/", dischargeRoutes);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("CityCare Hospital system running on port 3000");
});
