import { WebhookService } from "@/core/services/WebhookService";
import { WebhookFactory } from "@/app/factories/WebhookFactory";
import { PixService } from "@/core/services/PixService";
import { PixFactory } from "./factories/PixFactory";

export class Intopays {
  public webhooks: WebhookService;
  public pixs: PixService;

  public constructor(config: IntopaysConstructor) {
    this.webhooks = WebhookFactory.createWebhookService(config);
    this.pixs = PixFactory.createPixService(config);
  }
}

export type IntopaysConstructor = {
  token: string
  mode?: "production" | "development"
};

export default Intopays;
