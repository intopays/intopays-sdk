import { IntegrationEnum } from "@/core/enums/IntegrationEnum";
import { StateEnum } from "@/core/enums/StateEnum";
import { FineTypeEnum } from "@/core/enums/FineTypeEnum";
import { InterestEnum } from "@/core/enums/InterestEnum";
import { PaymentStatus } from "@/core/enums/PaymentStatus";
import { DiscountEnum } from "@/core/enums/DiscountEnum";

/**
 * Representa um boleto bancário com todos os dados necessários para emissão e integração.
 */
export class Boleto {
  /** Identificador único do boleto */
  public id!: number;

  /** Valor do boleto em centavos */
  public amount!: number;

  /** Data de vencimento do boleto */
  public dueDate!: Date;

  /** Dias após o vencimento para cancelamento automático */
  public daysAfterDueDateForCancellation!: number;

  /** CPF ou CNPJ do pagador */
  public payerDocument: string;

  /** Nome completo do pagador */
  public payerName!: string;

  /** E-mail do pagador */
  public payerEmail!: string;

  /** Telefone do pagador */
  public payerPhone!: string;

  /** CEP do pagador */
  public payerZipCode!: string;

  /** Número do endereço do pagador */
  public payerNumber!: string;

  /** Complemento do endereço do pagador */
  public payerComplement!: string;

  /** Bairro do pagador */
  public payerNeighborhood!: string;

  /** Cidade do pagador */
  public payerCity!: string;

  /**
   * Estado (UF) do pagador.
   * Ex: `SP`, `RJ`, `MG`, etc.
   * Valores válidos: `AC`, `AL`, `AP`, `AM`, `BA`, `CE`, `DF`, `ES`, `GO`, `MA`, `MT`,
   * `MS`, `MG`, `PA`, `PB`, `PR`, `PE`, `PI`, `RJ`, `RN`, `RS`, `RO`, `RR`, `SC`, `SP`, `SE`, `TO`.
   */
  public payerState!: StateEnum;

  /** Endereço completo do pagador */
  public payerAddress!: string;

  /** Mensagem personalizada (linha 1) */
  public messageLine1!: string;

  /** Mensagem personalizada (linha 2) */
  public messageLine2!: string;

  /**
   * Tipo de desconto aplicado:
   * - `NO_DISCOUNT`: Sem desconto
   * - `FIXED_VALUE_UNTIL_INFORMED_DATE`: Valor fixo até a data informada
   * - `PERCENTAGE_UNTIL_INFORMED_DATE`: Percentual até a data informada
   */
  public discount1Code: DiscountEnum = DiscountEnum.NO_DISCOUNT;

  /** Percentual do primeiro desconto */
  public discount1Rate: number = 0;

  /** Valor fixo do primeiro desconto */
  public discount1Value: number = 0;

  /** Data limite para o primeiro desconto */
  public discount1Date!: Date;

  /**
   * Tipo de desconto aplicado:
   * - `NO_DISCOUNT`: Sem desconto
   * - `FIXED_VALUE_UNTIL_INFORMED_DATE`: Valor fixo até a data informada
   * - `PERCENTAGE_UNTIL_INFORMED_DATE`: Percentual até a data informada
   */
  public discount2Code: DiscountEnum = DiscountEnum.NO_DISCOUNT;

  /** Percentual do segundo desconto */
  public discount2Rate: number = 0;

  /** Valor fixo do segundo desconto */
  public discount2Value: number = 0;

  /** Data limite para o segundo desconto */
  public discount2Date!: Date;

  /**
   * Tipo de multa a ser aplicada:
   * - `NO_FINE`: Sem multa
   * - `AMOUNT`: Valor fixo
   * - `PERCENT`: Percentual sobre o valor do boleto
   */
  public fineCode: FineTypeEnum = FineTypeEnum.NO_FINE;

  /** Data de início da multa */
  public fineDate: Date | null = null;

  /** Percentual da multa */
  public fineRate: number = 0;

  /** Valor fixo da multa */
  public fineValue: number = 0;

  /**
   * Tipo de juros aplicável ao boleto:
   * - `AMOUNT_PER_DAY`: Valor fixo por dia de atraso
   * - `MONTHLY_RATE`: Percentual mensal de juros
   * - `EXEMPT`: Isento de juros
   */
  public interestCode: InterestEnum = InterestEnum.EXEMPT;

  /** Data de início da cobrança de juros */
  public interestDate: Date | null = null;

  /** Percentual dos juros */
  public interestRate: number = 0;

  /** Valor fixo dos juros */
  public interestValue: number = 0;

  /** Nome do beneficiário final do boleto */
  public finalBeneficiaryName!: string;

  /** Documento (CPF/CNPJ) do beneficiário final */
  public finalBeneficiaryDocument!: string;

  /** CEP do beneficiário final */
  public finalBeneficiaryZipCode!: string;

  /** Endereço do beneficiário final */
  public finalBeneficiaryAddress!: string;

  /** Bairro do beneficiário final */
  public finalBeneficiaryNeighborhood!: string;

  /** Cidade do beneficiário final */
  public finalBeneficiaryCity!: string;

  /**
   * Estado (UF) do beneficiário final.
   * Ex: `SP`, `RJ`, `MG`, etc.
   * Valores válidos: `AC`, `AL`, `AP`, `AM`, `BA`, `CE`, `DF`, `ES`, `GO`, `MA`, `MT`,
   * `MS`, `MG`, `PA`, `PB`, `PR`, `PE`, `PI`, `RJ`, `RN`, `RS`, `RO`, `RR`, `SC`, `SP`, `SE`, `TO`.
   */
  public finalBeneficiaryState!: StateEnum;

  /** Código de barras do boleto */
  public barcode!: string;

  /** Linha digitável do boleto */
  public digitableLine!: string;

  /** Código QR para pagamento instantâneo (ex: PIX) */
  public qrcode!: string;

  /** Código de referência interno do sistema */
  public referenceCode!: string;

  /** Código de integração com a instituição bancária */
  public integrationBankingCode!: string;

  /**
   * Tipo de integração utilizada com a instituição bancária:
   * - `SICOOB`
   * - `SICREDI`
   * - `INTER`
   * - `SANTANDER`
   * - `BANCODOBRASIL`
   * - `BRADESCO`
   * - `ITAU`
   */
  public integrationType: IntegrationEnum;

  /**
   * Status atual do boleto:
   * - `EXPIRED`: Expirado (data de validade final ultrapassada)
   * - `OVERDUE`: Vencido (vencimento ultrapassado, mas ainda válido)
   * - `OPEN`: Aberto (ainda aguardando pagamento)
   * - `PAID`: Pago
   * - `CANCELLED`: Cancelado
   * - `PROCESSING`: Em processamento (aguardando confirmação bancária)
   */
  public status?: PaymentStatus;
}
