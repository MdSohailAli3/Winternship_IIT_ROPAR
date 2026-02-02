import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { OrderController } from "./controllers/OrderController";
import { BakingController } from "./controllers/BakingController";

const app = createExpressServer({
  controllers: [OrderController, BakingController],
  validation: true,
});

app.listen(3000, () => {
  console.log("Bakery server running on http://localhost:3000");
});
