import { WebhookService } from "@/core/services/WebhookService";
import { WebhookFactory } from "@/app/factories/WebhookFactory";

export class Intopays {
  public webhooks: WebhookService;

  public constructor(config: IntopaysConstructor) {
    this.webhooks = WebhookFactory.createWebhookService(config);
  }
}

export type IntopaysConstructor = {
  token: string
  mode?: "production" | "development"
};

export default Intopays;
