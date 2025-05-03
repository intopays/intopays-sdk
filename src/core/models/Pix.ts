import { PixInfo } from "@/core/models/PixInfo";
import { IntegrationEnum } from "@/core/enums/IntegrationEnum";
import { PixTransactionStatus } from "@/core/enums/PixTransactionStatus";

/**
 * Representa uma solicitação e resposta de integração com o sistema de pagamento via Pix.
 */
export class Pix {
  public constructor(data?: Partial<Pix>) {
    if (data) {
      Object.assign(this, data);
    }
  }

  // request
  /**
   * Tempo de expiração do Pix em segundos.
   */
  public calendarExpiration!: number;

  /**
   * Nome do pagador (devedor).
   */
  public debtorName!: string;

  /**
   * Documento do pagador (CPF ou CNPJ).
   */
  public debtorDocument!: string;

  /**
   * Valor original da cobrança em formato string (ex: "150.00").
   */
  public amountOriginal!: string;

  /**
   * Tipo de modificação permitida no valor:
   * - `0`: Valor fixo (sem alteração)
   * - `1`: Permite alteração pelo pagador
   */
  public amountModificationType!: number;

  /**
   * Mensagem adicional visível ao pagador.
   */
  public payerRequest!: string;

  /**
   * Lista de informações adicionais visíveis no comprovante de pagamento Pix.
   * Cada item representa uma informação nomeada como "chave: valor".
   */
  public additionalInfos: Array<PixInfo>;

  /**
   * Instituição financeira utilizada na integração Pix.
   * Pode ser: SICOOB, SICREDI, INTER, SANTANDER, BANCODOBRASIL, BRADESCO ou ITAU.
   */
  public integrationType: IntegrationEnum;

  // Response
  /**
   * ID interno da transação Pix.
   */
  public id?: number;

  /**
   * Chave Pix utilizada na cobrança (e-mail, CPF, CNPJ, telefone ou chave aleatória).
   */
  public pixKey?: string;

  /**
   * Status atual da cobrança Pix.
   * Pode ser: ACTIVE, COMPLETED, REMOVED_BY_USER_RECEIVER ou REMOVED_BY_PSP.
   */
  public status?: PixTransactionStatus;

  /**
   * Revisão atual da cobrança Pix (utilizado em atualizações).
   */
  public revision?: number;

  /**
   * ID da localização gerada pelo PSP (Provedor de Serviços de Pagamento).
   */
  public locId?: number;

  /**
   * URL da localização da cobrança (geralmente um link QR Code).
   */
  public locLocation?: string;

  /**
   * Tipo da localização gerada (ex: `cob`, `cobv`, etc).
   */
  public locType?: string;

  /**
   * Endereço completo da cobrança Pix (equivalente ao QR Code dinâmico).
   */
  public location?: string;

  /**
   * Identificador da transação gerado pelo cliente (TxID).
   */
  public transactionId?: string;
}
