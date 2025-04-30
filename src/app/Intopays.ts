import { WebhookService } from "@/core/services/WebhookService";
import { WebhookFactory } from "@/app/factories/WebhookFactory";
import { PixService } from "@/core/services/PixService";
import { PixFactory } from "./factories/PixFactory";

export class Intopays {
  public webhook: WebhookService;
  public pix: PixService;

  public constructor(config: IntopaysConstructor) {
    this.webhook = WebhookFactory.createWebhookService(config);
    this.pix = PixFactory.createPixService(config);
  }
}

export type IntopaysConstructor = {
  token: string
  mode?: "production" | "development"
};

export * from "@/core/enums/IntegrationEnum";
export * from "@/core/enums/PixTransactionStatus";

export default Intopays;
