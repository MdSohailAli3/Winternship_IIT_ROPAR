type CustomerID = string;

type Customer={
    id : CustomerID;
    name: string;
    email?: string;
}


type OrderStatus = "pending" | "shipped" | "returned";

type ProcessOrder = (
  orderId: number,
  callback: (status: OrderStatus) => void
) => void;


const processOrder: ProcessOrder = (orderId, callback) => {
  console.log(`Processing order #${orderId}`);
  callback("pending");
};


type Container<T> = {
  value: T;
};

const customer: Customer = {
  id: "CUST-101",
  name: "Alice",
  email: "alice@example.com"
};

const customerContainer: Container<Customer> = {
  value: customer
};


processOrder(501, status => {
  console.log(`Order status: ${status}`);
});

console.log(customerContainer);