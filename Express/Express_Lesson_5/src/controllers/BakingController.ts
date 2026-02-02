import { JsonController, Post, Get, Param, Body } from "routing-controllers";
import { orders } from "../data/orders";

type BakingStatus = "pending" | "baking" | "completed";

const bakingStatusMap: Record<string, BakingStatus> = {};

@JsonController("/baking")
export class BakingController {

  // POST /baking/start
  @Post("/start")
  startBaking(@Body() body: { orderId: string }) {
    const { orderId } = body;

    const orderExists = orders.some(o => o.id === orderId);
    if (!orderExists) {
      return { status: "error", error: "Order not found" };
    }

    bakingStatusMap[orderId] = "baking";

    return {
      status: "success",
      message: `Baking started for order ${orderId}`,
    };
  }

  // GET /baking/status/:id
  @Get("/status/:id")
  getBakingStatus(@Param("id") id: string) {
    const status = bakingStatusMap[id];

    if (!status) {
      return { status: "error", error: "Baking not started for this order" };
    }

    return {
      status: "success",
      data: {
        orderId: id,
        bakingStatus: status,
      },
    };
  }
}
