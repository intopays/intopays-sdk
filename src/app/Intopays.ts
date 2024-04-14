import { WebhookService } from "@/core/services/WebhookService";

export class Intopays {
  public webhooks: WebhookService;

  public constructor() {
    this.webhooks = new WebhookService();
  }
}

export default Intopays;
