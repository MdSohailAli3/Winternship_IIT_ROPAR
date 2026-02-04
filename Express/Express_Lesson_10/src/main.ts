import "reflect-metadata";
import { Container } from "typedi";

import { AppointmentService } from "./appointments/AppointmentService";
import { NOTIFICATION_SERVICE, BILLING_SERVICE } from "./tokens";
import { SMSService } from "./notifications/SMSService";
import { StripeBillingService } from "./billing/StripeBillingService";

Container.set(NOTIFICATION_SERVICE, new SMSService());
Container.set(BILLING_SERVICE, new StripeBillingService());

const service = Container.get(AppointmentService);

service.bookAppointment("alice@example.com", "Monday 10 AM", 500);
