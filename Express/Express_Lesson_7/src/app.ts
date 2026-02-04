import express from "express";
import applicationRoutes from "./routes/application.routes";

const app = express();

app.use(express.json());

app.use("/applications", applicationRoutes);

export default app;
