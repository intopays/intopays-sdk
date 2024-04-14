import { faker } from "@faker-js/faker";
import Intopays from "@/app/Intopays";
import { environment } from "@/infra/configs/environment";

describe("WebhookService", () => {
  describe("verifySignature", () => {
    let xWebhookSignature: string;
    let intopays: Intopays;

    beforeEach(() => {
      xWebhookSignature = "d87ff6ba065fe7880212b2579cbe100c950ca67a6dc87b4cd7aba0e6921bad93";
      intopays = new Intopays({
        token: String(environment.development.TOKEN),
        mode: "development"
      });
    });

    // webhook create
    it("should create a webhook successfully", async() => {
      const payload = {
        endpoint: faker.internet.url()
      };
      try {
        const response = await intopays.webhooks.create(payload) as any;
        expect(response.endpoint).toBe(payload.endpoint);
        expect(response.signature).toBeTruthy();
      } catch (error) {
        expect(error.response.status).toBe(401);
        expect(error.response.data.status).toBe(false);
      }
    });

    // signature
    it("should verify a signature correctly", () => {
      const payload = {
        name: "test"
      };
      const headers = { "x-webhook-signature": xWebhookSignature };
      const received = intopays.webhooks.verifySignature(payload, headers["x-webhook-signature"], "signature");
      expect(received).toBe(true);
    });

    it("should fail to verify a signature", () => {
      const payload = {
        name: "test2"
      };
      const headers = { "x-webhook-signature": xWebhookSignature };
      const result = intopays.webhooks.verifySignature(payload, headers["x-webhook-signature"], "signature");
      expect(result).toBe(false);
    });
  });
});
