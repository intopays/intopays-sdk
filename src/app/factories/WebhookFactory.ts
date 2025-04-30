import { WebhookService } from "@/core/services/WebhookService";
import { WebhookRemote } from "@/infra/http/WebhookRemote";
import { IntopaysConstructor } from "../Intopays";

export class WebhookFactory {
  public static createWebhookService(config: IntopaysConstructor): WebhookService {
    return new WebhookService(new WebhookRemote(config));
  }
}
