import { WebhookService } from "@/core/services/WebhookService";
import { WebhookHttp } from "@/infra/http/WebhookHttp";
import { IntopaysConstructor } from "../Intopays";

export class WebhookFactory {
  public static createWebhookService(config: IntopaysConstructor): WebhookService {
    return new WebhookService(new WebhookHttp(config));
  }
}
