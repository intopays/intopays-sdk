import crypto from "node:crypto";

export class WebhookService {
  public verifySignature(payload: any, xWebhookSignature: string, signature: string): boolean {
    const computedSignature = crypto.createHmac("sha256", signature).update(JSON.stringify(payload)).digest("hex");
    return xWebhookSignature == computedSignature;
  }
}
