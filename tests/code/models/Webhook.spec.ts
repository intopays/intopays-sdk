import Intopays from "@/app/Intopays";

describe("WebhookService", () => {
  describe("verifySignature", () => {
    let xWebhookSignature;
    let intopays;

    beforeEach(() => {
      xWebhookSignature = "d87ff6ba065fe7880212b2579cbe100c950ca67a6dc87b4cd7aba0e6921bad93";
      intopays = new Intopays();
    });

    it("should verify a signature correctly", () => {
      const payload = {
        name: "test"
      };
      const headers = { "x-webhook-signature": xWebhookSignature };
      const result = intopays.webhooks.verifySignature(payload, headers["x-webhook-signature"], "signature");
      expect(result).toBe(true);
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
