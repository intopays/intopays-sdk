import crypto from "crypto";
import { Webhook } from "@/core/models/Webhook";
import { WebhookHttp } from "@/infra/http/WebhookHttp";

export class WebhookService {
  public constructor(
    private readonly webhookHttp: WebhookHttp
  ) {}

  public async create(data: { endpoint: string }): Promise<Webhook> {
    const response = await this.webhookHttp.create(data);
    return response.data;
  }

  public verifySignature(payload: any, xWebhookSignature: string, signature: string): boolean {
    const computedSignature = crypto.createHmac("sha256", signature).update(JSON.stringify(payload)).digest("hex");
    return xWebhookSignature == computedSignature;
  }
}
