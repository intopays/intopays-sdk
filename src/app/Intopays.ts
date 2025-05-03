import { PixFactory } from "@/app/factories/PixFactory";
import { WebhookFactory } from "@/app/factories/WebhookFactory";
import { WebhookService } from "@/core/services/WebhookService";
import { PixService } from "@/core/services/PixService";
import { BoletoService } from "@/core/services/BoletoService";
import { BoletoFactory } from "@/app/factories/BoletoFactory";

export class Intopays {
  public pix: PixService;
  public boleto: BoletoService;
  public webhook: WebhookService;

  public constructor(config: IntopaysConstructor) {
    this.pix = PixFactory.createPixService(config);
    this.boleto = BoletoFactory.createBoletoService(config);
    this.webhook = WebhookFactory.createWebhookService(config);
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
export * from "@/core/enums/DiscountEnum";

// models
export * from "@/core/models/Boleto";
export * from "@/core/models/Pix";
export * from "@/core/models/PixInfo";
export * from "@/core/models/Webhook";

export default Intopays;
