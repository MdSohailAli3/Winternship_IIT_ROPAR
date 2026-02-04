import { Service, Inject } from "typedi";
import { NOTIFICATION_SERVICE, BILLING_SERVICE } from "../tokens";
import { NotificationService } from "../notifications/NotificationService";
import { BillingService } from "../billing/BillingService";

@Service()
export class AppointmentService {
  constructor(
    @Inject(NOTIFICATION_SERVICE)
    private notifier: NotificationService,

    @Inject(BILLING_SERVICE)
    private billing: BillingService
  ) {}

  async bookAppointment(
    patient: string,
    time: string,
    amount: number
  ) {
    await this.billing.charge(patient, amount);
    await this.notifier.send(
      patient,
      `Your appointment is booked for ${time}`
    );

    return { status: "confirmed" };
  }
}
