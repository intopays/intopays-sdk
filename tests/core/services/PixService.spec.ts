import Intopays from "@/app/Intopays";
import { environment } from "@/infra/configs/environment";
import { IntegrationEnum } from "@/core/enums/IntegrationEnum";
import { PixTransactionStatus } from "@/core/enums/PixTransactionStatus";
import { Pix } from "@/core/models/Pix";

describe("PixService", () => {
  let intopays: Intopays;
  let pixs: Array<Pix>;

  beforeEach(() => {
    intopays = new Intopays({
      token: String(environment.test.TOKEN),
      mode: "development"
    });
  });

  it("should create a pix successfully", async() => {
    try {
      const response = await intopays.pixs.create({
        calendarExpiration: 86400,
        debtorName: "Lucas Lopes",
        debtorDocument: "000.000.000-00",
        amountOriginal: "10.99",
        amountModificationType: 0,
        payerRequest: "Esse texto está limitado a 140 caracteres.",
        additionalInfos: [
          {
            name: "Campo 1",
            value: "Informação Adicional do PSP-Recebedor"
          }
        ],
        integrationType: IntegrationEnum.SICOOB
      });
      expect(response.status).toBe(PixTransactionStatus.ACTIVE);
    } catch (error) {
      expect(error.response.status).toBe(401);
      expect(error.response.data.status).toBe(false);
    }
  });

  it("should list the last 100 pixs successfully", async() => {
    try {
      const response = await intopays.pixs.find({
        status: PixTransactionStatus.ACTIVE
      });
      expect(Array.isArray(response)).toBeTruthy();
      pixs = response;
    } catch (error) {
      expect(error.response.status).toBe(401);
      expect(error.response.data.status).toBe(false);
    }
  });

  it("should find a pix by id successfully", async() => {
    try {
      const response = await intopays.pixs.findOne(Number(pixs[0].id));
      expect(response).toBeTruthy();
      expect(response.id).toBe(pixs[0].id);
      expect(response.status).toBe(PixTransactionStatus.ACTIVE);
    } catch (error) {
      console.log(error);
      expect(error.response.status).toBe(401);
      expect(error.response.data.status).toBe(false);
    }
  });
});
