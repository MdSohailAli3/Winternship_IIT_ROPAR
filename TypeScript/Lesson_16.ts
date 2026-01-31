// Observer
interface Observer {
  update(message: string): void;
}

// Existing 
class Customer implements Observer {
  update(message: string) {
    console.log("Customer notified:", message);
  }
}

class Inventory implements Observer {
  update(message: string) {
    console.log("Inventory updated:", message);
  }
}

//Promotion System
class PromotionSystem implements Observer {
  update(message: string) {
    console.log(
      "Promotion Alert: Get 10% off on your next drink!"
    );
  }
}

// drinkorder 
class DrinkOrder {
  private observers: Observer[] = [];

  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  notifyAll(message: string) {
    this.observers.forEach(obs => obs.update(message));
  }

  completeOrder() {
    this.notifyAll("Drink is ready");
  }
}

//testing
const order = new DrinkOrder();

order.addObserver(new Customer());
order.addObserver(new Inventory());
order.addObserver(new PromotionSystem());

order.completeOrder();
