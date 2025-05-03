import { PixFactory } from "@/app/factories/PixFactory";
import { WebhookFactory } from "@/app/factories/WebhookFactory";
import { WebhookService } from "@/core/services/WebhookService";
import { PixService } from "@/core/services/PixService";

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

// enums
export * from "@/core/enums/IntegrationEnum";
export * from "@/core/enums/PixTransactionStatus";
export * from "@/core/enums/FineTypeEnum";
export * from "@/core/enums/StateEnum";
export * from "@/core/enums/InterestEnum";
export * from "@/core/enums/PaymentStatus";

// models
export * from "@/core/models/Boleto";
export * from "@/core/models/Pix";
export * from "@/core/models/PixInfo";
export * from "@/core/models/Webhook";

export default Intopays;
