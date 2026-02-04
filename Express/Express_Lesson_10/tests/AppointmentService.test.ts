import "reflect-metadata";
import { Container } from "typedi";

import { AppointmentService } from "../src/appointments/AppointmentService";
import { NOTIFICATION_SERVICE, BILLING_SERVICE } from "../src/tokens";
import { NotificationService } from "../src/notifications/NotificationService";
import { BillingService } from "../src/billing/BillingService";

class MockNotificationService implements NotificationService {
  messages: string[] = [];

  async send(to: string, message: string) {
    this.messages.push(`${to}: ${message}`);
  }
}

class MockBillingService implements BillingService {
  charges: string[] = [];

  async charge(patient: string, amount: number) {
    this.charges.push(`${patient}: ₹${amount}`);
  }
}

describe("AppointmentService", () => {
  afterEach(() => {
    Container.reset();
  });

  it("charges patient and sends notification", async () => {
    const notifier = new MockNotificationService();
    const billing = new MockBillingService();

    Container.set(NOTIFICATION_SERVICE, notifier);
    Container.set(BILLING_SERVICE, billing);

    const service = Container.get(AppointmentService);

    await service.bookAppointment(
      "bob@example.com",
      "Tuesday 2 PM",
      750
    );

    expect(billing.charges).toContain("bob@example.com: ₹750");
    expect(notifier.messages.length).toBe(1);
  });
});
