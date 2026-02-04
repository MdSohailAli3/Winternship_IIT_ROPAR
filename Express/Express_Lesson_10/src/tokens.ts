import { Token } from "typedi";
import { NotificationService } from "./notifications/NotificationService";
import { BillingService } from "./billing/BillingService";

export const NOTIFICATION_SERVICE = new Token<NotificationService>(
  "NotificationService"
);

export const BILLING_SERVICE = new Token<BillingService>(
  "BillingService"
);
