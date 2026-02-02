import { JsonController, Get, Post, Param, Body } from "routing-controllers";
import { orders } from "../data/orders";
import { Order } from "../models/Order";

@JsonController("/orders")
export class OrderController {
  @Get("/")
  getAll() {
    return { status: "success", data: orders };
  }

  @Get("/:id")
  getOne(@Param("id") id: string) {
    const order = orders.find(o => o.id === id);
    if (!order) {
      return { status: "error", error: "Order not found" };
    }
    return { status: "success", data: order };
  }

  @Post("/")
  create(@Body() orderData: Omit<Order, "id">) {
    const newOrder: Order = {
      ...orderData,
      id: (orders.length + 1).toString(),
    };

    orders.push(newOrder);

    return { status: "success", data: newOrder };
  }
}
