import { Intopays, DiscountEnum, IntegrationEnum, Boleto, StateEnum, FineTypeEnum, InterestEnum, PaymentStatus } from "@/app/Intopays";
import { environment } from "@/infra/configs/environment";

describe("BoletoService", () => {
  let intopays: Intopays;
  let currentBoleto: Boleto;

  beforeEach(() => {
    intopays = new Intopays({
      token: String(environment.test.TOKEN),
      mode: "development"
    });
  });

  it("should create a boleto successfully", async() => {
    const boleto = new Boleto({
      amount: 2.51,
      dueDate: new Date(),
      daysAfterDueDateForCancellation: 30,
      payerDocument: "000.000.000-00",
      payerName: "Luffrs",
      payerEmail: "email@intoapys.com",
      payerPhone: "51999999999",
      payerZipCode: "91760110",
      payerNumber: "123",
      payerComplement: "Apto 123",
      payerNeighborhood: "Centro",
      payerCity: "Salto",
      payerState: StateEnum.AC,
      payerAddress: "Rua Principal",
      messageLine1: "Message line 1",
      messageLine2: "Message line 2",
      discount1Code: DiscountEnum.NO_DISCOUNT,
      discount1Rate: 0,
      discount1Value: 0,
      discount1Date: new Date(),
      discount2Code: DiscountEnum.NO_DISCOUNT,
      discount2Rate: 0,
      discount2Value: 10,
      discount2Date: new Date(),
      fineCode: FineTypeEnum.NO_FINE,
      fineDate: null,
      fineValue: 0,
      fineRate: 0,
      interestCode: InterestEnum.EXEMPT,
      interestDate: null,
      interestRate: 0,
      interestValue: 0,
      finalBeneficiaryName: "Final Beneficiary",
      finalBeneficiaryDocument: "111.111.111-11",
      finalBeneficiaryZipCode: "98765432",
      finalBeneficiaryAddress: "Rua Final",
      finalBeneficiaryNeighborhood: "Bairro Final",
      finalBeneficiaryCity: "Final City",
      finalBeneficiaryState: StateEnum.AC,
      integrationType: IntegrationEnum.SICOOB
    });

    const received = await intopays.boleto.create(boleto).catch(error => {
      expect(error.response.status).toBe(401);
      expect(error.response.data.status).toBe(false);
    }) as Boleto;
    currentBoleto = received;
    expect(received.status).toBe(PaymentStatus.OPEN);
    expect(received.integrationType).toBe(IntegrationEnum.SICOOB);
  });

  it("should list the last 100 boletos successfully", async() => {
    const received: Array<Boleto> = await intopays.boleto.search({
      status: PaymentStatus.OPEN
    }).catch(error => {
      expect(error.response.status).toBe(401);
      expect(error.response.data.status).toBe(false);
    }) as any;
    expect(Array.isArray(received)).toBeTruthy();
    // for (const boleto of received) {
    //   expect(boleto.status).toBe(PaymentStatus.OPEN);
    // }
  });

  it("should find a void by id successfully", async() => {
    const received = await intopays.boleto.void(currentBoleto.id).catch(error => {
      expect(error.response.status).toBe(401);
      expect(error.response.data.status).toBe(false);
    });
    expect(received).toBeTruthy();
  });

  it("should find a boleto by id successfully", async() => {
    const received = await intopays.boleto.find(currentBoleto.id).catch(error => {
      expect(error.response.status).toBe(401);
      expect(error.response.data.status).toBe(false);
    }) as Boleto;
    expect(received).toBeTruthy();
    expect(received.id).toBe(currentBoleto.id);
    expect(received.status).toBe(PaymentStatus.PROCESSING);
  });
});
