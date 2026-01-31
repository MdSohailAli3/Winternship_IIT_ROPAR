interface PaymentGateway {
  processPayment(amount: number): Promise<boolean>;
}

class PaymentProcessor {
  constructor(private gateway: PaymentGateway) {}
  async pay(amount: number): Promise<void> {
    const success = await this.gateway.processPayment(amount);
    if (success) {
      console.log(`Payment successful of $${amount}`);
    } else {
      console.log(`Payment failed!\tunable to transfer $${amount}`);
    }
  }
}

class BankTransferGateway implements PaymentGateway{
    async processPayment(amount: number): Promise<boolean> {
        console.log(`Processing payment of $${amount} via bank transfer.`)
        return true;
    }
}

const bankPayment = new BankTransferGateway();
const process = new PaymentProcessor(bankPayment);
process.pay(100);


class MockGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Mock processing payment of $${amount}.`);
    return false;
  }
}

const mockGateway = new MockGateway();
const testProcessor = new PaymentProcessor(mockGateway);
testProcessor.pay(50); // Uses mock gateway for testing a failed payment