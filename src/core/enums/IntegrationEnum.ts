/**
 * Enum que representa os bancos disponíveis para integração.
 * Utilizado para determinar qual instituição bancária está sendo usada
 * na geração de boletos ou cobranças via Pix.
 */
export enum IntegrationEnum {
  /** Banco Sicoob */
  SICOOB = "SICOOB",

  /** Banco Sicredi */
  SICREDI = "SICREDI",

  /** Banco Inter */
  INTER = "INTER",

  /** Banco Santander */
  SANTANDER = "SANTANDER",

  /** Banco do Brasil */
  BANCODOBRASIL = "BANCODOBRASIL",

  /** Banco Bradesco */
  BRADESCO = "BRADESCO",

  /** Banco Itaú */
  ITAU = "ITAU"
}
