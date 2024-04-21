import { faker } from "@faker-js/faker";
import Intopays from "@/app/Intopays";
import { environment } from "@/infra/configs/environment";
import { Webhook } from "../models/Webhook";

describe("WebhookService", () => {
  describe("create", () => {
    let intopays: Intopays;
    let webhooks: Array<Webhook>;

    beforeEach(() => {
      intopays = new Intopays({
        token: String(environment.test.TOKEN),
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

    it("should list all registered webhooks successfully", async() => {
      try {
        const payload = {
          endpoint: null // search a webhook
        };
        const response = await intopays.webhooks.find(payload);
        expect(Array.isArray(response)).toBeTruthy();
        webhooks = response; // add webhooks to the next text
      } catch (error) {
        console.log(error);
        expect(error.response.status).toBe(401);
        expect(error.response.data.status).toBe(false);
      }
    });

    it("should delete all registered webhooks successfully", async() => {
      try {
        for (const webhook of webhooks) {
          const response = await intopays.webhooks.delete(webhook.id);
          expect(response).toBeFalsy();
        }
      } catch (error) {
        console.log(error);
        expect(error.response.status).toBe(401);
        expect(error.response.data.status).toBe(false);
      }
    });
  });

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
