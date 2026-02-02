import express from "express";
import loyaltyRoutes from "./routes/loyalty.routes";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

app.use(express.json());

app.use("/api/loyalty", loyaltyRoutes);

app.use(errorHandler);

export default app;
